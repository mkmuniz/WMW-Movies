import { useState, useEffect } from "react";

import { Movie } from "types/movie";
import { MoviesListProps } from "types/props";

import MovieCard from "components/MovieCard";

import movies from "data/popular.json";
import topMovies from "data/top-rated.json";
import upComing from "data/upcoming.json";
import nowPlaying from "data/now-playing.json";

import ModalMovie from "components/Modal/movie";
import MoviesCardSkeleton from "components/Skeleton/index";
import Slider from "components/Slider";

export default function MoviesList({
  searchTerm,
  highlight,
  categories,
}: MoviesListProps) {
  let geralMovies = [...movies];
  const highlightMovie = [...topMovies, ...movies];
  const [status, setStatus] = useState<boolean>(false);
  const [movieData, setMovieData] = useState<Movie | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const sortedMoviesHighlight = highlightMovie.sort((a: Movie, b: Movie) => {
    if (a.vote_average === b.vote_average) {
      return b.popularity - a.popularity;
    }

    return b.vote_average - a.vote_average;
  });

  if (highlight) geralMovies = sortedMoviesHighlight;

  const filteredData = geralMovies.filter((movie: Movie) => {
    const titleMatch = movie?.title
      .toLowerCase()
      .includes(searchTerm?.toLowerCase());
    if (categories.length > 0) {
      const categoryMatch = categories.every(
        (id: number) => movie?.genre_ids.includes(id),
      );
      return titleMatch && categoryMatch;
    }

    return titleMatch;
  });

  const handleStatus = (value: boolean) => {
    setStatus(value);
  };

  const handleMovieData = (movie: Movie) => {
    setMovieData(movie);
  };

  return (
    <>
      <span className="text-standard font-bold text-3xl ml-4 mb-12">
        {highlight ? <>Highlight Movies</> : <>General</>}
      </span>
      <div className="w-full h-full auto-cols-auto grid lg:grid-cols-5 sm:grid-cols-3 mobi:grid-cols-2 grid-cols-1 place-items-center">
        {isLoading ? (
          <MoviesCardSkeleton />
        ) : (
          filteredData.map((movie: Movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              status={status}
              handleStatus={handleStatus}
              handleMovieData={handleMovieData}
            />
          ))
        )}
      </div>
      <ModalMovie
        movie={movieData}
        status={status}
        handleStatus={handleStatus}
      />
      <div id="upcoming" className="flex flex-col w-full mt-12">
        <span className="text-standard font-bold text-3xl mb-4 ml-4">
          Upcoming
        </span>
        <div className="sm:m-6">
          <Slider
            movies={upComing}
            status={status}
            handleStatus={handleStatus}
            handleMovieData={handleMovieData}
          />
        </div>
      </div>
      <div id="playing-now" className="flex flex-col w-full">
        <span className="text-standard font-bold text-3xl mb-4 ml-4">
          Playing Now
        </span>
        <div className="sm:m-6">
          <Slider
            movies={nowPlaying}
            status={status}
            handleStatus={handleStatus}
            handleMovieData={handleMovieData}
          />
        </div>
      </div>
    </>
  );
}

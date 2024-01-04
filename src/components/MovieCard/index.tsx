import { FaVideo } from "react-icons/fa";
import { MovieCardProps } from "types/props";

export default function MovieCard({
  movie,
  status,
  handleStatus,
  handleMovieData,
}: MovieCardProps) {
  const assetsUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  const videoUrl = "https://www.youtube.com/results?search_query=";
  const movieDate = movie.release_date.split("-");

  const movieTitleParsed = movie.title.replace(" ", "+");
  return (
    <>
      <div className="m-auto max-w-52 max-h-92 bg-gray-900 rounded group content-div transition duration-300 ease-in-out hover:scale-95 mt-12">
        <a
          onClick={() => {
            handleMovieData(movie);
            handleStatus(!status);
          }}
        >
          <img
            src={assetsUrl + movie.poster_path}
            className="max-w-full h-full rounded cursor-pointer"
          />
        </a>
        <div className="m-6 text-center font-bold flex flex-col items-center justify-center">
          <p className="text-standard text-[90%] overflow-hidden truncate max-w-40 max-h-20 mb-6">
            {movie.title} ({movieDate[0]})
          </p>
          <a
            href={videoUrl + movieTitleParsed + "+Trailer"}
            target="_blank"
            className="flex items-center space-x-2 pl-4 pr-4 pt-2 pb-2 bg-standard transition-colors duration-300 rounded text-black m-6"
            rel="noreferrer"
          >
            <FaVideo />
            <p>Trailer</p>
          </a>
        </div>
      </div>
    </>
  );
}

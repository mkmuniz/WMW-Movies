import MovieCard from "components/MovieCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Movie } from "types/movie";
import { SliderProps } from "types/props";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2560 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 2560, min: 1024 },
    items: 5,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 400 },
    items: 2,
    slidesToSlide: 2,
  },
  smallMobile: {
    breakpoint: { max: 400, min: 150 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function Slider({
  movies,
  status,
  handleMovieData,
  handleStatus,
}: SliderProps) {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
        autoPlaySpeed={2000}
        partialVisible={false}
        itemClass="w-full"
        dotListClass="custom-dot-list-style"
      >
        {movies.map((movie: Movie, index: number) => {
          return (
            <MovieCard
              movie={movie}
              status={status}
              handleMovieData={handleMovieData}
              handleStatus={handleStatus}
              key={index}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

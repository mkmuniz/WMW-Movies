import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { MovieCarousel } from "types/movie";

export default function CarouselHeader() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const movies = [
    {
      title: "Jujutsu no Kaisen 0 (2021)",
      description:
        "A high schooler gains control of an extremely powerful Cursed Spirit and gets enrolled in the Tokyo Prefectural Jujutsu High School by Jujutsu Sorcerers to help him control his power and keep an eye on him.",
      img: "./movies/jujutsu.jpg",
    },
    {
      title: "Five Nights at Freddy's (2023)",
      description:
        "At Freddy Fazbear's Pizza, animated robots entertain children during the day. But when night comes, they transform into psychopathic killers.",
      img: "./movies/fnaf.jpeg",
    },
    {
      title: "The Hunger Games: The Ballad Of Songbirds and Snakes (2023)",
      description:
        "Years before becoming the tyrannical president of Panem, 18-year-old Coriolanus Snow sees a chance to change his fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
      img: "./movies/hg.jpg",
    },
  ];

  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      autoPlay={true}
      swipeable={true}
      draggable={true}
      infinite={true}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="relative w-full"
    >
      {movies.map((movie: MovieCarousel, index: number) => {
        return (
          <div
            key={index}
            className="w-full h-full relative font-bold overflow-hidden"
          >
            <img
              src={movie.img}
              className="w-full h-full max-h-screen min-h-72"
            />
            <div className="absolute bottom-0 px-4 py-3 bg-black w-full">
              <h1 className="text-standard font-semibold lg:text-4xl md:text-3xl sm:text-2xl text-xl">
                {movie.title}
              </h1>
              <p className="text-gray-200 sm:block hidden">
                {movie.description}
              </p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

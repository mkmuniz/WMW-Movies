import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { ModalMovieProps } from "types/props";
import { AiOutlineLike } from "react-icons/ai";
import { TbRating18Plus } from "react-icons/tb";
import { TbRating12Plus } from "react-icons/tb";
import { MdOutlineGroups } from "react-icons/md";

import { Genre } from "types/genres";

import genres from "data/genres.json";

export default function ModalMovie({
  movie,
  status,
  handleStatus,
}: ModalMovieProps) {
  const assetsUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  const movieYearDate = movie?.release_date.split("-");
  const movieGenres = genres
    ?.filter((genre: Genre) => {
      if (movie?.genre_ids.includes(genre.id)) {
        return genre;
      }
    })
    .map((genre: Genre) => {
      return genre.name;
    })
    .join(", ");
  return (
    <>
      <Dialog open={status} handler={() => handleStatus(!status)}>
        <DialogBody className="grid sm:grid-cols-2 grid-cols-1 bg-black rounded overflow-y-auto max-h-[80vh]">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <div>
              <img src={assetsUrl + movie?.poster_path} />
            </div>
            <div className="grid grid-cols-3 p-3 w-full m-2 text-white bg-gray-900 rounded font-bold">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <MdOutlineGroups className="text-2xl text-standard" />
                {movie?.popularity}
              </div>
              <div className="flex flex-col items-center justify-center h-full w-full">
                <AiOutlineLike className="text-2xl text-standard" />
                {movie?.vote_count}
              </div>
              <div className="flex flex-col items-center justify-center h-full w-full">
                {movie?.adult ? (
                  <>
                    <TbRating18Plus className="text-2xl text-standard" />
                    Adult
                  </>
                ) : (
                  <>
                    <TbRating12Plus className="text-2xl text-standard" />
                    Teen
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full w-full text-white text-center font-bold">
            <div className="sm:text-left text-center flex flex-col">
              <span className="w-full sm:text-xl text-[90%] text-standard">
                {movie?.title} ({movieYearDate && movieYearDate[0]})
              </span>
              <span className="text-[80%]">
                Original Title: {movie?.original_title}
              </span>
              <span className="text-[70%]">Genres: {movieGenres}</span>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[70%]">{movie?.overview}</span>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-center bg-black">
          <Button
            className="bg-standard hover:bg-standardHover text-black font-bold"
            onClick={() => handleStatus(!status)}
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

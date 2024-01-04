import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { IoMdOptions } from "react-icons/io";

import { Checkbox } from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";

import genres from "data/genres.json";

import { Genre } from "types/genres";
import { ModalFilterProps } from "types/props";

export default function ModalFilter({
  highlight,
  handleHighlight,
  handleCategories,
  categories,
}: ModalFilterProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button
        onClick={handleOpen}
        className="p-3 bg-standard hover:bg-standardHover transition-colors duration-300 rounded"
      >
        <IoMdOptions />
      </button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="bg-black flex flex-col overflow-y-auto max-h-[80vh]">
          <div className="flex flex-col">
            <span className="text-white font-bold text-3xl">Filters</span>
            <div className="flex flex-col">
              <span className="text-white mt-2">Categories</span>
              <div className="grid mobi:grid-cols-3 sm:grid-cols-3 grid-cols-2">
                {genres.map(
                  (genre: Genre, index: React.Key | null | undefined) => {
                    return categories.includes(genre.id) ? (
                      <>
                        <Checkbox
                          key={index}
                          value={genre.id}
                          name={genre.name}
                          label={genre.name}
                          defaultChecked
                          onClick={() => handleCategories(genre.id)}
                          crossOrigin
                        />
                      </>
                    ) : (
                      <>
                        <Checkbox
                          key={index}
                          value={genre.id}
                          name={genre.name}
                          label={genre.name}
                          onClick={() => handleCategories(genre.id)}
                          crossOrigin
                        />
                      </>
                    );
                  },
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white mt-2">Another Categories</span>
              <Switch
                color="yellow"
                label="Highlight Movies"
                checked={highlight}
                crossOrigin
                onClick={handleHighlight}
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-center bg-black">
          <Button
            className="bg-standard hover:bg-standardHover text-black font-bold"
            onClick={() => handleOpen()}
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

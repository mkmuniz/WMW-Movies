import React from "react";

import ModalFilter from "components/Modal/filter";
import { SearchSectionProps } from "types/props";

export default function SearchSection({
  getData,
  handleHighlight,
  handleCategories,
  categories,
  highlight,
}: SearchSectionProps) {
  return (
    <>
      <div className="mb-12 mt-12 w-full flex items-center justify-center space-x-2">
        <input
          type="search"
          className="bg-black border border-white rounded text-white p-2 w-2/4"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => getData(e)}
        />
        <ModalFilter
          handleHighlight={handleHighlight}
          handleCategories={handleCategories}
          categories={categories}
          highlight={highlight}
        />
      </div>
    </>
  );
}

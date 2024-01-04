import { useState } from "react";
import { removeItem } from "utils/itens";
import SearchSection from "../SearchSection";
import MoviesList from "components/MovieList";

export default function MoviesSection() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categories, setCategories] = useState<number[]>([]);
  const [highlight, setHighlight] = useState<boolean>(false);

  const getData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleHighlight = () => setHighlight(!highlight);

  const handleCategories = (value: number) => {
    if (categories.includes(value)) {
      const categoriesParsed = removeItem(categories, value);

      return setCategories([...categoriesParsed]);
    }

    return setCategories([...categories, value]);
  };

  return (
    <>
      <div id="moviesSection" className="h-full flex justify-center">
        <div className="w-full h-full">
          <SearchSection
            getData={getData}
            handleHighlight={handleHighlight}
            handleCategories={handleCategories}
            categories={categories}
            highlight={highlight}
          />
          <MoviesList
            searchTerm={searchTerm}
            highlight={highlight}
            categories={categories}
          />
        </div>
      </div>
    </>
  );
}

import { Movie } from "./movie";

export type MovieItemType = {
  movie: Movie;
};

export type SideBarProps = {
  status: boolean;
  handleStatusSideBar: () => void;
};

export type ModalMovieProps = {
  movie: Movie | null;
  status: boolean;
  handleStatus: (status: boolean) => void;
};

export type ModalFilterProps = {
  highlight: boolean;
  handleHighlight: () => void;
  handleCategories: (value: number) => void;
  categories: number[];
};

export type MovieCardProps = {
  movie: Movie;
  status: boolean;
  handleStatus: (value: boolean) => void;
  handleMovieData: (movie: Movie) => void;
};

export type MoviesListProps = {
  searchTerm: string;
  highlight: boolean;
  categories: number[];
};

export type SearchSectionProps = {
  getData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleHighlight: () => void;
  handleCategories: (value: number) => void;
  categories: number[];
  highlight: boolean;
};

export type SliderProps = {
  movies: Movie[];
  status: boolean;
  handleStatus: (value: boolean) => void;
  handleMovieData: (movie: Movie) => void;
};

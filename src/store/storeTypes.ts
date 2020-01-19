import { MovieState } from "../reducers/types/movie";

export type StoreState = {
  movies: Array<MovieState>;
  movieDetail: MovieState;
};

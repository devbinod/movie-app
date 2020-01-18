import { MovieState } from "../../reducers/types/movie";

export const GET_ALL_MOVIE_LIST = "@movies/GET_ALL_MOVIE_LIST";

export const GET_SINGLE_MOVIE = "@movies/GET_SINGLE_MOVIE";

export type GetAllPost = {
  type: typeof GET_ALL_MOVIE_LIST;
  payload: Array<MovieState>;
};

export const setMovieList = (movieList: Array<MovieState>): GetAllPost => {
  return {
    type: GET_ALL_MOVIE_LIST,
    payload: movieList
  };
};

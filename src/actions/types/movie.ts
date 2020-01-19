import { MovieState } from "../../reducers/types/movie";
import { getAllMovie } from "../movie";

export const GET_ALL_MOVIE_LIST = "@movies/GET_ALL_MOVIE_LIST";

export const GET_SINGLE_MOVIE = "@movies/GET_SINGLE_MOVIE";

export type GetAllMovie = {
  type: typeof GET_ALL_MOVIE_LIST;
  payload: Array<MovieState>;
};

export type GetSingleMovie = {
  type: typeof GET_SINGLE_MOVIE;
  payload: MovieState;
};

export const setMovieList = (movieList: Array<MovieState>): GetAllMovie => {
  return {
    type: GET_ALL_MOVIE_LIST,
    payload: movieList
  };
};

export const setSingleMovie = (movie: MovieState): GetSingleMovie => {
  return {
    type: GET_SINGLE_MOVIE,
    payload: movie
  };
};

const MovieActons = GET_SINGLE_MOVIE || GET_ALL_MOVIE_LIST;
export default MovieActons;

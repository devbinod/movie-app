import axios from "axios";
import { AnyAction } from "redux";
import { setMovieList, setSingleMovie } from "./types/movie";
import { Dispatch } from "react";

export const getAllMovie = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    axios
      .get("https://yts.lt/api/v2/list_movies.json")
      .then(res => dispatch(setMovieList(res.data.data.movies)))
      .catch(err => console.log(err));
  };
};

export const getSingleMovieDetail = (movie_id: number) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    axios
      .get(`https://yts.lt/api/v2/movie_details.json?movie_id=${movie_id}`)
      .then(res => {
        dispatch(setSingleMovie(res.data.data.movie));
      })
      .catch(err => console.log(err));
  };
};

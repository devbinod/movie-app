import axios from "axios";
import { AnyAction } from "redux";
import { setMovieList } from "./types/movie";
import { Dispatch } from "react";

export const getAllMovie = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    axios
      .get("https://yts.lt/api/v2/list_movies.json")
      .then(res => dispatch(setMovieList(res.data.data.movies)))
      .catch(err => console.log(err));
  };
};

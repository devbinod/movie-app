import { MovieState } from "./types/movie";
import { AnyAction } from "redux";
import { GET_ALL_MOVIE_LIST } from "../actions/types/movie";

type InitialState = {
  movieList: Array<MovieState>;
};

const initialState: InitialState = {
  movieList: []
};

export const movieReducer = (state = initialState, action: AnyAction) => {
  console.log(action);
  switch (action.type) {
    case GET_ALL_MOVIE_LIST:
      return action.payload;

    default:
      return initialState;
  }
};

export default movieReducer;

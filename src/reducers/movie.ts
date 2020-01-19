import { MovieState } from "./types/movie";
import { AnyAction } from "redux";
import { GET_ALL_MOVIE_LIST, GET_SINGLE_MOVIE } from "../actions/types/movie";

type InitialState = {
  movieList: Array<MovieState>;
  movieDetail: MovieState;
};
export const initialMovieDetailState = {
  id: 0,
  url: "",
  imdb_code: "",
  title: "",
  title_english: "",
  title_long: "",
  slug: "",
  year: 0,
  rating: 0,
  runtime: 0,
  genres: [],
  download_count: 0,
  like_count: 0,
  description_intro: "",
  description_full: "",
  yt_trailer_code: "",
  language: "",
  background_image: "",
  background_image_original: "",
  medium_cover_image: "",
  date_uploaded: "",
  torrents: []
};

const initialState: InitialState = {
  movieList: [],
  movieDetail: initialMovieDetailState
};

export const movieReducer = (state = initialState, action: AnyAction) => {
  console.log(action);
  switch (action.type) {
    case GET_ALL_MOVIE_LIST:
      return action.payload;

    case GET_SINGLE_MOVIE:
      return action.payload;

    default:
      return initialState;
  }
};

export default movieReducer;

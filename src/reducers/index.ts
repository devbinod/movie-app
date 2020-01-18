import { combineReducers } from "redux";
import { movieReducer as movies } from "./movie";

const rootReducer = combineReducers({
  movies
});

export default rootReducer;

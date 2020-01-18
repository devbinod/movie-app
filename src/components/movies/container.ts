import { ThunkDispatch } from "redux-thunk";
import { MovieState } from "../../reducers/types/movie";
import { Action } from "redux";
import { getAllMovie } from "../../actions/movie";
import { StoreState } from "../../store/storeTypes";
import { connect } from "react-redux";

export interface MapDispatchToProps {
  getAllMovie: () => void;
}

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<MovieState, null, Action>
): MapDispatchToProps => {
  return {
    getAllMovie: () => dispatch(getAllMovie())
  };
};

export interface MapStateToProps {
  movies: Array<MovieState>;
}
export const mapStateToProps = (state: StoreState) => {
  return {
    movies: state.movies
  };
};
export const container = connect(mapStateToProps, mapDispatchToProps);
export default container;

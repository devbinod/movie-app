import { ThunkDispatch } from "redux-thunk";
import { MovieState } from "../../reducers/types/movie";
import { Action } from "redux";
import { getAllMovie, getSingleMovieDetail } from "../../actions/movie";
import { StoreState } from "../../store/storeTypes";
import { connect } from "react-redux";

export interface MapDispatchToProps {
  getAllMovie: () => void;
  getSingleMovieDetail: (movie_id: number) => void;
}

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<MovieState, null, Action>
): MapDispatchToProps => {
  return {
    getAllMovie: () => dispatch(getAllMovie()),
    getSingleMovieDetail: movie_id => dispatch(getSingleMovieDetail(movie_id))
  };
};

export interface MapStateToProps {
  movies: Array<MovieState>;
  movieDetail: MovieState;
}
export const mapStateToProps = (state: StoreState) => {
  return {
    movies: state.movies,
    movieDetail: state.movieDetail
  };
};
export const container = connect(mapStateToProps, mapDispatchToProps);
export default container;

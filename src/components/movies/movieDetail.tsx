import React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import container, { MapDispatchToProps, MapStateToProps } from "./container";
import { MovieState } from "../../reducers/types/movie";
import { History } from "history";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps
} from "react-router-dom";

const styles = () =>
  createStyles({
    root: {
      margin: 30,
      padding: 30,
      background: "#fff"
    },
    movieGrid: {
      background: "crimson",
      margin: 10,
      "&:hover": {
        background: "blue"
      }
    }
  });

export type HistoryDetail = {
  history: History;
};
interface MatchParams {
  id: string;
}

export type Props = WithStyles &
  HistoryDetail &
  MapDispatchToProps &
  MapStateToProps &
  MovieState &
  RouteComponentProps<MatchParams>;
class MovieDetail extends React.Component<Props> {
  componentDidMount() {
    this.props.getSingleMovieDetail(parseInt(this.props.match.params.id));
  }

  render() {
    const { movieDetail } = this.props;
    console.log(this.props);
    console.log(movieDetail);
    return <div>Movie Detail.............</div>;
  }
}

export default container(withStyles(styles)(MovieDetail));

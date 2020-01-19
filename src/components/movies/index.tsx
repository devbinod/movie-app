import React, { Component } from "react";
import container, { MapStateToProps, MapDispatchToProps } from "./container";
import { MovieState, Torrent } from "../../reducers/types/movie";
import Image from "material-ui-image";
import StarIcon from "@material-ui/icons/Star";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  Link
} from "@material-ui/core";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";

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

export type Props = MapStateToProps & MapDispatchToProps & WithStyles;

export interface State {
  viewDetail: boolean;
}

export class Movie extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      viewDetail: false
    };
  }
  componentDidMount() {
    this.props.getAllMovie();
  }

  render() {
    const { movies, classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={10}>
          {movies.length > 1 ? (
            movies.map((movie: MovieState) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={3}
                  md={3}
                  key={movie.id}
                  className={classes.movieGrid}
                >
                  <Card className="card">
                    <CardActionArea>
                      <Image
                        src={movie.medium_cover_image}
                        style={{
                          width: "219px",
                          height: "0px",
                          marginLeft: "30px"
                        }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {movie.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                          {movie.year}
                        </Typography>
                        <Button size="medium" color="primary">
                          {movie.rating}
                          <StarIcon />
                        </Button>

                        <Button
                          size="medium"
                          color="secondary"
                          variant="contained"
                        >
                          View Details
                        </Button>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      {movie.torrents.map((t: Torrent) => {
                        return (
                          <Link href={t.url}>
                            <Button size="small" color="primary" key={t.hash}>
                              {t.quality}
                            </Button>
                          </Link>
                        );
                      })}
                    </CardActions>
                  </Card>{" "}
                </Grid>
              );
            })
          ) : (
            <div>loading............</div>
          )}
        </Grid>
      </div>
    );
  }
}

export default container(withStyles(styles)(Movie));

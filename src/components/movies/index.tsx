import React, { Component } from "react";
import container, { MapStateToProps, MapDispatchToProps } from "./container";
import { MovieState } from "../../reducers/types/movie";
import Image from "material-ui-image";

import {
  Grid,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
export type MovieProps = MapStateToProps & MapDispatchToProps;

export class Movie extends Component<MovieProps> {
  componentDidMount() {
    this.props.getAllMovie();
  }

  render() {
    const { movies } = this.props;
    return (
      <Grid container spacing={10}>
        {movies.length > 1 ? (
          movies.map((movie: MovieState) => {
            return (
              <Grid item xs={12} sm={3} md={3} key={movie.id}>
                <Card className="card">
                  <CardActionArea>
                    <Image
                      src={movie.medium_cover_image}
                      style={{
                        width: "219px",
                        height: "210px"
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {movie.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {movie.description_full}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>{" "}
              </Grid>
            );
          })
        ) : (
          <div>loading............</div>
        )}
      </Grid>
    );
  }
}

export default container(Movie);

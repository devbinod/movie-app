import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import container, { MapStateToProps, MapDispatchToProps } from "./container";

export type MovieProps = MapStateToProps & MapDispatchToProps;

export class Movie extends Component<MovieProps> {
  constructor(props: MovieProps) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllMovie();
  }

  render() {
    console.log(this.props.movies.length);
    return <div>Details</div>;
  }
}

export default container(Movie);

import React from "react";
import "./App.css";

import Movie from "./components/movies/index";
import { Provider } from "react-redux";
import store from "./store";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetail from "./components/movies/movieDetail";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  spacing: 4
});
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exacet path="/movie/:id/detail" component={MovieDetail} />
              <Route exacet path="/" component={Movie} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;

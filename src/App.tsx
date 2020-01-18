import React from "react";
import "./App.css";

import Movie from "./components/movies/index";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Movie />
      </div>
    </Provider>
  );
};

export default App;

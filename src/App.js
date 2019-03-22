import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Count from './components/Count'
import Control from './components/Control'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Redux Learning</h1>
          <Count />
          <Control />
        </div>
      </Provider>
    );
  }
}

export default App;

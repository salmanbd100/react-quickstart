import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Home } from "./app/Home";
import { Navbar } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container">
              <Navbar />
            </div>
            <Route path="/" component={Home} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

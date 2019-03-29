import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { ReduxTest } from "./app/ReduxTest";
import Bookmark from "./app/Bookmark";
import { Navbar } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import apiHelper from "./apiHelper";
apiHelper ();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container">
              <Navbar />
              {/* <ReduxTest /> */}
              {/* <Bookmark name="bookmark" /> */}
            </div>
            <Route path="/redux" component={ReduxTest} />
            <Route path="/bookmark" component={Bookmark} />
          </div>
          
        </Router>
      </Provider>
    );
  }
}

export default App;

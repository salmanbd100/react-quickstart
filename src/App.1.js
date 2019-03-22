import React, { Component } from "react";
import "./App.css";

import { createStore } from "redux";

class App extends Component {
  render() {
    const reducer = (state = {}, action) => {
		if (action.type === 'A') {
			return {
				...state,
				A: 'I am A'
			}
		}
		if (action.type === 'B') {
			return {
				...state,
				B: 'I am B'
			}
		}
      return state;
    };

    const store = createStore(reducer);

    store.subscribe(() => {
      console.log(store.getState().B);
    });
    store.subscribe(() => {
      console.log(store.getState().A);
    });

    store.dispatch({ type: "A" });
    store.dispatch({ type: "something" });
    store.dispatch({ type: "B" });
    store.dispatch({ type: "something" });

    return (
      <div className="App">
        <h1>Redux Learning</h1>
      </div>
    );
  }
}

export default App;

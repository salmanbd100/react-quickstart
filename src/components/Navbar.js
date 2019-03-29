import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/redux">Redux test</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">To do</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bookmark">Bookmark</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Demo</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;

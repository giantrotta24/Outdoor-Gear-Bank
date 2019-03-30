import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
        <i className="fas fa-mountain"></i> Outdoor Gear Bank
      </a>
    <ul className="navbar-nav ml-auto">
    {/* <ul className="nav nav-tabs"> */}

    {/* <form className="form-inline"> */}
      <a href="/rent" className="nav-item btn btn-sm btn-secondary mr-1" role="button">Rent</a>
      {/* <button class="btn btn-sm btn-outline-default navbar-dark mr-1" type="button">View Calander</button> */}
      <a href="/return" className="nav-item btn btn-sm btn-secondary mr-1" role="button">Return</a>
      <a href="/maintenance" className="nav-item btn btn-sm btn-secondary mr-1" role="button">Maintenance</a>
      <a href="/inventory" className="nav-item btn btn-sm btn-secondary mr-1" role="button">Add Inventory</a>

      {/* <button className="nav-item active btn btn-sm  mr-1" type="button">Available To Rent</button>
      <button className="btn btn-sm btn-outline-default navbar-light mr-1" type="button">Return Item</button>
      <button className="btn btn-sm btn-outline-defauult navbar-dark mr-1" type="button">Add Inventory</button>         */}
    {/* </form> */}

      {/* <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li> */}

      {/* <li className="nav-item">
        <Link
          to="/about"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/blog"
          className={window.location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact/learn"
          className={window.location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
        >
          Learn
        </Link>
      </li> */}
    </ul>
    </nav>
  );
}

export default NavTabs;

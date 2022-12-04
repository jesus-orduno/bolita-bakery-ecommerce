import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-2">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-2">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-2">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag"></span> Bolita Bakery
          {/* <span role="img" aria-label="shopping bag"><img src="/images/logo192.jpg" alt="Logo" style="width:128px;height:128px;"></span> Bolita Bakery */}

          {/* {<img src="/images/logo192.jpg" alt="Logo" style="width:128px;height:128px;">Bolita Bakery} */}
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;

import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="blue darken-4">
      <div className="nav-wrapper container">
        <ul id="nav-mobile">
          <li>
            <Link to="/">
              <span className="product"> Products </span>
            </Link>
          </li>
          <li className="right cart">
            <Link to="/cart">
              My cart<i className="material-icons left">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

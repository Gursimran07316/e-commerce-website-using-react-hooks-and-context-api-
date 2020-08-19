import React from "react";
import { Link } from "react-router-dom";
const Default = () => {
  return (
    <div className="container center">
      <h1 className="red-text text-darken-3"> 404</h1>
      <h2>Page not found </h2>
      <Link to="/">
        <button className="btn-large blue darken-4">
          {" "}
          Go back to home page
        </button>
      </Link>
    </div>
  );
};
export default Default;

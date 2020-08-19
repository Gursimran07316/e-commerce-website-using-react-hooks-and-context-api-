import React from "react";
import { Link } from "react-router-dom";
// import Main form './Main';
const Item = ({ item, img, clicked, setDetail }) => {
  const clickHandler = (id) => {
    clicked(id);
  };
  return (
    <div className="card">
      <div className="card-image img-box">
        <Link to="details">
          <img
            src={img}
            className="responsive-img phone-img"
            alt=""
            onClick={() => setDetail(item.id)}
          />
        </Link>
        <button
          className="waves-effect waves-light btn blue darken-4 addbtn"
          onClick={() => {
            clickHandler(item.id);
          }}
        >
          {item.inCart ? (
            "In Cart"
          ) : (
            <i className="material-icons">shopping_cart</i>
          )}
        </button>
      </div>
      <div className="card-content">
        <h5>
          {item.title} <span className="right"> ${item.price}</span>{" "}
        </h5>
        {/* <h1> {item.count}-{item.total}</h1> */}
      </div>
    </div>
  );
};
export default Item;

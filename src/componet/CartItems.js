import React from "react";

// import Main form './Main';
const CartItem = ({ item, decreaseHandle, increaseHandle, deleteHandle }) => {
  return (
    <>
      <div className="div-flex">
        <img src={item.img} className="responsive-img small" alt="product" />
      </div>
      <div className="div-flex">
        <h5 className="center">
          <span className="hide-on-large-only"> Product : </span>
          {item.title}
        </h5>
      </div>
      <div className="div-flex">
        <h5 className="center">
          <span className="hide-on-large-only"> Prize : </span>${item.price}
        </h5>
      </div>
      <div className="div-flex">
        <h5 className="center">
          <div className="boxes">
            <div className="box" onClick={() => decreaseHandle(item.id)}>
              -
            </div>
            <div className="box">{item.count} </div>
            <div className="box" onClick={() => increaseHandle(item.id)}>
              +
            </div>
          </div>
        </h5>
      </div>
      <div className="div-flex">
        <i
          className="material-icons yellow-text text-darken-3 medium delete"
          onClick={() => deleteHandle(item.id)}
        >
          delete
        </i>
      </div>
      <div className="div-flex mb-6">
        <h5 className="center">
          <span className="hide-on-large-only"> Item.total: </span> $
          {item.total}
        </h5>
      </div>
    </>
  );
};
export default CartItem;

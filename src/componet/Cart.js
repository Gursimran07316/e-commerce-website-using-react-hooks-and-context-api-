import React, { useContext } from "react";
import { itemContext } from "../Context/ItemsData";
import CartItems from "./CartItems";
const Cart = () => {
  const [items, setItem] = useContext(itemContext);
  const data = items.filter((item) => item.inCart);
  const decreaseHandle = (id) => {
    setItem((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          if (item.count === 1) {
            return {
              ...item,
              count: item.count - 1,
              total: item.price * (item.count - 1),
              inCart: false
            };
          } else {
            return {
              ...item,
              count: item.count - 1,
              total: item.price * (item.count - 1)
            };
          }
        } else {
          return item;
        }
      })
    );
  };
  const increaseHandle = (id) => {
    setItem((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
            total: item.price * (item.count + 1)
          };
        } else {
          return item;
        }
      })
    );
    // console.log(items)
  };
  const deleteHandle = (id) => {
    setItem((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: 0,
            total: 0,
            inCart: false
          };
        } else {
          return item;
        }
      })
    );
  };
  const clearCart = () => {
    setItem((prevItems) =>
      prevItems.map((item) => {
        return {
          ...item,
          count: 0,
          total: 0,
          inCart: false
        };
      })
    );
  };
  if (!data[0]) {
    return (
      <h2 className="center">
        Cart is <span className="blue-text text-darken-4">Empty</span>
      </h2>
    );
  } else {
    return (
      <div className="container">
        <h2 className="center">
          Your <span className="blue-text text-darken-4">Cart</span>
        </h2>
        <div className="cart-grid">
          <div className="div-flex">
            <h5 className="hide-on-med-and-down"> Products</h5>
          </div>
          <div className="div-flex">
            <h5 className="hide-on-med-and-down"> Name of Product</h5>
          </div>
          <div className="div-flex">
            <h5 className="hide-on-med-and-down"> Price</h5>
          </div>
          <div className="div-flex">
            <h5 className="hide-on-med-and-down"> Quantity</h5>
          </div>
          <div className="div-flex">
            <h5 className="hide-on-med-and-down"> Remove</h5>
          </div>
          <div className="div-flex">
            <h5 className="hide-on-med-and-down"> Total</h5>
          </div>
          {data.map((item) => {
            return (
              <CartItems
                key={item.id}
                item={item}
                decreaseHandle={decreaseHandle}
                increaseHandle={increaseHandle}
                deleteHandle={deleteHandle}
              />
            );
          })}
        </div>
        <section className="pricing-sec right">
          <button className="transparent" onClick={() => clearCart()}>
            Clear cart
          </button>
          <h4>Subtotal:${data.reduce((add, item) => add + item.total, 0)} </h4>
          <h4>Tax:${data.reduce((add, item) => add + item.total, 0) / 10}</h4>
          <h4>
            Total:$
            {data.reduce((add, item) => add + item.total, 0) +
              data.reduce((add, item) => add + item.total, 0) / 10}{" "}
          </h4>
        </section>
      </div>
    );
  }
};
export default Cart;

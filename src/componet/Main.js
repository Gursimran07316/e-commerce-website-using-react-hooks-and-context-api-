import React, { useContext } from "react";
import Items from "./Items";
import {
  itemContext,
  detailContext,
  openmodalContext,
  modalContext
} from "../Context/ItemsData";
const Main = () => {
  const [items, setItem] = useContext(itemContext);
  const [detailItem, setDetails] = useContext(detailContext);
  const [ismodal, setisModal] = useContext(openmodalContext);
  const [modal, setModal] = useContext(modalContext);
  const setDetail = (id) => {
    console.log(id);
    items.forEach((item) => {
      if (item.id === id) {
        setDetails(item);
      }
    });
  };
  const clicked = (id) => {
    items.forEach((item) => {
      if (item.id === id && item.inCart === false) {
        setModal(item);
        setisModal(true);
      }
    });
    setItem((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id && item.inCart === false) {
          return {
            ...item,
            count: item.count + 1,
            total: item.price,
            inCart: true
          };
        } else {
          return item;
        }
      })
    );
  };
  if (items) {
    return (
      <div className="container">
        <h2 className="center">
          Our <span className="blue-text text-darken-4">Products</span>
        </h2>
        <div className="grid">
          {items.map((item) => {
            return (
              <Items
                key={item.id}
                item={item}
                img={item.img}
                clicked={clicked}
                setDetail={setDetail}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <h1> no data</h1>;
  }
};
export default Main;

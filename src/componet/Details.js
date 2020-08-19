import React, { useContext } from "react";
import {
  itemContext,
  detailContext,
  modalContext,
  openmodalContext
} from "../Context/ItemsData";
import { Link,Redirect } from "react-router-dom";

const Details = () => {
  const [detailItem, setDetails] = useContext(detailContext);
  const [items, setItem] = useContext(itemContext);
  const [ismodal, setisModal] = useContext(openmodalContext);
  const [modal, setModal] = useContext(modalContext);
  const clicked = (id) => {
    items.forEach((item) => {
      if (item.id === id&& item.inCart === false) {
        setModal(item);
        setisModal(true)
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
    items.forEach((item) => {
      if (item.id === id ) {
        setDetails(item)
      }
    });
  };
  if(detailItem.id){
  return (
    <div className="container">
      <h3 className="center blue-text text-darken-4"> {detailItem.title} </h3>
      <div className="detail-grid">
        <div>
          <img
            className="responsive-img center-align"
            alt=""
            src={detailItem.img}
          />
        </div>
        <div className="info">
          <h3> Model:{detailItem.title} </h3>
          <h5 className="grey-text text-darken-2">
            Made by {detailItem.company}{" "}
          </h5>
          <p className="flow-text blue-text text-darken-4">
            {" "}
            Price:${detailItem.price}
          </p>
          <h5 className="bold"> Some info About Product</h5>
          <p className="grey-text text-darken-2"> {detailItem.info}</p>
          <Link to="/">
            <button className="transparent btn-blue"> Back to Products </button>
          </Link>
          <button
            className="transparent btn-yellow"
            onClick={() => clicked(detailItem.id)}
          >
            {" "}
            {detailItem.inCart ? "In Cart" : "Add to cart"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
  }
  else{
    return <Redirect to='/'/>
  }
};
export default Details;

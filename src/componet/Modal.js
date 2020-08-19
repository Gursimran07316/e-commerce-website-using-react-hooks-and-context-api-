import React, { useContext } from "react";
import { openmodalContext, modalContext } from "../Context/ItemsData";
import { Link } from "react-router-dom";

const Modal = () => {
  const [ismodal, setisModal] = useContext(openmodalContext);
  const [modal, setModal] = useContext(modalContext);
  if (ismodal) {
    return (
      <div className="modalx">
        <div className="modal-c center">
          <h5> Item added to cart</h5>
          <img src={modal.img} className="responsive-img" alt="" />
          <h5> {modal.title} </h5>
          <h5 className="grey-text text-darken-1"> Price:${modal.price}</h5>
          <Link to="/">
            <button
              className="transparent btn-blue"
              onClick={() => {
                setisModal(false);
              }}
            >
              Back to Products
            </button>
          </Link>

          <Link to="/cart">
            <button
              className="transparent btn-yellow"
              onClick={() => {
                setisModal(false);
              }}
            >
              Go to cart
            </button>
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default Modal;

import React, { useState } from "react";
import { storeProducts } from "../data";
export const itemContext = React.createContext();
export const detailContext = React.createContext();
export const openmodalContext = React.createContext();
export const modalContext = React.createContext();
export function ItemData(props) {
  const [items, setItem] = useState([...storeProducts]);
  const [detailItem, setDetails] = useState({ });
  const [ismodal, setisModal] = useState(false);
  const [modal, setModal] = useState({});
  return (
    <itemContext.Provider value={[items, setItem]}>
      <detailContext.Provider value={[detailItem, setDetails]}>
        <openmodalContext.Provider value={[ismodal, setisModal]}>
          <modalContext.Provider value={[modal, setModal]}>
            {props.children}
          </modalContext.Provider>
        </openmodalContext.Provider>
      </detailContext.Provider>
    </itemContext.Provider>
  );
}

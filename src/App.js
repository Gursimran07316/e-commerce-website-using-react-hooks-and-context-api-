import React from "react";
import "./styles.css";
import Navbar from "./componet/Navbar";
import Main from "./componet/Main";
import { ItemData } from "./Context/ItemsData";
import Cart from "./componet/Cart";
import Details from "./componet/Details";
import Modal from "./componet/Modal";
import Default from "./componet/Default";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import  {R} from  'react-router'

export default function App() {
  return (
    <Router>
      <ItemData>
        <>
          <div className="Container">
            <Navbar />
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/cart" component={Cart} />
              <Route path="/details" component={Details} />
              <Route component={Default} />
            </Switch>

            <Modal />
          </div>
        </>
      </ItemData>
    </Router>
  );
}

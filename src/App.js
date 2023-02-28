import "./App.css";
import Header from "./common/header/Header";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";

function App() {
  // todo: fetch from database
  const { productItems } = Data
  
  const [cartItem, setCartItem] = useState([])
 
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

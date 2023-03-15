import "./App.css";
import Header from "./common/header/Header";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import Cart from "./common/cart/Cart";
import Sdata from "./components/shop/Sdata";
import Footer from "./common/footer/Footer";
import ProductPage from "./components/product/ProductPage";

function App() {
  // todo: fetch from database
  const { productItems } = Data;

  const { shopItems } = Sdata;

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, qty) => {
    const productExit = cartItems.find((item) => item.id === product.id);

    if (productExit) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + (qty ? qty : 1) }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: qty ? qty : 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = cartItems.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItems((prevCartItem) =>
        prevCartItem.filter((item) => item.id !== product.id)
      );
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Header cartItem={cartItems} />
        <Switch>
          <Route path="/" exact>
            <Pages
              productItems={productItems}
              addToCart={addToCart}
              shopItems={shopItems}
            />
          </Route>
          <Route path="/cart" exact>
            <Cart
              cartItem={cartItems}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          </Route>
          <Route path="/products/:productId">
            <ProductPage onAddToCart={addToCart} productItems={productItems} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

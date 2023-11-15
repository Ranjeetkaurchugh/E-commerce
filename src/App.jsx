import { useEffect, useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/AllProductPages";
import Add from "./pages/CreatePage";
import Cart from "./pages/CartPage";
import Product from "./pages/ProductDetails";
import NotFound from "./pages/404NotFound";

import { generateRandomUserId } from "./assets/utils";

// importing actions and reducers for React-Redux
import { fetchCartItemsOfUser, fetchProductsFromDB } from "./features";

const userID = generateRandomUserId();

function App(props) {
  // destructuring props
  const { dispatch, getCartItems, getProducts } = props;
  // fetching products and cart
  useEffect(() => {
    getProducts();
    getCartItems(userID);
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:productID" element={<Product />} />
          <Route path="/create" element={<Add />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// Sending  Props to App
const mapStateToProp = (state, ownProp) => {
  const { userID } = ownProp;
  return {
    userID,
  };
};

// Sending actions dispatch
const mapDispatchToProps = (dispatch) => ({
  getCartItems: (id) => dispatch(fetchCartItemsOfUser(id)),
  getProducts: () => dispatch(fetchProductsFromDB()),
});

// exporting App
export default connect(mapStateToProp, mapDispatchToProps)(App);

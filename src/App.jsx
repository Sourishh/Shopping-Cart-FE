import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from './Utils/ProtectedRoute';
import { connect } from "react-redux";

import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Home from "./Home/Home";
import Login from "./Login/Login";

function App({ current }) {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute path="/products/all" component={Products} />
          <ProtectedRoute exact path="/checkout/cartId=:cartId" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);

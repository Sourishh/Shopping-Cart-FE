import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

import { connect } from "react-redux";
import { getCartId, removeUserSession } from "../../Utils/Common";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  const location = useLocation();

  const handleLogout = () => {
    removeUserSession();
  }
  const cartId = getCartId();

  return (
    <>
      <i className="fa fa-bars"></i>
      <div className="links">
        <span className={styles.headerecomm}>ecommerce</span>
        <NavLink activeStyle={{ color: 'darkorange' }} to="/products/all">
          <span>Products</span>
        </NavLink>
        <NavLink activeStyle={{ color: 'darkorange' }} to={`/checkout/cartId=${cartId}`}>
          <span className={styles.cart}>Cart</span>
        </NavLink>
        <span className={styles.cartcount}>{cartCount}</span>
        <Link to="/login" onClick={handleLogout}>
          <span>Logout</span>
        </Link>
      </div>
      <div className={styles.navbar}>
        <div className={styles.navbar__logo}>{(location.pathname === "/products/all") ? "Products" : "Cart"}</div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);

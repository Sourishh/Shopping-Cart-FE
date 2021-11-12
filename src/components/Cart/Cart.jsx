import React, { useState, useEffect } from "react";
import styles from "./Cart.css";

import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";
import Navbar from "../Navbar/Navbar";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <>
      <Navbar />
      {cart?.length ?
        (<div className={styles.cart}>
          <div className={styles.cart__items}>
            {cart.map((item) => (
              <CartItem key={item.productId} item={item} />
            ))}
          </div>
          <div className={styles.cart__summary}>
            <div className={styles.summary__price}>
              <span>TOTAL: ({totalItems} items)</span>
              <span>$ {totalPrice}</span>
            </div>
          </div>
        </div>) : (<h3 className="emptycart">Your cart seems to be empty</h3>)}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);

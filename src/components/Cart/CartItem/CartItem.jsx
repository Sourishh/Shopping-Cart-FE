import React, { useState } from "react";
import styles from "./CartItem.module.css";

import { connect } from "react-redux";
import {
  adjustItemQty,
  adjustLessQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, adjustQtyWhenReduced, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    
    if (item.quantity >= e.target.value && input < e.target.value) {
      setInput(e.target.value)
      adjustQty(item.productId, e.target.value);
    } else if(input > e.target.value)
    {
      setInput(e.target.value)
      adjustQtyWhenReduced(item.productId, e.target.value);
    } 
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={"../mobile.png"}
        alt="mobile"
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.productId}</p>
        <p className={styles.details__price}>$ {item.price}</p>
        <p className={styles.details__price}>{item.comments}</p>
        <div className={styles.cartItem__actions}>
          <div className={styles.cartItem__qty}>
            <label htmlFor="qty">Qty</label>
            <input
              min="1"
              type="number"
              id="qty"
              name="qty"
              value={input}
              onChange={onChangeHandler}
            />
          </div>
          <button
            onClick={() => removeFromCart(item.productId, input)}
            className={styles.actions__deleteItemBtn}
          > Remove
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id, input) => dispatch(removeFromCart(id, input)),
    adjustQtyWhenReduced: (id, value) => dispatch(adjustLessQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

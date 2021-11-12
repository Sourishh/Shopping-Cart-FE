import React from "react";
import styles from "./ProductData.module.css";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const ProductData = ({ productList, addToCart }) => {
  return (
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={"../mobile.png"}
        alt="mobile"
      />

      <div className={styles.product__details}>
        <p className={styles.details__desc}>{productList.productId}</p>
        <p className={styles.details__price}>${productList.price}</p>
        <p className={styles.details__desc}>{productList.comments}</p>
        <p className={styles.details__desc}>{productList.quantity} available</p>
        {productList.quantity > 0 ? (<button className={styles.product__buttons}
          onClick={() => addToCart(productList)}
        >
          Add To Cart
        </button>) : (<button className={styles.product__buttons_disabled} disabled>
          Add To Cart
        </button>)}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productList) => dispatch(addToCart(productList)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(ProductData);

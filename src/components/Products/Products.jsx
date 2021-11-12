import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import styles from "./Products.module.css";
import instance from "../../Utils/Token";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductData from "./ProductItems/ProductData";

const Products = () => {

  const [resp, setResp] = useState([]);
  const qtyAddedToCart = useSelector((state) => state.shop.cart);

  useEffect(() => {
    const productDetails = async () => {
      await instance.get('/products/all').then((response) => {
        const prodResp = response?.data.productList;
        setResp(prodResp)
      }
      )
    };
    productDetails();
  }, [qtyAddedToCart]);

  return (
    <>
      <Navbar />
      <Link to="/products/all">
        <span className={styles.producttext}>Electronics</span>
        <span className={styles.hometext}>Home Appliances</span>
      </Link>
      <div className={styles.products}>
        {resp?.map((product) => (
          <ProductData key={product.productId} productList={product} />
        ))}
      </div>
    </>
  );
};

Products.propTypes = {
  cartId: PropTypes.string
};

Products.defaultProps = {
  cartId: "1"
};

export default Products;

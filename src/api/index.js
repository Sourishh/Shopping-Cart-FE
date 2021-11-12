import { getCartId } from "../Utils/Common";
import instance from "../Utils/Token";

const cartID = getCartId();
export const removeCartItem = (productId, quantity) => {

    return instance.post(`/deletefromcart/${cartID}`, { productId, quantity });
}

export const addCart = (productId, quantity) => {

    return instance.post(`/addtocart/${cartID}`, { productId, quantity });
}

export const getProducts = () => {

    return instance.get(`/products/all`);
}
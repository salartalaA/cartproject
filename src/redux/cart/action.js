import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
} from "./actionType";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const increment = (selectedProductId) => {
  return {
    type: INCREMENT,
    payload: selectedProductId,
  };
};
export const decrement = (selectedProductId) => {
  return {
    type: DECREMENT,
    payload: selectedProductId,
  };
};

export const removeFromCart = (selectedProductId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: selectedProductId,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

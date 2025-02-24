import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
} from "./actionType";

const UpdateLocalStorage = (cart) => {
  localStorage.setItem("shopping-cart", JSON.stringify(cart));
};

const initialState = {
  cart: localStorage.getItem("shopping-cart")
    ? JSON.parse(localStorage.getItem("shopping-cart"))
    : [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const hasProduct = state.cart.find((p) => p.id === action.payload.id);

      const updatedCart = hasProduct
        ? state.cart.map((p) =>
            p.id === action.payload.id
              ? { ...p, qty: p.qty + 1, weight: p.weight }
              : p
          )
        : [
            ...state.cart,
            { ...action.payload, qty: 1, weight: action.payload.weight },
          ];

      UpdateLocalStorage(updatedCart);
      return {
        ...state,
        cart: updatedCart,
      };

    case INCREMENT:
      const incrementedCart = state.cart.map((p) =>
        p.id === action.payload ? { ...p, qty: p.qty + 1 } : p
      );

      UpdateLocalStorage(incrementedCart);
      return {
        ...state,
        cart: incrementedCart,
      };

    case DECREMENT:
      const decrementedCart = state.cart.map((p) =>
        p.id === action.payload && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p
      );

      UpdateLocalStorage(decrementedCart);
      return {
        ...state,
        cart: decrementedCart,
      };

    case REMOVE_FROM_CART:
      const filteredCart = state.cart.filter((p) => p.id !== action.payload);

      UpdateLocalStorage(filteredCart);
      return {
        ...state,
        cart: filteredCart,
      };

    case CLEAR_CART:
      UpdateLocalStorage([]);
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default cartReducer;

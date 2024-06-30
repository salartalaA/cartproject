import { SET_PRODUCTS } from "./actionType";

const intialState = {
  products: [],
};

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
export default productReducer;

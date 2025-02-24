import { SET_FILTER, SET_PRODUCTS } from "./actionType";

const initialState = {
  products: [],
  filter: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case SET_FILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
export default productReducer;

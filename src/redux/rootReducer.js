import { combineReducers } from "redux";
import productReducer from "./products/reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({
  product: productReducer,
  shoppingCart: cartReducer
});

export default rootReducer;

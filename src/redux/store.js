import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Import your rootReducer here

const store = configureStore({
  reducer: rootReducer, // Automatically combines reducers
});

export default store;

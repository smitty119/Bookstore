import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
//import store from "./index";

const store = configureStore({
  reducer: {
  auth: authReducer,
  },
});

export default store;
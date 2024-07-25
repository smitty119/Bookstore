// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./auth";

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// export default store;
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, role: "user" },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    changeRole(state, action) {
      const role = action.payload;
      state.role = role;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
index.js
// import { configureStore } from "@reduxjs/toolkit";

// import authReducer from "./auth";
// import auth from "./auth";

// const store = configureStore({

// reducer: { auth: authReducer, }, });

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import store from "./index";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

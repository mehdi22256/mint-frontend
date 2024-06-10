import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    User: UserReducer,
  },
});

export default store;

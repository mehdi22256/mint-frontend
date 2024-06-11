import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user/userSlice";
import blogReducer from "./blog/blogSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    Blog: blogReducer,
  },
});

export default store;

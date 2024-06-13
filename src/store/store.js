import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user/userSlice";
import blogReducer from "./blog/blogSlice";
import categoryReducer from "./category/categorySlice";
import commentReducer from "./comment/commentSlice";
import speciltyReducer from "./specialty/specialtySlice";
const store = configureStore({
  reducer: {
    user: UserReducer,
    blog: blogReducer,
    category: categoryReducer,
    comment: commentReducer,
    specilty: speciltyReducer,
  },
});

export default store;

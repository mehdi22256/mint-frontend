import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user/userSlice";
import blogReducer from "./blog/blogSlice";
import categoryReducer from "./category/categorySlice";
import commentReducer from "./comment/commentSlice";
import speciltyReducer from "./specialty/specialtySlice";
import chatReducer from "./chat/chatSlice";
import chatRoomReducer from "./chatRoom/chatRoomSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    blog: blogReducer,
    category: categoryReducer,
    comment: commentReducer,
    specilty: speciltyReducer,
    chat: chatReducer,
    chatRoom: chatRoomReducer,
  },
});

export default store;

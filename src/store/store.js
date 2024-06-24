import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user/userSlice";
import blogReducer from "./blog/blogSlice";
import categoryReducer from "./category/categorySlice";
import commentReducer from "./comment/commentSlice";
import speciltyReducer from "./specialty/specialtySlice";
import bookingReducer from "./booking/bookingSlice";
import locationReducer from "./location/locationSlice";
import chatReducer from "./chat/chatSlice";
import chatRoomReducer from "./chatRoom/chatRoomSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    blog: blogReducer,
    category: categoryReducer,
    comment: commentReducer,
    specilty: speciltyReducer,
    booking: bookingReducer,
    location: locationReducer,
    chat: chatReducer,
    chatRoom: chatRoomReducer,
  },
});

export default store;

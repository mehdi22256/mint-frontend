import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: null,
  error: null,
  get: null,
};

export const getChatRooms = createAsyncThunk(
  "chatRoom/getChatRooms",
  async (token) => {
    try {
      const res = await axios.post(
        "http://localhost:1000/chatroom/oneChat",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      return data;
    } catch (error) {
      console.log(
        "Error:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  }
);

export const fetchChatRooms = createAsyncThunk(
  "chatRoom/fetchChatRooms",
  async (users) => {
    const res = await axios.post("http://localhost:1000/chatroom", users);
    return res.data;
  }
);

export const chatRoomSlice = createSlice({
  name: "chatRoom",
  initialState,
  extraReducers: (builder) => {
    // get
    builder.addCase(getChatRooms.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getChatRooms.fulfilled, (state, action) => {
      state.loading = false;
      state.get = action.payload;
      state.error = "";
    });
    builder.addCase(getChatRooms.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    // post
    builder.addCase(fetchChatRooms.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchChatRooms.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchChatRooms.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default chatRoomSlice.reducer;

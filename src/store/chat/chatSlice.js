import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const fetchChats = createAsyncThunk("chat/fetchChats", async () => {
  try {
    const res = await axios.get("http://localhost:1000/chat");
    const data = res.data;

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  extraReducers: (builder) => {
    // get
    builder.addCase(fetchChats.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchChats.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchChats.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default chatSlice.reducer;

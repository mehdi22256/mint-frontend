import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBlog = createAsyncThunk("Blog/getAllBlog", async () => {
  try {
    const res = await axios.get("http://localhost:1000/blog");
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};
const blogSlice = createSlice({
  name: "Blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlog.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getAllBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;

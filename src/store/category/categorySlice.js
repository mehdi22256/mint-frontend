import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    return axios.get("http://localhost:1000/category").then((res) => res.data);
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    // get
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default categorySlice.reducer;

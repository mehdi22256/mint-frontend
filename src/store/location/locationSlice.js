import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const getLocation = createAsyncThunk(
  "Location/getLocation",
  async () => {
    return axios
      .get("http://localhost:1000/location")
      .then((res) => res.data.getLocation);
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    // get
    builder.addCase(getLocation.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLocation.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(getLocation.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default categorySlice.reducer;

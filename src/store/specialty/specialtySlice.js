import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSpecilty = createAsyncThunk(
  "Specilty/getSpecilty",
  async () => {
    return axios.get("http://localhost:1000/specialty").then((res) => {
      return res.data.getSpecialty;
    });
  }
);
const initialState = {
  loading: false,
  data: null,
  error: null,
};
export const SpeciltySlice = createSlice({
  name: "Specilty",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSpecilty.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSpecilty.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(getSpecilty.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default SpeciltySlice.reducer;

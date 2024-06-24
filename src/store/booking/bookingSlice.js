import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooking = createAsyncThunk("booking/getBooking", async () => {
  return axios.get("http://localhost:1000/booking").then((res) => {
    return res.data.getbooking;
  });
});

export const addBooking = createAsyncThunk(
  "booking/addBooking",
  async ({ info, token }, { rejectWithValue }) => {
    try {
      console.log("Token:", token); // Debugging line to check the token value
      const response = await axios.post("http://localhost:1000/booking", info, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error:", error.response?.data || error.message); // Debugging line to log the error
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
const initialState = {
  loading: false,
  data: null,
  error: null,
  newBooking: null,
};
export const SpeciltySlice = createSlice({
  name: "Booking",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBooking.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBooking.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(getBooking.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(addBooking.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addBooking.fulfilled, (state, action) => {
      state.loading = false;
      state.newBooking = action.payload;
      state.error = "";
    });
    builder.addCase(addBooking.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default SpeciltySlice.reducer;

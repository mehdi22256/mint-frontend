import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signup = createAsyncThunk("User/signup", async ({ post }) => {
  try {
    const formdata = new FormData();
    const { formData, personImage, certificate, latitude, longitude } = post;

    Object.keys(formData).forEach((key) => {
      formdata.append(key, formData[key]);
    });

    if (personImage) {
      formdata.append("image", personImage);
    }
    if (certificate) {
      formdata.append("certificate", certificate);
    }
    if (latitude && longitude) {
      formdata.append("latitude", latitude);
      formdata.append("longitude", longitude);
    }

    const res = await axios.post(
      "http://localhost:1000/user/signup",
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error(error);
  }
});

const initialState = {
  isLoading: false,
  userData: null,
  error: null,
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;

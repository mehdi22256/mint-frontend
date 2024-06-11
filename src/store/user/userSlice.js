import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
export const signup = createAsyncThunk("User/signup", async ({ post }) => {
  try {
    const formdata = new FormData();
    const { formData, image, certificate } = post;

    if (image) {
      formdata.append("image", image);
    }
    if (certificate) {
      formdata.append("certificate", certificate);
    }

    const res = await axios.post("http://localhost:1000/user/signup", formdata);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const signInReducer = createAsyncThunk(
  "User/signIn",
  async ({ userInfo, isRemember }) => {
    try {
      const res = await axios.post(
        "http://localhost:1000/user/signin",
        userInfo
      );
      const data = res.data;
      if (isRemember) {
        localStorage.setItem("Token", data);
      } else {
        sessionStorage.setItem("Token", data);
      }
      const decoded = jwtDecode(data);
      return decoded;
    } catch (error) {
      return console.log(error);
    }
  }
);

const initialState = {
  isLoading: false,
  data: null,
  error: null,
  isLogged: false,
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setCredentials: (state) => {
      try {
        const token =
          localStorage.getItem("Token") || sessionStorage.getItem("Token");
        const decoded = jwtDecode(token);
        state.isLogged = true;
        state.data = decoded;
      } catch (error) {
        state.data = null;
        state.isLogged = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
        state.isLogged = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });

    //   signIn
    builder.addCase(signInReducer.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signInReducer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
      state.isLogged = true;
    });
    builder.addCase(signInReducer.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || action.error.message;
    });
  },
});

export const { setCredentials } = userSlice.actions;
export default userSlice.reducer;

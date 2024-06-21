import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

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

export const putUser = createAsyncThunk(
  "User/putUer",
  async ({ userInfo, id }) => {
    try {
      const formData = new FormData();
      const {
        username,
        email,
        firstName,
        lastName,
        clinicLocation,
        holidays,
        startTime,
        endTime,
        image,
      } = userInfo;

      formData.append("username", username);
      formData.append("email", email);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("clinicLocation", clinicLocation);
      formData.append("holidays", holidays);
      formData.append("startTime", startTime);
      formData.append("endTime", endTime);
      formData.append("image", image);

      const res = await axios.put(`http://localhost:1000/user/${id}`, formData);
      const data = res.data;
      console.log("🚀 ~ data:", data);
      if (data) {
        localStorage.setItem("Token", data);
        sessionStorage.setItem("Token", data);
      }
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const getDoctor = createAsyncThunk(
  "User/getDoctor",
  async ({ specialty, city }) => {
    try {
      const res = await axios.get(
        "http://localhost:1000/user/doctor",
        specialty,
        city
      );
      const data = res.data;

      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const getUser = createAsyncThunk("User/getUser", async () => {
  try {
    const res = await axios.get("http://localhost:1000/user");
    const data = res.data;

    return data;
  } catch (error) {
    return console.log(error);
  }
});

const initialState = {
  isLoading: false,
  data: null,
  error: null,
  isLogged: false,
  users: null,
  doctors: null,
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

    //   putUser
    builder.addCase(putUser.pending, (state) => {
      state.error = null;
    });
    builder.addCase(putUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(putUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || action.error.message;
    });

    // get user data
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });

    // get doctor data
    builder
      .addCase(getDoctor.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.doctors = action.payload;
        state.error = null;
      })
      .addCase(getDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCredentials } = userSlice.actions;
export default userSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  get: { loading: false, data: null, error: null },
  create: { loading: false, data: null, error: null },
};

export const getComments = createAsyncThunk("Comment/getComments", async () => {
  try {
    const res = await axios.get("http://localhost:1000/comment");
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchCreate = createAsyncThunk(
  "Comment/fetchCreate",
  async ({ post, token }) => {
    try {
      const res = await axios.post("http://localhost:1000/comment", post, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return console.log(error);
    }
  }
);

const commentSlice = createSlice({
  name: "Comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.get.loading = true;
        state.get.error = null;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.get.loading = false;
        state.get.data = action.payload;
        state.get.error = null;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.get.loading = false;
        state.get.error = action.error.message;
      });

    // fetchCreate
    builder.addCase(fetchCreate.pending, (state) => {
      state.create.loading = true;
    });
    builder.addCase(fetchCreate.fulfilled, (state, action) => {
      state.create.loading = false;
      state.create.data = action.payload;
      state.create.error = null;
    });
    builder.addCase(fetchCreate.rejected, (state, action) => {
      state.create.loading = false;
      state.create.error = action.payload || action.error.message;
    });
  },
});

export default commentSlice.reducer;

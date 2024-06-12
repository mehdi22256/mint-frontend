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
      const formData = new FormData();
      const { title, content, description, timeOfReading, image, category } =
        post;
      formData.append("title", title);
      formData.append("content", content);
      formData.append("description", description);
      formData.append("timeOfReading", timeOfReading);
      formData.append("image", image);
      formData.append("category", category);
      const response = await axios.post(
        "http://localhost:1000/comment",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error.message);
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

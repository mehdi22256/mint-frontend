import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  get: { loading: false, data: null, error: null },
  create: { loading: false, data: null, error: null },
};

export const getAllBlog = createAsyncThunk("Blog/getAllBlog", async () => {
  try {
    const res = await axios.get("http://localhost:1000/blog");
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchCreate = createAsyncThunk(
  "blog/fetchCreate",
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
        "http://localhost:1000/blog",
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

export default blogSlice.reducer;

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const initialState = {
  isLoading: false,
  error: null,
  categories: [],
};

export const getAllCategory = createAsyncThunk("category/getAllCategory", async () => {
  const res = await axios.get('https://dummyjson.com/products/categories');
  
  return res?.data;

});

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllCategory.pending, (state, action) => {
      state.isLoading = true
      state.error = null;
    });
    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      state.categories = action?.payload
      state.isLoading = false
      state.error = null;
    });
    builder.addCase(getAllCategory.rejected, (state, action) => {
      state.isLoading =false
      state.error =action.error.message;
    });
  },

});
export default categorySlice.reducer; 
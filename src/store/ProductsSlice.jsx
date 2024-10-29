const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const initialState = {
  isLoading: false,
  error: null,
  products: [],
};

export const getAllProducts = createAsyncThunk("proudcts/getAllProducts", async () => {
  const res = await axios.get("https://dummyjson.com/products");
  return res.data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.isLoading = true
      state.error = null;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action?.payload
      state.isLoading = false
      state.error = null;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isLoading =false
      state.error =action.error.message;
    });
  },

});
export default productSlice.reducer; 
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const initialState = {
  isLoading: false,
  error: null,
  products: [],
};

export const getAllCart = createAsyncThunk("proudcts/getAllCart", async () => {
  const res = await axios.get("https://dummyjson.com/carts");
  return res?.data;
});

const allCartSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllCart.pending, (state, action) => {
      state.isLoading = true
      state.error = null;
    });
    builder.addCase(getAllCart.fulfilled, (state, action) => {
      state.products = action?.payload
      state.isLoading = false
      state.error = null;
    });
    builder.addCase(getAllCart.rejected, (state, action) => {
      state.isLoading =false
      state.error =action.error.message;
    });
  },

});
export default allCartSlice.reducer; 
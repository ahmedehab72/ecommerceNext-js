const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const initialState = {
  isLoading: false,
  error: null,
  products: [],
};

export const getAllTodayProducts = createAsyncThunk("proudcts/getAllTodayProducts", async () => {
  const res = await axios.get('https://dummyjson.com/recipes');
  return res.data;
});

const todayProducts = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllTodayProducts.pending, (state, action) => {
      state.isLoading = true
      state.error = null;
    });
    builder.addCase(getAllTodayProducts.fulfilled, (state, action) => {
      state.products = action?.payload
      state.isLoading = false
      state.error = null;
    });
    builder.addCase(getAllTodayProducts.rejected, (state, action) => {
      state.isLoading =false
      state.error =action.error.message;
    });
  },

});
export default todayProducts.reducer; 
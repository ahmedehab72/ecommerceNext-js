import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching cart items
export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const response = await axios.get('https://dummyjson.com/carts');
  return response.data;
});

// Async thunk for adding an item to the cart
export const addToCart = createAsyncThunk('cart/addToCart', async (product) => {
  const response = await axios.post(
    'https://dummyjson.com/carts/add',
    {
      userId: 1, // specify the user ID for the demo
      products: [{ id: product.id, quantity: 1 }],
    },
    { headers: { token: localStorage.getItem('fakeUser') } }
  );
  return response.data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.carts;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload); // Adds the simulated response to the cart
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;

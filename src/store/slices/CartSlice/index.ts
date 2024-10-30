import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products.filter((item) => item !== action.payload.id);
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;

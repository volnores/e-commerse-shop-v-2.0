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
      const removedItems = state.products.filter((item) => item.id !== action.payload.id);
      state.products = removedItems;
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;

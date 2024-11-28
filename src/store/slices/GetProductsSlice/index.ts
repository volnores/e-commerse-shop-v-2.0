import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItem } from '../../../interfaces/productItem';

interface ProductSlice {
  products: ProductItem[];
  currentIdPage: number | null;
}

const initialState: ProductSlice = {
  products: [],
  currentIdPage: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<ProductItem[]>) => {
      state.products = action.payload;
    },
    getCurrentIdPage: (state, action: PayloadAction<number | null>) => {
      state.currentIdPage = action.payload;
    },
  },
});

export const { getProducts, getCurrentIdPage } = productsSlice.actions;

export default productsSlice.reducer;

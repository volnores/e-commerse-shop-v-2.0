import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItem } from '../../../interfaces/productItem';

interface CartSlice {
  products: ProductItem[];
}

const initialState: CartSlice = {
  products: JSON.parse(localStorage.getItem('products') || '[]'),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductItem>) => {
      const findItem = state.products.find((item: ProductItem) => item.id === action.payload.id);
      if (findItem) {
        findItem.quantity! += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('products', JSON.stringify(state.products));
    },
    deleteProduct: (state, action: PayloadAction<{ id: number }>) => {
      state.products = state.products.filter((item: ProductItem) => item.id !== action.payload.id);
      localStorage.setItem('products', JSON.stringify(state.products));
    },
    clearCart: (state) => {
      state.products = [];
      localStorage.removeItem('products');
    },
    incrementCount: (state, action: PayloadAction<{ id: number }>) => {
      const findItem = state.products.find((item: ProductItem) => item.id === action.payload.id);
      if (findItem) {
        findItem.quantity! += 1;
      }
      localStorage.setItem('products', JSON.stringify(state.products));
    },
    decrementCount: (state, action: PayloadAction<{ id: number }>) => {
      const findItem = state.products.find((item: ProductItem) => item.id === action.payload.id);
      if (findItem && findItem.quantity! > 1) {
        findItem.quantity! -= 1;
      } else {
        state.products = state.products.filter(
          (item: ProductItem) => item.id !== action.payload.id,
        );
      }
      localStorage.setItem('products', JSON.stringify(state.products));
    },
  },
});

export const { addProduct, deleteProduct, clearCart, incrementCount, decrementCount } =
  cartSlice.actions;

export default cartSlice.reducer;

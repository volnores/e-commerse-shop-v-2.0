import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../API/getProducts';
import getProducts from './slices/GetProductsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import cartSlice from './slices/CartSlice';

export const store = configureStore({
  reducer: {
    products: getProducts,
    cart: cartSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

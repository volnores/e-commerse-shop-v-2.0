import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../API/getProducts';
import getProducts from './slices/GetProductsSlice';
import cartSlice from './slices/CartSlice';
import filterSlice from './slices/FilterSlice';

export const store = configureStore({
  reducer: {
    products: getProducts,
    cart: cartSlice,
    filter: filterSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '../API/getProducts'
import  getProducts  from './slices/GetProducts'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    products: getProducts,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch)



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
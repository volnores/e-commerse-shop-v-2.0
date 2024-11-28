import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductItem } from '../../interfaces/productItem';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.in/api/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductItem[], void>({
      query: () => {
        return {
          url: `products`,
          params: {
            limit: 24,
          },
        };
      },
    }),
    getProductsIdPage: builder.query<ProductItem, number>({
      query: (id) => ({ url: `products/${id}` }),
    }),
    getAllProducts: builder.query<ProductItem[], void>({
      query: () => ({ url: 'products' }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsIdPageQuery, useGetAllProductsQuery } =
  productsApi;

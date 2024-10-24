
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.in/api/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<null, string>({
      query: () => `products`,
    }),
  }),
})



export const { useGetProductsQuery } = productsApi
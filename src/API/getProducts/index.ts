
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ItemsList } from '../../interfaces/itemsList'




export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.in/api/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<ItemsList, null>({
      query: () => {
       return {
        url: `products`,
        params: {
          limit: 24
        }
       }
      },
    }),
    getProductsIdPage: builder.query({
      query: (id) => ({url: `products/${id}`})
    }),
    getAllProducts: builder.query({
      query: () => ({url: 'products'})
    })
  }),
})



export const { useGetProductsQuery, useGetProductsIdPageQuery, useGetAllProductsQuery } = productsApi
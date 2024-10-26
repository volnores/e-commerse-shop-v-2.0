
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProductItem } from '../../interfaces/productItem'



export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.in/api/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductItem, null>({
      query: () => {
       return {
        url: `products`,
        params: {
          limit: 24
        }
       }
      }
    }),
  }),
})



export const { useGetProductsQuery } = productsApi
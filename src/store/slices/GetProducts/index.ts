import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    currentIdPage: null
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload
        },
        getCurrentIdPage: (state, action) => {
            state.currentIdPage = action.payload
        }
    }
})

export const {getProducts, getCurrentIdPage} = productsSlice.actions

export default productsSlice.reducer
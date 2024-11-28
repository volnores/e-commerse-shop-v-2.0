import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilteredProducts {
  searchQuery: string;
  selectedCategory: string;
}

const initialState: FilteredProducts = {
  searchQuery: '',
  selectedCategory: '',
};

export const filterSlice = createSlice({
  name: 'filterProducts',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSearchQuery, setSelectedCategory } = filterSlice.actions;

export default filterSlice.reducer;

import { createSlice } from 'redux-starter-kit';
import { ALL_PRODUCTS } from '../constants/Filters';

export const categoryFilter = createSlice({
  slice: "categoryFilter",
  initialState: ALL_PRODUCTS.id,
  reducers: {
    setCategoryFilter: (state, action) => action.payload
  }
});

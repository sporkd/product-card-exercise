import { createSlice, createSelector } from 'redux-starter-kit';
import { categoryFilter } from './categoryFilter';
import { ALL_PRODUCTS } from '../constants/Filters';

const { getCategoryFilter } = categoryFilter.selectors;

const products = createSlice({
  slice: "products",
  initialState: [],
  reducers: {}
});

products.selectors.getVisibleProducts = createSelector(
  [getCategoryFilter, products.selectors.getProducts],
  (categoryFilter, products) => {
    switch (categoryFilter) {
      case ALL_PRODUCTS.id:
        return products;
      default:
        return products.filter(p =>
          p.categories.map(c => c.commonId).includes(categoryFilter)
        );
    }
  }
);

export { products };

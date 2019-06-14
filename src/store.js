import { configureStore, getDefaultMiddleware } from "redux-starter-kit";
import { combineReducers } from "redux";
import { categories, categoryFilter, products } from "./ducks";
import data from './products.json';
import { ALL_PRODUCTS } from './constants/Filters';

const uniqueCategoriesFor = (data) => {
  // Not as efficient because arr.concat creates array on each iteration
  // let categories = data.reduce(
  //   (arr, elem) => arr.concat(elem.country), []
  // );

  let categories = data.reduce((arr, elem) => {
    for (const c of elem.categories) { arr.push(c); }
    return arr;
  }, []);

  let result = [...[ALL_PRODUCTS]];
  let map = new Map();
  for (let c of categories) {
    if(!map.has(c.commonId)){
      map.set(c.commonId, true);
      result.push({ id: c.commonId, name: c.name });
    }
  }
  return result;
}

const preloadedState = {
  products: data,
  categories: uniqueCategoriesFor(data)
};

const reducer = combineReducers({
  categories: categories.reducer,
  categoryFilter: categoryFilter.reducer,
  products: products.reducer
});

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState
});

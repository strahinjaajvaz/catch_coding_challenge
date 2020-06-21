import { createStore, combineReducers } from "redux";
import { productsReducer } from "./reducers/productsReducer";

export function initializeStore() {
  return createStore(
    combineReducers({
      products: productsReducer,
    })
  );
}

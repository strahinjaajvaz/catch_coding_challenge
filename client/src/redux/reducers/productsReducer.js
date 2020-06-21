import { INITIALISE, CHANGE_SORT } from "../actions/productActions";

const INITIAL_STATE = {
  data: {},
  sortBy: "priceHigh",
};

export function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INITIALISE: {
      return { ...state, data: action.payload };
    }
    case CHANGE_SORT: {
      return { ...state, sortBy: action.payload };
    }
    default: {
      return state;
    }
  }
}

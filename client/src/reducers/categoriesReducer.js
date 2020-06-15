import { GET_CATEGORIES } from '../constants/categories';

const initialState = {
  categories: [],
};

export function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.items,
      };
    default:
      return state;
  }
}

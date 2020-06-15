import { DATA_LOADING, DATA_LOADED } from '../constants/loading';

const initialState = {
  isLoading: false,
};

export function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DATA_LOADED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

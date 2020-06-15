import { GET_INDICATORS } from '../constants/indicators';

const initialState = {
  indicators: [],
};

export function indicatorsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INDICATORS:
      return {
        ...state,
        indicators: action.payload.items,
      };
    default:
      return state;
  }
}

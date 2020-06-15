import { DATA_LOADED, DATA_LOADING } from '../constants/loading';

export function handleLoadingStarted() {
  return dispatch => dispatch({
    type: DATA_LOADING,
  });
}
export function handleLoadingFinished() {
  return dispatch => dispatch({
    type: DATA_LOADED,
  });
}

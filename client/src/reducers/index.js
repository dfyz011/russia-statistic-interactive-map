import { combineReducers } from 'redux';
import { alertReducer } from './alertReducer';
import { indicatorsReducer } from './indicatorsReducer';
import { statisticReducer } from './statisticReducer';
import { loadingReducer } from './loadingReducer';
import { categoriesReducer } from './categoriesReducer';

const rootReducer = combineReducers({
  alert: alertReducer,
  indicators: indicatorsReducer,
  categories: categoriesReducer,
  statistic: statisticReducer,
  loading: loadingReducer,
});

export default rootReducer;

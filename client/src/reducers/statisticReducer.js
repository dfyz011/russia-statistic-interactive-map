import {
  GET_STATISTIC,
  GET_MAP_STATISTIC,
  GET_DIAGRAM_STATISTIC,
  GET_RADAR_DIAGRAM_STATISTIC,
  GET_REGION_TOP_STATISTIC,
  GET_INDICATOR_TOP_STATISTIC,
} from '../constants/statistic';

const initialState = {
  statistic: [],
  mapStatistic: {},
  mapRegions: {},
  diagramStatistic: [],
  radarDiagramStatistic: [],
  years: [],
  regions: [],
  top: [],
};

export function statisticReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STATISTIC:
      return {
        ...state,
        statistic: action.payload.items,
        years: action.payload.years,
        regions: action.payload.regions,
      };
    case GET_MAP_STATISTIC:
      return {
        ...state,
        mapStatistic: action.payload.items,
        mapRegions: action.payload.regions,
        years: action.payload.years,
      };
    case GET_DIAGRAM_STATISTIC:
      return {
        ...state,
        diagramStatistic: action.payload.items,
        years: action.payload.years,
        regions: action.payload.regions,
      };
    case GET_RADAR_DIAGRAM_STATISTIC:
      return {
        ...state,
        radarDiagramStatistic: action.payload.items,
        years: action.payload.years,
        regions: action.payload.regions,
      };
    case GET_REGION_TOP_STATISTIC:
      return {
        ...state,
        top: action.payload.items,
      };
    case GET_INDICATOR_TOP_STATISTIC:
      return {
        ...state,
        top: action.payload.items,
      };
    default:
      return state;
  }
}

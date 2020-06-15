import {
  GET_STATISTIC,
  GET_MAP_STATISTIC,
  GET_DIAGRAM_STATISTIC,
  GET_REGION_TOP_STATISTIC,
  GET_RADAR_DIAGRAM_STATISTIC,
} from '../constants/statistic';
import config from '../config/server';
import { handleError } from './alertAction';
import { handleLoadingFinished, handleLoadingStarted } from './loadingAction';


const qs = require('qs');

export const getStatisticByIndicator = ({ indicator, years = [], regions = [] }) => async dispatch => {
  try {
    handleLoadingStarted();
    // const url = new URL(
    //   `${config.protocol}://${config.server}:${config.port}/api/statistics/indicator/${indicator.id}`,
    // );
    // const params = qs.stringify(
    //   years,
    // );
    // url.search = params;

    // const response = await fetch(url, {
    //   method: 'get',
    //   headers: {
    //     Authorization: localStorage.getItem('token'),
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // });
    const formattedRegions = regions.map((region) => region.reg_ID);
    const response = await fetch(
      `${config.protocol}://${config.server}:${config.port}/api/statistics/indicator/${indicator.id}`,
      {
        method: 'post',
        headers: {
          Authorization: localStorage.getItem('token'),
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          years,
          regions: formattedRegions,
        }),
      },
    );

    const json = await response.json();

    if (json.error) {
      throw new Error(json.message);
    }

    dispatch({
      type: GET_STATISTIC,
      payload: {
        items: json.statistic,
        years: json.years,
        regions: json.regions,
      },
    });
  } catch (err) {
    handleError(dispatch, err);
  } finally {
    handleLoadingFinished();
  }
};

export const getStatisticForRadarDiagram = ({ indicator, years = [], regions = [] }) => async dispatch => {
  try {
    handleLoadingStarted();

    const formattedRegions = regions.map((region) => region.reg_ID);
    const response = await fetch(
      `${config.protocol}://${config.server}:${config.port}/api//statistics/radar-diagram/indicator/${indicator.id}`,
      {
        method: 'post',
        headers: {
          Authorization: localStorage.getItem('token'),
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          years,
          regions: formattedRegions,
        }),
      },
    );

    const json = await response.json();

    if (json.error) {
      throw new Error(json.message);
    }

    dispatch({
      type: GET_RADAR_DIAGRAM_STATISTIC,
      payload: {
        items: json.statistic,
        years: json.years,
        regions: json.regions,
      },
    });
  } catch (err) {
    handleError(dispatch, err);
  } finally {
    handleLoadingFinished();
  }
};

export const getStatisticForDiagram = ({ indicator, years = [], regions = [] }) => async dispatch => {
  try {
    // const url = new URL(
    //   `${config.protocol}://${config.server}:${config.port}/api/statistics/indicator/${indicator.id}`,
    // );
    // const params = qs.stringify(
    //   years,
    // );
    // url.search = params;

    // const response = await fetch(url, {
    //   method: 'get',
    //   headers: {
    //     Authorization: localStorage.getItem('token'),
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // });
    handleLoadingStarted();

    const formattedRegions = regions.map((region) => region.reg_ID);
    const response = await fetch(
      `${config.protocol}://${config.server}:${config.port}/api/statistics/diagram/indicator/${indicator.id}`,
      {
        method: 'post',
        headers: {
          Authorization: localStorage.getItem('token'),
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          years,
          regions: formattedRegions,
        }),
      },
    );

    const json = await response.json();

    if (json.error) {
      throw new Error(json.message);
    }

    dispatch({
      type: GET_DIAGRAM_STATISTIC,
      payload: {
        items: json.statistic,
        years: json.years,
        regions: json.regions,
      },
    });
  } catch (err) {
    handleError(dispatch, err);
  } finally {
    handleLoadingFinished();
  }
};

export const getStatisticForMap = (indicator, year) => async dispatch => {
  try {
    handleLoadingStarted();
    const response = await fetch(
      `${config.protocol}://${config.server}:${config.port}/api/statistics/map/indicator/${indicator.id}`,
      {
        method: 'get',
        headers: {
          Authorization: localStorage.getItem('token'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );

    const json = await response.json();

    if (json.error) {
      throw new Error(json.message);
    }

    dispatch({
      type: GET_MAP_STATISTIC,
      payload: {
        items: json.items,
      },
    });
  } catch (err) {
    handleError(dispatch, err);
  } finally {
    handleLoadingFinished();
  }
};

export const getStatisticForRegionTop = ({ region, year }) => async dispatch => {
  try {
    handleLoadingStarted();

    const response = await fetch(
      `${config.protocol}://${config.server}:${config.port}/api/statistics/top/region/${region.reg_ID}`,
      {
        method: 'post',
        headers: {
          Authorization: localStorage.getItem('token'),
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          year,
        }),
      },
    );

    const json = await response.json();

    if (json.error) {
      throw new Error(json.message);
    }

    dispatch({
      type: GET_REGION_TOP_STATISTIC,
      payload: {
        items: json.statistic,
        years: json.years,
        regions: json.regions,
      },
    });
  } catch (err) {
    handleError(dispatch, err);
  } finally {
    handleLoadingFinished();
  }
};

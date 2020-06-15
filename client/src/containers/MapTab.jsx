import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Divider,
} from '@material-ui/core';
import ReactTooltip from 'react-tooltip';
import MapAnimation from '../components/MapAnimation';
import Map from '../components/Map';
import IndicatorModal from '../components/IndicatorModal';
import StatisticHeader from '../components/StatisticHeader';
import { getStatisticByIndicator, getStatisticForMap } from '../actions/statisticAction';

const MapTab = ({
  currentIndicator,
  getStatisticForMap,
  mapStatistic,
  years,
}) => {
  const [selectedYear, setSelectedYear] = React.useState(0);

  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    if (years && years.length > 0) {
      setSelectedYear(years[0]);
    }
  }, [years]);

  useEffect(() => {
    if (currentIndicator && currentIndicator.id) {
      getStatisticForMap(currentIndicator);
    }
  }, [currentIndicator]);

  return (
    <>
      {/* <Grid container spacing={3}>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel shrink id="grouped-select-label">
              Год
            </InputLabel>
            <Select
              labelId="grouped-select-label"
              id="grouped-select"
              value={selectedYear || ''}
              onChange={handleYearChange}
            >
              {years?.map((year) => (
                <MenuItem key={year} value={year}>{year}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid> */}
      <StatisticHeader currentIndicator={currentIndicator} />
      <Map
        statistic={mapStatistic && selectedYear ? mapStatistic[selectedYear] : []}
        handleTooltipChange={setTooltip}
        currentIndicator={currentIndicator}
      />
      <MapAnimation setSelectedYear={setSelectedYear} years={years} year={selectedYear} />
      <Divider />
      <ReactTooltip
        id="global"
      // effect={isTooltipOpen ? 'solid' : 'float'}
        effect="float"
        // globalEventOff="click"
        // style={{
        //   pointerEvents: 'auto',
        // }}
        clickable
        // delayUpdate={500}
        place={'top'}
        type={'light'}
        // afterShow={() => {
        //   setIsTooltipOpen(true);
        // }}
        // afterHide={() => setIsTooltipOpen(false)}
      >
        {tooltip
        && (
        <IndicatorModal selectedRegion={tooltip} currentIndicator={currentIndicator} />
        )}
      </ReactTooltip>
    </>
  );
};

export default connect(
  (state) => {
    return {
      mapStatistic: state.statistic.mapStatistic,
    };
  },
  {
    getStatisticByIndicator,
    getStatisticForMap,
  },
)(MapTab);

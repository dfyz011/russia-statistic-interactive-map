import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Divider,
  InputLabel,
  FormControl,
  Select,
  Chip,
  TextField,
  Checkbox,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ReactTooltip from 'react-tooltip';
import MapAnimation from '../components/MapAnimation';
import Map from '../components/Map';
import MapWithBars from '../components/MapWithBars';
import IndicatorModal from '../components/IndicatorModal';
import IndicatorsModal from '../components/IndicatorsModal';
import StatisticHeader from '../components/StatisticHeader';
import VirtualizedMultiSelect from '../components/VirtualizedMultiSelect';
import { getStatisticByIndicator, getStatisticForMap } from '../actions/statisticAction';

import { withSettingsPanel } from './withSettingsPanel';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const MapTab = ({
  currentIndicator,
  getStatisticForMap,
  mapStatistic,
  mapRegions,
  years,
  indicators,
  isBar,
  colors,
  colorsCount,
  isLegendIntervaled,
  isRegionsSigned,
  handleSelectedIndicatorsChange,
  mainMapColor,
  mapFontColor,
  mapBorderColor,
  mapFontSize,
  legendFontSize,
  legendFontColor,
  isRegionNames3Letters,
  indicatorsColors,
}) => {
  const [selectedIndicators, setSelectedIndicators] = React.useState([]);
  const [selectedYear, setSelectedYear] = React.useState(0);

  const [tooltip, setTooltip] = useState(null);

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (years && years.length > 0) {
      setSelectedYear(years[0]);
    }
  }, [years]);

  useEffect(() => {
    if (currentIndicator && currentIndicator.id) {
      getStatisticForMap([currentIndicator]);
    }
  }, [currentIndicator]);

  useEffect(() => {
    if (selectedIndicators && selectedIndicators.length > 0) {
      getStatisticForMap(selectedIndicators);
      handleSelectedIndicatorsChange(selectedIndicators);
    }
  }, [selectedIndicators]);

  const ProcessAnimation = async () => {
    const currentPosition = years.findIndex((year) => year === selectedYear);
    const newPosition = currentPosition + 1;
    if (newPosition >= years.length) {
      setIsAnimating(false);
      return;
    }
    setSelectedYear(years[newPosition]);
    await timeout(500);
    if (isAnimating) ProcessAnimation();
  };

  useEffect(() => {
    if (isAnimating) {
      ProcessAnimation();
    }
  }, [isAnimating]);

  const handleSelectedIndicators = (event, newValue) => {
    setSelectedIndicators(newValue);
    handleSelectedIndicatorsChange(newValue);
  };
  const onPlayClick = () => {
    setIsAnimating(true);
  };

  const onPauseClick = () => {
    setIsAnimating(false);
  };

  const onStopClick = () => {
    setIsAnimating(false);
    setSelectedYear(years[0]);
  };

  const onReplayClick = () => {
    setSelectedYear(years[0]);
    setIsAnimating(true);
  };

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
      {
        isBar && (
          <VirtualizedMultiSelect
            style={{
              paddingBottom: '16px',
            }}
            id="grouped-select"
            label="Индикаторы"
            options={indicators}
            onChange={handleSelectedIndicators}
            value={selectedIndicators}
          />
        )
      }
      {!isBar && (<StatisticHeader currentIndicator={currentIndicator} />)}
      {
        !isBar ? (
          <Map
            statistic={mapStatistic
              && selectedYear
              && mapStatistic[selectedYear] && currentIndicator && currentIndicator.id
              ? mapStatistic[selectedYear][currentIndicator.id] : []}
            regions={mapRegions}
            selectedYear={selectedYear}
            handleTooltipChange={setTooltip}
            currentIndicator={currentIndicator || {}}
            isLegendIntervaled={isLegendIntervaled}
            colors={colors}
            colorsCount={colorsCount}
            isRegionsSigned={isRegionsSigned}
            mainMapColor={mainMapColor}
            mapFontColor={mapFontColor}
            mapBorderColor={mapBorderColor}
            mapFontSize={mapFontSize}
            legendFontSize={legendFontSize}
            isRegionNames3Letters={isRegionNames3Letters}
            legendFontColor={legendFontColor}
          />
        ) : (
          <MapWithBars
            statistic={mapStatistic && selectedYear && mapStatistic[selectedYear]
              ? mapStatistic[selectedYear] : []}
            regions={mapRegions}
            selectedYear={selectedYear}
            handleTooltipChange={setTooltip}
            selectedIndicators={selectedIndicators}
            indicatorsColors={indicatorsColors}
            mainMapColor={mainMapColor}
            mapBorderColor={mapBorderColor}
            mapFontSize={mapFontSize}
            legendFontSize={legendFontSize}
            legendFontColor={legendFontColor}
          />
        )
      }

      <MapAnimation
        setSelectedYear={setSelectedYear}
        years={years}
        year={selectedYear}
        onPlayClick={onPlayClick}
        onPauseClick={onPauseClick}
        onStopClick={onStopClick}
        onReplayClick={onReplayClick}
      />
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
        && !isBar ? (
          <IndicatorModal selectedRegion={tooltip} currentIndicator={currentIndicator} />
          )
          : (<IndicatorsModal {...tooltip} />)}
      </ReactTooltip>
    </>
  );
};

export default connect(
  (state) => {
    return {
      mapStatistic: state.statistic.mapStatistic,
      mapRegions: state.statistic.mapRegions,
    };
  },
  {
    getStatisticByIndicator,
    getStatisticForMap,
  },
)(withSettingsPanel(MapTab));

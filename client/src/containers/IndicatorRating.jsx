import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  ListItemText,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Input,
  Grid,
} from '@material-ui/core';
import IndicatorTable from './IndicatorTable';
import { getStatisticForIndicatorTop } from '../actions/statisticAction';

const IndicatorRating = ({
  years,
  indicators,
  getStatisticForIndicatorTop,
  top,
}) => {
  const [selectedYear, setSelectedYear] = React.useState(null);
  const [selectedIndicator, setSelectedIndicator] = React.useState(null);


  useEffect(() => {
    if (selectedYear === null && years && years.length > 0) {
      setSelectedYear(years[0]);
    }
  }, [years]);

  useEffect(() => {
    if (selectedIndicator === null && indicators && indicators.length > 0) {
      setSelectedIndicator(indicators[0]);
    }
  }, [indicators]);

  useEffect(() => {
    if (selectedIndicator !== null && selectedYear !== null) {
      getStatisticForIndicatorTop({ year: selectedYear, indicator: selectedIndicator });
    }
  }, [selectedYear, selectedIndicator]);

  const handleSelectedYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSelectedIndicator = (event) => {
    setSelectedIndicator(event.target.value);
  };

  return (
    <>
      <Grid
        container
        alignItems="flex-end"
        justify="space-between"
      >
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel shrink id="indicator-select-label">
              Индикатор
            </InputLabel>
            <Select
              labelId="indicator-select-label"
              value={selectedIndicator}
              onChange={handleSelectedIndicator}
              input={<Input />}
              MenuProps={{
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
              }}
            >
              {indicators && indicators.map((indicator) => (
                <MenuItem key={indicator.id} value={indicator}>
                  <ListItemText primary={indicator.title} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={7} style={{ paddingRight: '0px' }}>
          <FormControl fullWidth>
            <InputLabel shrink id="years-select-label">
              Год
            </InputLabel>
            <Select
              labelId="years-select-label"
              value={selectedYear}
              onChange={handleSelectedYearChange}
              input={<Input />}
              MenuProps={{
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
              }}
            >
              {years && years.map((year) => (
                <MenuItem key={year} value={year}>
                  <ListItemText primary={year} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <IndicatorTable data={top} />
    </>
  );
};

export default connect(
  (state) => {
    return {
      top: state.statistic.top,
    };
  },
  {
    getStatisticForIndicatorTop,
  },
)(IndicatorRating);

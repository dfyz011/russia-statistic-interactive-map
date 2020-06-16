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
import RegionTable from './RegionTable';
import { getStatisticForRegionTop } from '../actions/statisticAction';

const RegionRating = ({
  years,
  regions,
  getStatisticForRegionTop,
  top,
}) => {
  const [selectedYear, setSelectedYear] = React.useState(null);
  const [selectedRegion, setSelectedRegion] = React.useState(null);


  useEffect(() => {
    console.log('useEffectyears', years);
    if (selectedYear === null && years && years.length > 0) {
      setSelectedYear(years[0]);
    }
  }, [years]);

  useEffect(() => {
    console.log('useEffectregions', regions);
    if (selectedRegion === null && regions && regions.length > 0) {
      setSelectedRegion(regions[0]);
    }
  }, [regions]);

  useEffect(() => {
    if (selectedRegion !== null && selectedYear !== null) {
      console.log('getStatisticForRegionTop');
      getStatisticForRegionTop({ year: selectedYear, region: selectedRegion });
    }
  }, [selectedYear, selectedRegion]);

  const handleSelectedYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSelectedRegion = (event) => {
    setSelectedRegion(event.target.value);
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
            <InputLabel shrink id="region-select-label">
              Регион
            </InputLabel>
            <Select
              labelId="region-select-label"
              value={selectedRegion}
              onChange={handleSelectedRegion}
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
              {regions && regions.map((region) => (
                <MenuItem key={region.reg_ID} value={region}>
                  <ListItemText primary={region.reg_alias_human_name} />
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
      <RegionTable data={top} />
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
    getStatisticForRegionTop,
  },
)(RegionRating);

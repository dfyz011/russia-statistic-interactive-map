import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SaveIcon from '@material-ui/icons/Save';
import {
  Button,
  ListItemText,
  Checkbox,
  Chip,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Input,
  Grid,
  Typography,
} from '@material-ui/core';
import MainTable from './MainTable';
import StatisticHeader from '../components/StatisticHeader';
import { getStatisticByIndicator } from '../actions/statisticAction';

const TableTab = ({
  currentIndicator, statistic, years, regions, getStatisticByIndicator,
}) => {
  const [selectedYears, setSelectedYears] = React.useState([]);
  const [selectedRegions, setSelectedRegions] = React.useState([]);

  useEffect(() => {
    if (selectedRegions.length === 0) {
      setSelectedRegions(regions);
    }
    if (selectedYears.length === 0) {
      setSelectedYears(years);
    }
  }, [statistic]);

  useEffect(() => {
    if (currentIndicator) {
      setSelectedRegions([]);
      setSelectedYears([]);
      getStatisticByIndicator({ indicator: currentIndicator });
    }
  }, [currentIndicator]);

  const handleSelectedYearsChange = (event) => {
    setSelectedYears(event.target.value);
    getStatisticByIndicator({ indicator: currentIndicator, regions: selectedRegions, years: event.target.value });
  };

  const handleSelectedRegions = (event) => {
    setSelectedRegions(event.target.value);
    getStatisticByIndicator({ indicator: currentIndicator, years: selectedYears, regions: event.target.value });
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
              multiple
              value={selectedRegions || ''}
              onChange={handleSelectedRegions}
              input={<Input />}
              renderValue={(selected) => selected.map((reg) => reg.reg_alias_human_name).join(', ')}
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
                  <Checkbox checked={selectedRegions.indexOf(region) > -1} />
                  <ListItemText primary={region.reg_alias_human_name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={7} style={{ paddingRight: '0px' }}>
          <Grid container alignItems="center" justify="flex-end">
            <Grid xs={10} item style={{ paddingRight: '10px' }}>
              <FormControl fullWidth>
                <InputLabel shrink id="years-select-label">
                  Годы
                </InputLabel>
                <Select
                  labelId="years-select-label"
                  multiple
                  value={selectedYears || ''}
                  onChange={handleSelectedYearsChange}
                  input={<Input />}
                  renderValue={(selected) => (
                    <div className="chips">
                      {selected.map((value) => (
                        <Chip key={value} label={value} className="chips" />
                      ))}
                    </div>
                  )}
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
                      <Checkbox checked={selectedYears.indexOf(year) > -1} />
                      <ListItemText primary={year} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <StatisticHeader currentIndicator={currentIndicator} selectedYears={selectedYears} />
      <MainTable data={statistic} />
    </>
  );
};

export default connect(
  (state) => {
  },
  {
    getStatisticByIndicator,
  },
)(TableTab);
import React, { useEffect, useRef } from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux';
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
  IconButton,
  TextField,
} from '@material-ui/core';

import BarChartIcon from '@material-ui/icons/BarChart';
import TimelineIcon from '@material-ui/icons/Timeline';

import TrackChangesTwoToneIcon from '@material-ui/icons/TrackChangesTwoTone';
import { getStatisticForDiagram, getStatisticForRadarDiagram } from '../actions/statisticAction';
import LineDiagramm from '../components/LineDiagram';
import BarDiagram from '../components/BarDiagram';
import RadarDiagram from '../components/RadarDiagram';
import StatisticHeader from '../components/StatisticHeader';


const DiagramsTab = (props) => {
  const {
    currentIndicator,
    diagramStatistic,
    years,
    regions,
    getStatisticForDiagram,
    radarDiagramStatistic,
    getStatisticForRadarDiagram,
  } = props;
  const [selectedYears, setSelectedYears] = React.useState([]);
  const [selectedRegions, setSelectedRegions] = React.useState([]);
  const [selectedDiagram, setSelectedDiagram] = React.useState('line');

  useEffect(() => {
    // if (selectedRegions.length === 0) {
    //   setSelectedRegions(regions);
    // }
    // if (selectedYears.length === 0) {
    //   setSelectedYears(years);
    // }
  }, [diagramStatistic]);

  useEffect(() => {
    if (currentIndicator) {
      setSelectedRegions([]);
      setSelectedYears([]);
      getStatisticForDiagram({ indicator: currentIndicator });
      getStatisticForRadarDiagram({ indicator: currentIndicator });
    }
  }, [currentIndicator]);

  const handleSelectedYearsChange = (event) => {
    setSelectedYears(event.target.value);
    getStatisticForDiagram({ indicator: currentIndicator, regions: selectedRegions, years: event.target.value });
    getStatisticForRadarDiagram({ indicator: currentIndicator, regions: selectedRegions, years: event.target.value });
  };

  const handleSelectedRegions = (event, newValue) => {
    setSelectedRegions(newValue);
    getStatisticForDiagram({ indicator: currentIndicator, years: selectedYears, regions: newValue });
    getStatisticForRadarDiagram({ indicator: currentIndicator, years: selectedYears, regions: newValue });
  };

  const diagrams = {
    line: (<LineDiagramm diagramStatistic={diagramStatistic} />),
    bar: (<BarDiagram diagramStatistic={diagramStatistic} />),
    radar: (<RadarDiagram diagramStatistic={radarDiagramStatistic} />),
  };

  return (
    <>
      <Grid
        container
        alignItems="flex-end"
        justify="space-between"
      >
        <Grid item xs={4}>
          <Autocomplete
            options={regions}
            multiple
            onChange={handleSelectedRegions}
            value={selectedRegions}
            noOptionsText="Не найдено"
            disableCloseOnSelect
            // renderTags={() => {}}
            // renderTags={(value, getTagProps) => (
            //   <div>
            //     <span style={{ whiteSpace: 'nowrap' }}>
            //       {`${value.map((reg) => reg.reg_alias_human_name).join(', ')}`}
            //     </span>
            //   </div>
            // )}
            renderTags={(value, getTagProps) => (
              <div className="chips">
                {value.map((reg) => (
                  <Chip key={reg.reg_ID} label={reg.reg_alias_human_name} className="chips" />
                ))}
              </div>
            )}
            getOptionLabel={(option) => option.reg_alias_human_name}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Регионы"
                InputLabelProps={{ shrink: true }}
              />
            )}
            // MenuProps={{
            //   anchorOrigin: {
            //     vertical: 'bottom',
            //     horizontal: 'left',
            //   },
            //   transformOrigin: {
            //     vertical: 'top',
            //     horizontal: 'left',
            //   },
            //   getContentAnchorEl: null,
            // }}
            renderOption={(option, { selected }) => (
              <>
                <Checkbox
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.reg_alias_human_name}
              </>
            )}
            getOptionSelected={(option, value) => value.reg_ID === option.reg_ID}
          />
        </Grid>
        <Grid item xs={7} style={{ paddingRight: '0px' }}>
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
                    <Chip key={value} label={value} className="chip" />
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
      </Grid>
      <Grid
        container
        style={{
          justifyContent: 'space-between',
          paddingTop: '16px',
          alignItems: 'center',
        }}
      >
        <Grid item>
          <StatisticHeader currentIndicator={currentIndicator} selectedYears={selectedYears} />
        </Grid>
        <Grid item>
          <IconButton
            component="span"
            size="small"
            onClick={() => {
              setSelectedDiagram('bar');
            }}
          >
            <BarChartIcon />
          </IconButton>
          <IconButton
            component="span"
            size="small"
            onClick={() => {
              setSelectedDiagram('line');
            }}
          >
            <TimelineIcon />
          </IconButton>
          <IconButton
            component="span"
            size="small"
            onClick={() => {
              setSelectedDiagram('radar');
            }}
          >
            <TrackChangesTwoToneIcon />
          </IconButton>
        </Grid>
      </Grid>
      <div style={{ width: '100%', height: '800px', marginTop: '16px' }}>
        {diagramStatistic && diagramStatistic.length > 0
          && diagrams[selectedDiagram]}
      </div>

    </>
  );
};

export default connect(
  (state) => {
    return {
      diagramStatistic: state.statistic.diagramStatistic,
      radarDiagramStatistic: state.statistic.radarDiagramStatistic,
    };
  },
  {
    getStatisticForDiagram,
    getStatisticForRadarDiagram,
  },
)(DiagramsTab);

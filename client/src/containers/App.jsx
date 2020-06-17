import React, { useState, useEffect } from 'react';
import {
  Tabs,
  Tab,
  Paper,
  Box,
  Typography,
  Container,
  LinearProgress,
  FormControl,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { getIndicators } from '../actions/indicatorsAction';
import { getCategories } from '../actions/categoriesAction';

import { getStatisticByIndicator } from '../actions/statisticAction';

import MapTab from './MapTab';
import TableTab from './TableTab';
import RegionRating from './RegionRating';
import IndicatorRating from './IndicatorRating';
import DiagramsTab from './DiagramsTab';
import IndicatorSelectorCard from '../components/IndicatorSelectorCard';

// const useStyles = {
//   formControl: {
//     // margin: theme.spacing(1),
//     width: '100%',
//   },
//   AppBar: {
//     backgroundColor: 'gray',
//   },
//   chips: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   chip: {
//     margin: 2,
//   },
//   tableHead: {
//     backgroundColor: 'gray',
//     fontWeight: 'bold',
//   },
// };

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function getTabProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
    value: index,
  };
}

function App({
  statistic,
  indicators,
  getIndicators,
  categories,
  getCategories,
  years,
  getStatisticByIndicator,
  regions,
  isLoading,
}) {
  const [currentTab, setCurrentTab] = useState('map');

  const [selectedRatingType, setSelectedRatingType] = useState('region');

  const [currentIndicator, setCurrentIndicator] = useState(
    indicators[0] || null,
  );

  const [selectedCatogories, setSelectedCatogories] = React.useState([]);

  useEffect(() => {
    setCurrentIndicator(indicators[0]);
  }, [indicators]);

  useEffect(() => {
    if (currentIndicator) {
      getStatisticByIndicator({ indicator: currentIndicator });
    }
  }, [currentIndicator]);

  useEffect(() => {
    if (!categories || categories.length === 0) getCategories();
  });

  useEffect(() => {
    getIndicators(selectedCatogories);
  }, [selectedCatogories]);


  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleRatingType = (event, newValue) => {
    setSelectedRatingType(newValue);
  };

  const handleCurrentIndicatorChange = (event, newValue) => {
    setCurrentIndicator(newValue);
  };

  const handleSelectedCatogories = (event, newValue) => {
    setSelectedCatogories(newValue);
  };

  return (
    <Box>
      {currentTab !== 'bar-map' && currentTab !== 'rating' && (
      <Container>
        <IndicatorSelectorCard
          handleSelectedCatogories={handleSelectedCatogories}
          categories={categories}
          selectedCatogories={selectedCatogories}
          currentIndicator={currentIndicator}
          handleCurrentIndicatorChange={handleCurrentIndicatorChange}
          indicators={indicators}
        />
      </Container>
      )}
      <div style={{ position: 'relative' }}>
        <Container style={{ paddingTop: 20 }}>
          <Paper elevation={3} square>
            <Tabs
              value={currentTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Карта" {...getTabProps('map')} />
              <Tab label="Диаграмма" {...getTabProps('diagramm')} />
              <Tab label="Рейтинг" {...getTabProps('rating')} />
              <Tab label="Исходные данные" {...getTabProps('source-data')} />
              <Tab label="Столбчатая карта" {...getTabProps('bar-map')} />
            </Tabs>
            {
          isLoading ? (<LinearProgress />)
            : (
              <>
                <TabPanel value={currentTab} index="map">
                  <MapTab
                    currentIndicator={currentIndicator}
                    years={years}
                    indicators={indicators}
                  />
                </TabPanel>
                <TabPanel value={currentTab} index="diagramm">
                  <DiagramsTab
                    currentIndicator={currentIndicator}
                    years={years}
                    regions={regions}
                  />
                </TabPanel>
                <TabPanel value={currentTab} index="rating">
                  <FormControl component="fieldset" fullWidth>
                    <FormLabel component="legend">Рейтинг по</FormLabel>
                    <RadioGroup
                      aria-label="rating-type"
                      name="rating-type"
                      value={selectedRatingType}
                      onChange={handleRatingType}
                      style={{ flexDirection: 'row' }}
                    >
                      <FormControlLabel value="region" control={<Radio />} label="Региону" />
                      <FormControlLabel value="indicator" control={<Radio />} label="Метрике" />
                    </RadioGroup>
                  </FormControl>
                  {
                    selectedRatingType === 'indicator'
                      ? (<IndicatorRating years={years} indicators={indicators} />) : (
                        <RegionRating years={years} regions={regions} />
                      )
                  }
                </TabPanel>
                <TabPanel value={currentTab} index="source-data">
                  <TableTab
                    currentIndicator={currentIndicator}
                    statistic={statistic}
                    years={years}
                    regions={regions}
                  />
                </TabPanel>
                <TabPanel value={currentTab} index="bar-map">
                  <MapTab
                    currentIndicator={currentIndicator}
                    years={years}
                    indicators={indicators}
                    isBar
                  />
                </TabPanel>
              </>
            )
          }
          </Paper>
        </Container>
      </div>
    </Box>
  );
}

export default connect(
  (state) => {
    return {
      indicators: state.indicators.indicators,
      categories: state.categories.categories,
      statistic: state.statistic.statistic,
      years: state.statistic.years.map((el) => parseInt(el.year)),
      regions: state.statistic.regions,
      isLoading: state.loading.isLoading,
    };
  },
  {
    getIndicators,
    getCategories,
    getStatisticByIndicator,
  },
)(App);


import React, { createRef } from 'react';
import {
  TextField,
  Checkbox,
  Grid,
  Paper,
  Button,
  Tabs,
  Tab,
  Popper,
  IconButton,
  FormControlLabel,
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { randomColor } from '../constants/helpers';
import ColorPickerButton from '../components/ColorPickerButton';
import TabPanel from '../components/TabPanel';


export function withSettingsPanel(WrappedComponent) {
  function getTabProps(index) {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
      style: { width: '141px', minWidth: '141px' },
      value: index,
    };
  }
  return class SettingsPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedIndicators: [],
        currentTab: 'map',
        colorsCount: 2,
        // colors: new Array(2).fill('#F5F4F6'),
        colors: ['#ffedea', '#ff5233'],
        isRegionsSigned: false,
        isLegendIntervaled: false,
        isSettingsOpened: false,
        legendFontColor: '#000',
        mainMapColor: '#F5F4F6',
        mapFontColor: '#000',
        mapBorderColor: '#FFF',
        mapFontSize: 8,
        legendFontSize: 17,
        isRegionNames2Letters: false,
        indicatorsColors: [],
      };
    }

    settingsButton = createRef();

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    handleColorsCountChange = (e) => {
      e.persist();
      let newValue = e.target.value;
      if (!/^\d+$/.test(`${newValue}`)) return;
      if (newValue >= 10)newValue = 10;
      if (newValue <= 0)newValue = 0;
      this.setState(prevState => {
        const difference = prevState.colors.length - (newValue || 0);
        const newColors = difference > 0
          ? [...prevState.colors.splice(0, newValue)]
          : [...prevState.colors, ...new Array(Math.abs(difference)).fill(prevState.mainMapColor)];
        return ({
          ...prevState,
          colorsCount: newValue,
          colors: newColors,
        });
      });
    };

    handleFontSizeChange =(name) => (e) => {
      e.persist();
      let newValue = e.target.value;
      if (!/^\d+$/.test(`${newValue}`)) return;
      if (newValue >= 30)newValue = 30;
      if (newValue <= 0)newValue = 0;
      this.setState({ [name]: newValue });
    };

    handleColorsChange =(index) => (color) => {
      const { colors } = this.state;
      const newColors = [...colors];
      newColors[index] = color;
      this.setState({
        colors: newColors,
      });
    };

    handleColorChange= (name) => (color) => {
      this.setState({
        [name]: color,
      });
    };

    handleLegendIntervaledChange = (e) => {
      e.persist();
      this.setState(prevState => {
        if (!e.target.checked) {
          return {
            ...prevState,
            colors: [...prevState.colors.splice(0, 2)],
            colorsCount: 2,
            isLegendIntervaled: e.target.checked,
          };
        }
        return { isLegendIntervaled: e.target.checked };
      });
    };

    handleCheckboxChange = (e) => {
      this.setState({ [e.target.name]: e.target.checked });
    };

    handleTabChange = (event, newValue) => {
      this.setState({ currentTab: newValue });
    };

    handleSelectedIndicatorsChange = (newValue) => {
      this.setState(prevState => {
        const difference = prevState.selectedIndicators.length - (newValue.length || 0);
        const newColors = difference > 0
          ? [...prevState.indicatorsColors.splice(0, newValue.length)]
          : [...prevState.indicatorsColors, ...new Array(Math.abs(difference)).fill(randomColor())];
        return ({ ...prevState, selectedIndicators: newValue, indicatorsColors: newColors });
      });
    };

    handleIndicatorColorsChange =(index) => (color) => {
      const { indicatorsColors } = this.state;
      const newColors = [...indicatorsColors];
      newColors[index] = color;
      this.setState({
        indicatorsColors: newColors,
      });
    };

    render() {
      const {
        colorsCount,
        colors,
        isRegionsSigned,
        isLegendIntervaled,
        isSettingsOpened,
        legendFontColor,
        mapBorderColor,
        selectedIndicators,
        currentTab,
        mainMapColor,
        mapFontColor,
        mapFontSize,
        legendFontSize,
        isRegionNames2Letters,
        indicatorsColors,
      } = this.state;
      return (
        <div style={{ position: 'relative' }}>
          <IconButton
            onClick={() => {
              this.setState(prevState => ({ isSettingsOpened: !prevState.isSettingsOpened }));
            }}
            ref={this.settingsButton}
            style={{
              position: 'absolute',
              // left: '10%',
              bottom: '607px',
              zIndex: '1',
            }}
          >
            <SettingsIcon />
          </IconButton>
          <Popper open={isSettingsOpened} anchorEl={this.settingsButton.current}>
            <Paper
              elevation={3}
              square
            >
              <Tabs
                value={currentTab}
                onChange={this.handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                // variant="fullWidth"
              >
                <Tab label="Карта" {...getTabProps('map')} />
                <Tab label="Легенда" {...getTabProps('legend')} />
              </Tabs>
              <>
                <TabPanel value={currentTab} index="map">
                  <Grid container direction="column" spacing={1}>
                    <Grid
                      item
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'start',
                      }}
                    >
                      <ColorPickerButton
                        color={mainMapColor}
                        handleColorChange={this.handleColorChange('mainMapColor')}
                      />
                      <span>
                        Основной цвет карты
                      </span>
                    </Grid>
                    {!this.props.isBar
                      ? (
                        <>
                          <Grid item>
                            <FormControlLabel
                              control={(
                                <Checkbox
                                  style={{ marginLeft: '4px' }}
                                  checked={isLegendIntervaled}
                                  name="isLegendIntervaled"
                                  onChange={this.handleLegendIntervaledChange}
                                />
                            )}
                              label="Разделить на интервалы"
                            />
                          </Grid>
                          {isLegendIntervaled && (
                          <Grid item>
                            <TextField
                              fullWidth
                              label="Количество цветов карты"
                              inputProps={{ min: 1, max: 10 }}
                              type="number"
                              onChange={this.handleColorsCountChange}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              value={colorsCount}
                            />
                          </Grid>
                          )}
                          <Grid item style={{ maxWidth: '170px' }}>
                            <Grid container direction="column">
                              <Grid item>
                                <span>Цвета карты</span>
                              </Grid>
                              <Grid item>
                                <div style={{
                                  display: 'flex', flexFlow: 'wrap', border: '1px solid #D8DEE7', borderRadius: '4px',
                                }}
                                >
                                  {colors.map((color, index) => {
                                    return (
                                      <ColorPickerButton
                                        key={index}
                                        color={color}
                                        handleColorChange={this.handleColorsChange(index)}
                                      />
                                    );
                                  })}
                                </div>
                              </Grid>
                            </Grid>
                          </Grid>
                        </>
                      ) : (
                        <Grid item style={{ maxWidth: '170px' }}>
                          <Grid container direction="column">
                            <Grid item>
                              <span>Цвета индикаторов</span>
                            </Grid>
                            <Grid item>
                              <Grid
                                container
                                style={{
                                  display: 'flex', border: '1px solid #D8DEE7', borderRadius: '4px',
                                }}
                              >
                                {indicatorsColors.map((color, index) => {
                                  return (
                                    <Grid
                                      key={selectedIndicators[index].id}
                                      item
                                      style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'start',
                                      }}
                                    >
                                      <ColorPickerButton
                                        key={index}
                                        color={color}
                                        handleColorChange={this.handleIndicatorColorsChange(index)}
                                      />
                                      <div>
                                        <div>
                                          {selectedIndicators[index].title}
                                        </div>
                                      </div>
                                    </Grid>
                                  );
                                })}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      )}
                    <Grid
                      item
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'start',
                      }}
                    >
                      <ColorPickerButton
                        color={mapBorderColor}
                        handleColorChange={this.handleColorChange('mapBorderColor')}
                      />
                      <span>
                        Цвет границ
                      </span>
                    </Grid>
                    {!this.props.isBar
                    && (
                      <>
                        <Grid item>
                          <FormControlLabel
                            control={(
                              <Checkbox
                                style={{ marginLeft: '4px' }}
                                checked={isRegionsSigned}
                                name="isRegionsSigned"
                                onChange={this.handleCheckboxChange}
                              />
                        )}
                            label="Подписать регионы"
                          />
                        </Grid>
                        {isRegionsSigned
                    && (
                      <>
                        <Grid item>
                          <FormControlLabel
                            control={(
                              <Checkbox
                                style={{ marginLeft: '4px' }}
                                checked={isRegionNames2Letters}
                                name="isRegionNames2Letters"
                                onChange={this.handleCheckboxChange}
                              />
                        )}
                            label="Двухбуквенное сокращение"
                          />
                        </Grid>
                        <Grid
                          item
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'start',
                          }}
                        >
                          <ColorPickerButton
                            color={mapFontColor}
                            handleColorChange={this.handleColorChange('mapFontColor')}
                          />
                          <span>
                            Цвет текста
                          </span>
                        </Grid>
                        <Grid item>
                          <TextField
                            fullWidth
                            label="Размер шрифта"
                            inputProps={{ min: 1, max: 30 }}
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            value={mapFontSize}
                            onChange={this.handleFontSizeChange('mapFontSize')}
                          />
                        </Grid>
                      </>
                    )}
                      </>
                    )}
                  </Grid>
                </TabPanel>
                <TabPanel value={currentTab} index="legend">
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <TextField
                        fullWidth
                        label="Размер шрифта"
                        inputProps={{ min: 1, max: 30 }}
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={legendFontSize}
                        onChange={this.handleFontSizeChange('legendFontSize')}
                      />
                    </Grid>
                    <Grid
                      item
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'start',
                      }}
                    >
                      <ColorPickerButton
                        color={legendFontColor}
                        handleColorChange={this.handleColorChange('legendFontColor')}
                      />
                      <span>
                        Цвет текста легенды
                      </span>
                    </Grid>
                  </Grid>
                </TabPanel>
              </>
            </Paper>
          </Popper>
          {!this.props.isBar ? (
            <WrappedComponent
              {...this.props}
              colors={colors}
              colorsCount={colorsCount}
              isLegendIntervaled={isLegendIntervaled}
              isRegionsSigned={isRegionsSigned}
              mainMapColor={mainMapColor}
              mapFontColor={mapFontColor}
              mapBorderColor={mapBorderColor}
              mapFontSize={mapFontSize}
              legendFontSize={legendFontSize}
              isRegionNames3Letters={!isRegionNames2Letters}
              legendFontColor={legendFontColor}
            />
          ) : (
            <WrappedComponent
              {...this.props}
              colors={colors}
              selectedIndicators={selectedIndicators}
              isRegionsSigned={isRegionsSigned}
              mainMapColor={mainMapColor}
              mapBorderColor={mapBorderColor}
              mapFontSize={mapFontSize}
              legendFontSize={legendFontSize}
              handleSelectedIndicatorsChange={this.handleSelectedIndicatorsChange}
              legendFontColor={legendFontColor}
              indicatorsColors={selectedIndicators.reduce((r, a, index) => {
                r[a.id] = indicatorsColors[index];
                return r;
              }, {})}
            />
          )}
        </div>
      );
    }
  };
}

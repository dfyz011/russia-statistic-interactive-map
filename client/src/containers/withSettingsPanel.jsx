
import React, { createRef } from 'react';
import {
  TextField,
  Checkbox,
  Grid,
  Paper,
  Button,
  Popper,
  IconButton,
  FormControlLabel,
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import ColorPickerButton from '../components/ColorPickerButton';

export function withSettingsPanel(WrappedComponent) {
  return class SettingsPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        colorsCount: 2,
        // colors: new Array(2).fill('#F5F4F6'),
        colors: ['#ffedea', '#ff5233'],
        isRegionsSigned: false,
        isLegendIntervaled: false,
        isSettingsOpened: false,
        fontColor: '#000',
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
          : [...prevState.colors, ...new Array(Math.abs(difference)).fill('#F5F4F6')];
        return ({
          ...prevState,
          colorsCount: newValue,
          colors: newColors,
        });
      });
    };

    handleColorChange =(index) => (color) => {
      const { colors } = this.state;
      const newColors = [...colors];
      newColors[index] = color;
      this.setState({
        colors: newColors,
      });
    };

    handleFontColorChange =(color) => {
      this.setState({
        fontColor: color,
      });
    };

    handleLegendIntervaledChange = (e) => {
      e.persist();
      this.setState(prevState => {
        console.log('e.target.checked', e.target.checked);
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

    render() {
      const {
        colorsCount, colors, isRegionsSigned,
        isLegendIntervaled, isSettingsOpened, fontColor,
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
              top: '10%',
              // left: '10%',
              zIndex: '1',
            }}
          >
            <SettingsIcon />
          </IconButton>
          <Popper open={isSettingsOpened} anchorEl={this.settingsButton.current}>
            <Paper
              elevation={3}
              square
              style={{
                padding: '16px 24px',
              }}
            >
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <FormControlLabel
                    control={(
                      <Checkbox
                        size="small"
                        checked={isLegendIntervaled}
                        name="isLegendIntervaled"
                        onChange={this.handleLegendIntervaledChange}
                      />
                  )}
                    label="Легенда интервалами"
                  />
                </Grid>
                {isLegendIntervaled ? (
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
                ) : (
                  <Grid item style={{ width: '200px' }} />
                )}
                <Grid item style={{ width: '200px' }}>
                  <div style={{ display: 'flex', flexFlow: 'wrap' }}>
                    {
                    colors.map((color, index) => {
                      return (
                        <ColorPickerButton
                          key={index}
                          color={color}
                          handleColorChange={this.handleColorChange(index)}
                        />
                      );
                    })
                  }
                  </div>
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={(
                      <Checkbox
                        size="small"
                        checked={isRegionsSigned}
                        name="isRegionsSigned"
                        onChange={this.handleCheckboxChange}
                      />
                  )}
                    label="Подписать регионы"
                  />
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
                  />
                </Grid>
                <Grid item>
                  <ColorPickerButton
                    color={fontColor}
                    handleColorChange={this.handleFontColorChange}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Popper>
          <WrappedComponent
            {...this.props}
            colors={colors}
            colorsCount={colorsCount}
            isLegendIntervaled={isLegendIntervaled}
            isRegionsSigned={isRegionsSigned}
          />
        </div>
      );
    }
  };
}

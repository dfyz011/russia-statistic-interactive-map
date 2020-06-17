
import React from 'react';
import { ChromePicker } from 'react-color';
import {
  Button,
} from '@material-ui/core';

class ColorPickerButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: props.color,
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.hex });
  };

  handleChangeComplete= (color) => {
    this.props.handleColorChange(color.hex);
  }

  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    };
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    };
    return (
      <div>
        <Button
          style={{
            width: '24px',
            height: '24px',
            background: this.state.color,
            margin: '4px',
            padding: '0',
            minWidth: '0',
          }}
          variant="outlined"
          onClick={this.handleClick}
        >
          {''}
        </Button>
        { this.state.displayColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={this.handleClose} />
            <ChromePicker
              color={this.state.color}
              onChangeComplete={this.handleChangeComplete}
              onChange={this.handleChange}
            />
          </div>
        ) : null }
      </div>
    );
  }
}

export default ColorPickerButton;

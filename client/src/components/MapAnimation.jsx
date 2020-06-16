import React from 'react';
import { connect } from 'react-redux';
import PlayArrowSharpIcon from '@material-ui/icons/PlayArrowSharp';
import PauseSharpIcon from '@material-ui/icons/PauseSharp';
import ReplaySharpIcon from '@material-ui/icons/ReplaySharp';
import StopSharpIcon from '@material-ui/icons/StopSharp';
import {
  IconButton,
  Grid,
  Slider,
} from '@material-ui/core';


const MapAnimation = ({
  setSelectedYear,
  years,
  year,
  onPlayClick,
  onPauseClick,
  onStopClick,
  onReplayClick,
}) => {
  const marks = years.map((el) => ({ value: el }));
  return (
    <>
      <Grid container justify="center">
        <Grid item xs={4}>
          <Slider
            min={years[0]}
            marks={marks}
            max={years[years.length - 1]}
            value={year}
            onChange={(e, newValue) => setSelectedYear(newValue)}
            // valueLabelDisplay="auto"
            valueLabelDisplay="on"
          />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <IconButton
          aria-label="play"
          onClick={onPlayClick}
        >
          <PlayArrowSharpIcon />
        </IconButton>
        <IconButton
          aria-label="pause"
          onClick={onPauseClick}
        >
          <PauseSharpIcon />
        </IconButton>
        <IconButton
          aria-label="stop"
          onClick={onStopClick}
        >
          <StopSharpIcon />
        </IconButton>
        <IconButton
          aria-label="replay"
          onClick={onReplayClick}
        >
          <ReplaySharpIcon />
        </IconButton>
      </Grid>
    </>
  );
};

export default connect(
  state => {
    return {
    };
  },
  {
  },
)(MapAnimation);

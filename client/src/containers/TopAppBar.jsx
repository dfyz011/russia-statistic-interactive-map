import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link as RouterLink } from 'react-router-dom';

import {
  Typography,
  Toolbar,
  AppBar,
  Grid,
  Hidden,
  Drawer,
  List,
  Divider,
  ListSubheader,
} from '@material-ui/core';
import { white } from 'material-ui/styles/colors';

class TopAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driverIsOpen: false,
    };
  }

  signOut = () => {
  }

  render() {
    const { driverIsOpen } = this.state;
    return (
      <AppBar position="static" style={{ marginBottom: '20px' }}>
        <Toolbar>
          <Grid container direction="row" alignItems="flex-end" justify="space-between" spacing={1}>
            <Grid item>
              <Grid container direction="row" alignItems="center" justify="flex-start" spacing={1}>
                <Hidden xsDown>
                  <Grid item>
                    <RouterLink to="/">
                      <Typography variant="h2" style={{ color: white }}>Платформа для отображения данных</Typography>
                    </RouterLink>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
        <Drawer
          anchor="left"
          open={driverIsOpen}
          onClose={() => this.setState({ driverIsOpen: false })}
        >

          <Divider />
          <List
            onClick={() => this.setState({ driverIsOpen: false })}
            subheader={(
              <ListSubheader>
                Платформа для отображения данных
              </ListSubheader>
            )}
          />
          {/* <ListItem button component={RouterLink} to="/">
              <ListItemIcon>
                <ListRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Список проектов" />
            </ListItem> */}
        </Drawer>
      </AppBar>
    );
  }
}

export default withRouter(connect(
  (state) => ({
  }),
  (dispatch) => ({
  }),
)(TopAppBar));

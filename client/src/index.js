import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {
  ThemeProvider,
} from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App';
import AlertContainer from './containers/AlertContainer';
import theme from './theme';
import './index.css';
import TopAppBar from './containers/TopAppBar';


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <TopAppBar />
        <App />
        <AlertContainer />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

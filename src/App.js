import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Grid } from 'react-bootstrap';

import './App.css';

import Routes from './routes';

class App extends Component {
  render() {
    return (
      <Grid>
        <Routes history={hashHistory} />
      </Grid>
    );
  }
}

export default App;

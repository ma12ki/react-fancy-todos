import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Grid } from 'react-bootstrap';

import './App.css';

import Routes from './routes';

import mocks from './data/mocks';

class App extends Component {
  constructor(props) {
    super(props);

    mocks.init();
  }

  render() {
    return (
      <Grid>
        <Routes history={hashHistory} />
      </Grid>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Header from './Header';
import ProgressIndicator from './ProgressIndicator';

class App extends Component {
  render() {

    return (
      <div>
        <Header />
        <ProgressIndicator />
      </div>
    );
  }
}

export default App;

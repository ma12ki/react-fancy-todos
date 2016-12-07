import React, { Component } from 'react';

import Header from './Header';
import ProgressIndicator from './ProgressIndicator';
import Content from './Content';

class App extends Component {
  render() {

    return (
      <div>
        <Header />
        <ProgressIndicator />
        <Content />
      </div>
    );
  }
}

export default App;

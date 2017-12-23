import React, { Component } from 'react';
import './App.css';

import Tickers from './components/Tickers.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Cryptocurrency React</h2>
        </div>
        <Tickers />
        <p>Information updated every 10 seconds.</p>
      </div>
    );
  }
}

export default App;

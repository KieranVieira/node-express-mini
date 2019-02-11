import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <h1 {...props}>Hello</h1>}/>
      </div>
    );
  }
}

export default App;

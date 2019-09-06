import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movie Library</h1>
        <Router>
          <Route exact path="/" component={HomePage} />
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>

        <Router>
          <Route exact path="/" component={HomePage} />
        </Router>
      </div>
    );
  }
}

export default App;

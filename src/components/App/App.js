import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage';
import Details from './Details/Details';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movie Library</h1>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/detail/:id" component={Details} />
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage';
import Details from './Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/detail/:id" component={Details} />
          <Route exact path="/edit/:id" component={Edit} />
        </Router>
      </div>
    );
  }
}

export default App;

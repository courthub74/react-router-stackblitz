import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';

export default function App() {
  return (
    <Router>
      <div className="app">
        <h1>React Router</h1>
        <Switch>
          <Nav />
          <Route path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    </Router>
  );
}

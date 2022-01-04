import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import Post from './components/Post';

export default function App() {
  return (
    <Router>
      <div className="app">
        <h1>React Router</h1>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Post" component={Post}></Route>
          <Route path="/About" component={About}></Route>
        </Switch>
      </div>
    </Router>
  );
}

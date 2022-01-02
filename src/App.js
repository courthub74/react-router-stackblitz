import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <h1>React Router</h1>
      </Switch>
    </Router>
  );
}

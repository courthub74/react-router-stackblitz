import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navi">
      <Link to="/About">ABOUT | </Link>
      <Link to="/Post">POST | </Link>
      <Link to="/">BACK TO HOME</Link>
    </nav>
  );
}

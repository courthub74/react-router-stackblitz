import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navi">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
    </nav>
  );
}
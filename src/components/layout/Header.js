import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
  <div>
  <header style={headerStyle}>
    <Link to="/">Home</Link> | <Link to="/about">About</Link>
  </header>
  <p><Link to="/login">Login</Link> | <Link to="/sign-up">Sign up</Link></p>
  </div>
  );
}

export default Header;

const headerStyle = {
    padding: '1.5rem 2.5rem',
    backgroundImage: 'linear-gradient(120deg, #2ddcfb 0%,#2d91fb 100%)',
    margin: '0 0 2rem 0',
    fontSize: '1.5rem',
    color: 'white',
    textAlign: 'center',
}
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from './logo.svg';

function Logo() {
  return (
    <NavLink to="/">
      <LogoIcon />
    </NavLink>
  );
}

export default Logo;

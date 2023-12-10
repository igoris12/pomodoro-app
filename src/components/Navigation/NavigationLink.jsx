import React from 'react';
import './NavigationLink.scss';
import { Link } from "react-router-dom";

function NavigationLink({icon, text, to , darkMode=false}) {
  return (
      <Link to={to} className={!true === darkMode ? 'navigationLink': 'navigationLink dark'}>{icon} {text}</Link>
  )
}

export default NavigationLink

import React from 'react';
import './NavigationLink.scss';
import { Link } from "react-router-dom";

function NavigationLink({icon, text, to}) {
  return (
      <Link to={to} className='navigationLink'>{icon} {text}</Link>
  )
}

export default NavigationLink

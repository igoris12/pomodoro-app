import React from 'react';
import './NavigationLink.scss';
function NavigationLink({icon, text}) {
  return (
    <button className='navigationLink'>
      {icon} {text}
    </button>
  )
}

export default NavigationLink

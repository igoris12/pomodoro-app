import React from 'react'
import './Timer.scss';
import TimerProgressBar from './TimerProgressBar';
function Timer() {
  return (
    <mian className='timerContainer'>
      <TimerProgressBar/>
      <footer>footer</footer>
    </mian>
  )
}

export default Timer

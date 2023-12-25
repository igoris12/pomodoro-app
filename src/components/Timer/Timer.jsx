import React from 'react'
import './Timer.scss';
import TimerProgressBar from './TimerProgressBar';
function Timer() {
  return (
    <section className='timerContainer'>
      <TimerProgressBar/>
      <footer>footer</footer>
    </section>
  )
}

export default Timer

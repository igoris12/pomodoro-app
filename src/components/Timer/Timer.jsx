import React from 'react'
import './Timer.scss';
import TimerProgressBar from './TimerProgressBar';
import Footer from '../Footer/Footer';
function Timer() {
  return (
    <section className='timerContainer'>
      <TimerProgressBar/>
      <Footer/>
    </section>
  )
}

export default Timer

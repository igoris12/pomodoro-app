import React from 'react'
import './Timer.scss';
import TimerProgressBar from './TimerProgressBar';
import Footer from '../Footer/Footer';
function Timer({darkMode}) {
  return (
    <section className={darkMode !== true ?'timerContainer': 'timerContainer dark'}>
      <TimerProgressBar darkMode={darkMode}/>
      <Footer/>
    </section>
  )
}

export default Timer

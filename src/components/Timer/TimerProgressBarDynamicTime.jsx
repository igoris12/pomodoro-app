import React from 'react'

function TimerProgressBarDynamicTime({formatting, minutes, seconds}) {
  return (
    <>
       {formatting(minutes) + ":" + formatting(seconds)}
    </>
  )
}

export default TimerProgressBarDynamicTime

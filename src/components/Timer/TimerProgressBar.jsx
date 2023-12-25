import React from "react";
import "./TimerProgressBar.scss";
function TimerProgressBar() {
  return (
    <section className="timerProgressBar">
      <div className="circle">
        <svg>
          <circle cx={91} cy={84} r={91}></circle>
          <circle className="backCircle" cx={91} cy={84} r={91}></circle>
        </svg>
        <div className="time">25:00<span>break</span></div>
      </div>
      <div>buttons box</div>
      <div>1 of 4 sessions</div>
    </section>
  );
}

export default TimerProgressBar;

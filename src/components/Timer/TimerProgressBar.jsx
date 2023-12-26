import React, { useState } from "react";
import "./TimerProgressBar.scss";
import { MdSkipNext } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import { IoMdPlay } from "react-icons/io";
import { IoPause } from "react-icons/io5";
function TimerProgressBar( {darkMode}) {
  const [play, setPlay] = useState(false);

  const togglePlay = () => {
    setPlay(!play);
  };

  const [time, setTime] = useState(60 * 10 + 11);
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
 const a = 572 - (572 / time) /60 / 60;
 console.log(a);
  return (
    <section className={darkMode !== true ?"timerProgressBar": "timerProgressBar dark"}>
      <div className="circle">
        <svg>
          <circle cx={91} cy={84} r={91}></circle>
          <circle style={{strokeDashoffset: {a}}} className="backCircle" cx={91} cy={84} r={91}></circle>
        </svg>
        <div className="time">
          {minutes + ':' + seconds}<span>break</span>
        </div>
      </div>
      <div className="timeControls">
        <button className="restart">
          <VscDebugRestart />
        </button>
        <button className="play" onClick={togglePlay}>
          {play === false ? <IoMdPlay /> : <IoPause />}
        </button>
        <button className="next">
          <span  ></span>
          <MdSkipNext />
        </button>
      </div>
      <div className="info"><span>1 of 4</span><span>sessions</span></div>
    </section>
  );
}

export default TimerProgressBar;

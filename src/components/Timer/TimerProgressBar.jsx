import React, { useState, useEffect } from "react";
import "./TimerProgressBar.scss";
import { MdSkipNext } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import { IoMdPlay } from "react-icons/io";
import { IoPause } from "react-icons/io5";
function TimerProgressBar({ darkMode }) {
  const [play, setPlay] = useState(false);
  const [time, setTime] = useState(62);
  const [tistrokeDashoffsetme, setStrokeDashoffset] = useState(0);
  const a =  572 / 62 ;

  const togglePlay = () => {
    setPlay(!play);
  };

  useEffect(()=> {
    if (time <= 0) {
      return;
    }
    const timer = setInterval(() => {
      setTime(prevSeconds => prevSeconds - 1);
      setStrokeDashoffset(tistrokeDashoffsetme + a);
      }, 1000);

      return () => clearInterval(timer);

  },[time,tistrokeDashoffsetme])

  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  console.log(Math.floor(tistrokeDashoffsetme));
  return (
    <section
      className={
        darkMode !== true ? "timerProgressBar" : "timerProgressBar dark"
      }
    >
      <div className="circle">
        <svg>
          <circle cx={91} cy={84} r={91}></circle>
          <circle
            style={{ strokeDashoffset: tistrokeDashoffsetme }}
            className="backCircle"
            cx={91}
            cy={84}
            r={91}
          ></circle>
        </svg>
        <div className="time">
          {minutes + ":" + seconds}
          <span>break</span>
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
          <span></span>
          <MdSkipNext />
        </button>
      </div>
      <div className="info">
        <span>1 of 4</span>
        <span>sessions</span>
      </div>
    </section>
  );
}

export default TimerProgressBar;

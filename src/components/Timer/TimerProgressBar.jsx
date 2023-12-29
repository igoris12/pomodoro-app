import React, { useState, useEffect } from "react";
import "./TimerProgressBar.scss";
import { MdSkipNext } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import { IoMdPlay } from "react-icons/io";
import { IoPause } from "react-icons/io5";
function TimerProgressBar({ darkMode, time, session, status, sessionCount, changeSession }) {
  const [play, setPlay] = useState(false);
  const [tistrokeDashoffsetme, setStrokeDashoffset] = useState(0);
  const [timeInSeconds, setTimeInSeconds] = useState(time);
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds - minutes * 60;
  console.log(time, status, session, timeInSeconds);

  const formatting = (data) => {
    return data <= 9 ? "0" + data : data;
  };
  const togglePlay = () => {
    setPlay(!play);
  };

  useEffect(() => {
  //   if (play !== true) {
  //     return;
  //   }
  //   if (time.time <= 0  ) {
  //     if (data.length -1 === session) {
  //       console.log('end');
  //       return
  //     }
  //     setSession((prevSession => prevSession + 1))
  //     setStrokeDashoffset(0)
  //     setTime(data[session])
  //     return;
  //   }
  //   const timer = setInterval(() => {
  //     setTime((prevState)=> prevState = {...prevState, time: prevState.time - 1});
  //     setStrokeDashoffset(tistrokeDashoffsetme + 572 / (data[session].time));
  //   }, 1000);

  //   return () => clearInterval(timer);
  setTimeInSeconds(time);
  }, [time]);

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
          <span>{status}</span>
        </div>
      </div>
      <div className="timeControls">
        <button className="restart">
          <VscDebugRestart />
        </button>
        <button className="play" onClick={togglePlay}>
          {play === false ? <IoMdPlay /> : <IoPause />}
        </button>
        <button className="next" onClick={changeSession}>
          <span></span>
          <MdSkipNext />
        </button>
      </div>
      <div className="info">
        <span>{session + " of " + sessionCount}</span>
        <span>sessions</span>
      </div>
    </section>
  );
}

export default TimerProgressBar;

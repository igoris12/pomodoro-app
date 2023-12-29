import React, { useState, useEffect } from "react";
import "./TimerProgressBar.scss";
import { MdSkipNext } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import { IoMdPlay } from "react-icons/io";
import { IoPause } from "react-icons/io5";
function TimerProgressBar({
  darkMode,
  time,
  session,
  status,
  sessionCount,
  changeSession,
  restartSessions,
  timeInSeconds,
  reduceTime
}) {
  const [play, setPlay] = useState(false);
  const [tistrokeDashoffsetme, setStrokeDashoffset] = useState(0);
  // const [timeInSeconds, setTimeInSeconds] = useState(time);
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  console.log(timeInSeconds);

  const formatting = (data) => {
    return data <= 9 ? "0" + data : data;
  };
  const togglePlay = () => {
    setPlay(!play);
  };

  useEffect(() => {
    

    if (play !== true) {
      return;
    }

    const timer = setInterval(() => {
      reduceTime();
    // setStrokeDashoffset(tistrokeDashoffsetme + 572 / (data[session].time));
    }, 1000);

    return () => clearInterval(timer);
  }, [time, play, reduceTime]);

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
        <button
          className={session === 1 ? "restart" : "restart active"}
          onClick={() => {
            setPlay(false);
            restartSessions();
          }}
        >
          <VscDebugRestart />
        </button>
        <button className="play" onClick={togglePlay}>
          {play === false ? <IoMdPlay /> : <IoPause />}
        </button>
        <button
          className="next"
          onClick={() => {
            setPlay(false);
            changeSession();
          }}
        >
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

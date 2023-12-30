import React, { useState, useEffect } from "react";
import "./TimerProgressBar.scss";
import { MdSkipNext } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import { IoMdPlay } from "react-icons/io";
import { IoPause } from "react-icons/io5";
import useScreenSize from '../../js/useScreenSize.js';
function TimerProgressBar({
  darkMode,
  time,
  session,
  status,
  sessionCount,
  changeSession,
  restartSessions,
  timeInSeconds,
  reduceTime,
}) {
  const [play, setPlay] = useState(false);
  const screenSize = useScreenSize();
  const [tistrokeDashoffsetme, setStrokeDashoffset] = useState(0);
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

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
    if (time <= 0) {
      const timer = setTimeout(() => {
        changeSession();
        setStrokeDashoffset(0);
      }, 1000);
     
      return () => clearTimeout(timer);
    }
    const timer = setInterval(() => {
      reduceTime();
      setStrokeDashoffset(tistrokeDashoffsetme + (screenSize.width >= 900 ? 886 : 572) / timeInSeconds);
    }, 1000);

    return () => clearInterval(timer);
  }, [
    time,
    play,
    reduceTime,
    changeSession,
    timeInSeconds,
    tistrokeDashoffsetme,
    screenSize
  ]);

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
          {formatting(minutes) + ":" + formatting(seconds)}
          <span>{status}</span>
        </div>
      </div>
      <div className="timeControls">
        <button
          className={time === timeInSeconds ? "restart" : "restart active"}
          onClick={() => {
            setPlay(false);
            restartSessions();
            setStrokeDashoffset(0);
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
            setStrokeDashoffset(0);
          }}
        >
          <span></span>
          <MdSkipNext />
        </button>
      </div>
      <div className="info">
        <span>{session + " of " + Math.floor(sessionCount / 2)}</span>
        <span>sessions</span>
      </div>
    </section>
  );
}

export default TimerProgressBar;

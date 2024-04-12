import React from "react";
import TimerProgressBarDynamicTime from "./TimerProgressBarDynamicTime";
import { MdSkipNext } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import { IoMdPlay } from "react-icons/io";
import { IoPause } from "react-icons/io5";

function TimerProgressBarIndex({
  darkMode,
  data,
  audioRef,
  tistrokeDashoffsetme,
  formatting,
  minutes,
  seconds,
  session,
  dinamicTime,
  time,
  play,
  setPlay,
  restartSessions,
  setStrokeDashoffset,
  togglePlay,
  changeSession,
  infoText,
}) {
  return (
    <section
      className={
        darkMode !== true ? "timerProgressBar" : "timerProgressBar dark"
      }
    >
      <audio src={data.sound.audio} ref={audioRef}></audio>

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
          <TimerProgressBarDynamicTime
            formatting={formatting}
            minutes={minutes}
            seconds={seconds}
          />
          <span>{data.time[session - 1].status}</span>
        </div>
      </div>
      <div className="timeControls">
        <button
          className={dinamicTime === time ? "restart" : "restart active"}
          onClick={() => {
            setPlay(false);
            restartSessions();
            setStrokeDashoffset(0);
          }}
        >
          <VscDebugRestart />
        </button>
        <button
          className="play"
          onClick={(e) => {
            togglePlay(e);
            audioRef.current.load();
          }}
        >
          {play === false ? <IoMdPlay /> : <IoPause />}
        </button>
        <button
          className="next"
          onClick={() => {
            setPlay(false);
            changeSession();
            setStrokeDashoffset(0);
            audioRef.current.load();
          }}
        >
          <span></span>
          <MdSkipNext />
        </button>
      </div>
      <div className="info">
        <span>{infoText(session, data.time.length)}</span>
        <span>sessions</span>
      </div>
    </section>
  );
}

export default TimerProgressBarIndex;

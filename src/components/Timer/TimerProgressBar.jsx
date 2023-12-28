import React, { useState, useEffect } from "react";
import "./TimerProgressBar.scss";
import { MdSkipNext } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import { IoMdPlay } from "react-icons/io";
import { IoPause } from "react-icons/io5";
function TimerProgressBar({ darkMode }) {
  const data = [
    { time: 10, status: "focus", session: 1 },
    { time: 5, status: "brack", session: 2 },
    { time: 10, status: "focus", session: 3 },
    { time: 5, status: "brack", session: 4 },
    { time: 10, status: "brack", session: 5 },
  ];
  const [play, setPlay] = useState(false);
  const [session, setSession] = useState(0);
  const [time, setTime] = useState(data[session]);
  const [tistrokeDashoffsetme, setStrokeDashoffset] = useState(0);
  const minutes = Math.floor(time.time / 60);
  const seconds = time.time - minutes * 60;
 console.log(session);
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
    if (time.time <= 0  ) {
      setSession((prevSession => prevSession + 1))
      // setTime(data[session])
      setStrokeDashoffset(0)
      return;
    }
    const timer = setInterval(() => {
      setTime((prevState)=> prevState = {...prevState, time: prevState.time - 1});
      setStrokeDashoffset(tistrokeDashoffsetme + 572 / (data[session].time));
    }, 1000);

    return () => clearInterval(timer);
  }, [time, tistrokeDashoffsetme, play, session, data]);

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

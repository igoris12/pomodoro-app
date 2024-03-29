import React, { useState, useEffect } from "react";
import "./TimerProgressBar.scss";
import { MdSkipNext } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";
import { IoMdPlay } from "react-icons/io";
import { IoPause } from "react-icons/io5";
import useScreenSize from "../../js/useScreenSize.js";
import { useSelector } from "react-redux";

function TimerProgressBar({ darkMode }) {
  const [play, setPlay] = useState(false);
  const screenSize = useScreenSize();
  const [tistrokeDashoffsetme, setStrokeDashoffset] = useState(0);

  const formatData = (data) => {
    const dataArray = [];

    for (let i = 0; i < data.rounds; i++) {
      dataArray.push({
        time: data.workDuration * 60,
        status: "focus" + i,
        session: i,
      });
      dataArray.push({
        time: data.breakDuration * 60,
        status: "brack" + i,
        session: i,
      });
    }
    dataArray.push({ time: data.longBreakDuration * 60, status: "long brake" });
    return {
      time: dataArray,
      settings: {
        notification: data.notification,
        autoplay: data.autoplay,
        timeInTitle: data.timeInTitle,
      },
      sound: data.sound,
    };
  };
  const reduxData = useSelector((state) => state.data);
  const data = formatData(reduxData);
  const [session, setSession] = useState(1);
  const [time, setTime] = useState(data.time[session - 1].time);

  const [dinamicTime, setDinamincTime] = useState(time);

  const minutes = Math.floor(dinamicTime / 60);
  const seconds = dinamicTime - minutes * 60;


  const reduceTime = () => {
    setDinamincTime((prevTime) => prevTime - 1);
  };
  useEffect(()=> {
    setTime(data.time[session - 1].time);
  },[session, data])
  useEffect(() => {
    if (dinamicTime === 0) {
      const sound = new Audio(data.sound);
      sound.play();

      if (data.settings.notification) {
        callNotification();
      }

      if (!data.settings.autoplay) {
        togglePlay();
        changeSession();
        setStrokeDashoffset(0);
      }
    }
    if (dinamicTime <= 0) {
      const timer = setTimeout(() => {
        changeSession();
        setStrokeDashoffset(0);
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (data.settings.timeInTitle) {
      document.title = `${
        formatting(minutes) + ":" + formatting(seconds)
      } | 👨‍💻 Pamedoro`;
    }
    
    if (play !== true) {
      return;
    }
    const timer = setInterval(() => {
      reduceTime();
      setStrokeDashoffset(
        tistrokeDashoffsetme + (screenSize.width >= 900 ? 867 : 572) / time
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [
    time,
    play,
    tistrokeDashoffsetme,
    screenSize,
    data,
    dinamicTime,
    minutes,
    seconds,
  ]);


  const changeSession = () => {
    if (session === data.time.length) {
    setSession(1);
    setDinamincTime(data.time[0].time);
    }
    if (session < data.time.length) {
      setSession((prev) => prev + 1);
      setDinamincTime(data.time[session].time);
    }
  };

  const togglePlay = () => {
    setPlay(!play);
  };

  const callNotification = () => {
    alert(
      `session ${Math.ceil(session / 2)} ${
        data.time[session - 1].status
      } ended.`
    );
  };

 
  const restartSessions = () => {
    setDinamincTime(time);
  };
  const formatting = (data) => {
    return data <= 9 ? "0" + data : data;
  };

  const infoText = (session, sessionCount) => {
    return Math.ceil(session / 2) < Math.floor(sessionCount / 2)
      ? Math.ceil(session / 2) + " of " + Math.floor(sessionCount / 2)
      : Math.floor(sessionCount / 2) + " of " + Math.floor(sessionCount / 2);
  };
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
        <span>{infoText(session, data.time.length)}</span>
        <span>sessions</span>
      </div>
    </section>
  );
}

export default TimerProgressBar;

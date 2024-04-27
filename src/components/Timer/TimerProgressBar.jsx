import { useState, useEffect, useRef, useCallback } from "react";
import "./TimerProgressBar.scss";
import formatData from "./formatData.js";
import useScreenSize from "../../js/useScreenSize.js";
import { useSelector } from "react-redux";
import TimerProgressBarIndex from "./TimerProgressBarIndex.jsx";

function TimerProgressBar({ darkMode }) {
  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);
  const screenSize = useScreenSize();
  const [tistrokeDashoffsetme, setStrokeDashoffset] = useState(0);
  
  const reduxData = useSelector((state) => state.data);
  const data = formatData(reduxData);
  const [session, setSession] = useState(1);
  const [time, setTime] = useState(data.time[session - 1].time);
  const [dinamicTime, setDinamincTime] = useState(time);

  const minutes = Math.floor(dinamicTime / 60);
  const seconds = dinamicTime - minutes * 60;

  const infoText = (session, sessionCount) => {
    return Math.ceil(session / 2) < Math.floor(sessionCount / 2)
      ? Math.ceil(session / 2) + " of " + Math.floor(sessionCount / 2)
      : Math.floor(sessionCount / 2) + " of " + Math.floor(sessionCount / 2);
  };
  
  const changeSession = useCallback(() => {
    if (session === data.time.length) {
      setSession(1);
      setDinamincTime(data.time[0].time);
      setTime(data.time[0].time)
    }
    if (session < data.time.length) {
      setSession((prev) => prev + 1);
      setDinamincTime(data.time[session].time);
      setTime(data.time[session].time)
    }
  }, [data.time, session]);

  const reduceTime = () => {
    setDinamincTime((prevTime) => prevTime - 1);
  };

  const togglePlay = () => {
    setPlay(!play);
  };

  const restartSessions = () => {
    setDinamincTime(time);
  };
  const formatting = (data) => {
    return data <= 9 ? "0" + data : data;
  };

  useEffect(() => {
    const callNotification = () => {
      if (data.time[session - 1].status === "brack") {
        alert(
          `Bracke ${Math.ceil(session / 2)} ended, time to get beck to work!`
        );
      } else {
        alert(
          `Session ${Math.ceil(session / 2)} ended, time to have some rest!`
        );
      }
    };

    if (dinamicTime === 0) {
      audioRef.current.play();
      if (!data.settings.autoplay) {
        if (data.settings.notification) {
          callNotification();
        }
        setPlay(!play);
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
      data.time[session - 1].status === "focus"
        ? (document.title = `${
            formatting(minutes) + ":" + formatting(seconds)
          } | 👨‍💻 Pomodor`)
        : (document.title = `${
            formatting(minutes) + ":" + formatting(seconds)
          } | ☕️ Pomodor`);
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
    session,
    changeSession,
  ]);

  return (
    <TimerProgressBarIndex
      darkMode={darkMode}
      data={data}
      audioRef={audioRef}
      tistrokeDashoffsetme={tistrokeDashoffsetme}
      formatting={formatting}
      minutes={minutes}
      seconds={seconds}
      session={session}
      dinamicTime={dinamicTime}
      time={time}
      play={play}
      setPlay={setPlay}
      restartSessions={restartSessions}
      setStrokeDashoffset={setStrokeDashoffset}
      togglePlay={togglePlay}
      changeSession={changeSession}
      infoText={infoText}
    />
  );
}

export default TimerProgressBar;

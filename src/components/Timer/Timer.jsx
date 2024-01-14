import React, { useState, useEffect, useContext } from "react";
import {TimerDataContext} from '../../App';
import "./Timer.scss";
import TimerProgressBar from "./TimerProgressBar";
import Footer from "../Footer/Footer";
function Timer({ darkMode}) {
  const data = useContext(TimerDataContext);
  const [session, setSession] = useState(1);
  const [time, setTime] = useState(data[session - 1].time);


  const changeSession = () => {
    if (session === data.length) {
      setSession(1);
    }
    if (session < data.length) {
      setSession((prev) => prev + 1);
    } 
  };

  const restartSessions = () => {
    if (session === 1) {
      return;
    }
    setTime(data[session - 1].time)
  };

  const reduceTime = () => {
    setTime((prevTime) => prevTime - 1);
  };

  useEffect(() => {
    setTime(data[session - 1].time);
  }, [session, data]);
  return (
    <section
      className={darkMode !== true ? "timerContainer" : "timerContainer dark"}
    >
      <TimerProgressBar
        darkMode={darkMode}
        time={time}
        session={session}
        status={data[session - 1].status}
        sessionCount={data.length}
        changeSession={changeSession}
        restartSessions={restartSessions}
        timeInSeconds={data[session - 1].time}
        reduceTime={reduceTime}
      />
      <Footer darkMode={darkMode} />
    </section>
  );
}

export default Timer;

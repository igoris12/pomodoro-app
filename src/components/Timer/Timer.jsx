import React, { useState, useEffect, useContext } from "react";
import { TimerDataContext } from "../../App";
import "./Timer.scss";
import TimerProgressBar from "./TimerProgressBar";
import Footer from "../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
function Timer({ darkMode }) {
  const [data] = useContext(TimerDataContext);
  const [session, setSession] = useState(1);
  const [time, setTime] = useState(data.time[session - 1].time);

  const rounds = useSelector((state) => state.rounds);
  const workDuration = useSelector((state) => state.workDuration);

  const dispatch = useDispatch()


  const callNotification = () => {
    alert(
      `session ${Math.ceil(session / 2)} ${
        data.time[session - 1].status
      } ended.`
    );
  };

  const changeSession = () => {
    if (session === data.time.length) {
      setSession(1);
    }
    if (session < data.time.length) {
      setSession((prev) => prev + 1);
    }
  };

  const restartSessions = () => {
    setTime(data.time[session - 1].time);
  };

  const reduceTime = () => {
    setTime((prevTime) => prevTime - 1);
  };

  useEffect(() => {
    setTime(data.time[session - 1].time);
  }, [session, data]);
  return (
    <section
    className={darkMode !== true ? "timerContainer" : "timerContainer dark"}
    >
      <TimerProgressBar
        callNotification={callNotification}
        darkMode={darkMode}
        time={time}
        session={session}
        status={data.time[session - 1].status}
        sessionCount={data.time.length}
        changeSession={changeSession}
        restartSessions={restartSessions}
        timeInSeconds={data.time[session - 1].time}
        reduceTime={reduceTime}
        notification={data.settings.notification}
        autoplay={data.settings.autoplay}
        timeInTitle={data.settings.timeInTitle}
        audio={data.sound.audio}
      />

      
      <Footer darkMode={darkMode} />
    </section>
  );
}

export default Timer;

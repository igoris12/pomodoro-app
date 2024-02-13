import React, { useState, useEffect} from "react";
import "./Timer.scss";
import TimerProgressBar from "./TimerProgressBar";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
function Timer({ darkMode }) {
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

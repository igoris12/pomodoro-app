import React, { useState } from "react";
import "./Timer.scss";
import TimerProgressBar from "./TimerProgressBar";
import Footer from "../Footer/Footer";
function Timer({ darkMode }) {
  const [data, setData] = useState([
    { time: 3, status: "focus", session: 1 },
    { time: 5, status: "brack", session: 2 },
    // { time: 10, status: "focus", session: 3 },
    // { time: 5, status: "brack", session: 4 },
    // { time: 10, status: "brack", session: 5 },
  ]);
  const [session, setSession] = useState(1)

  const changeSession = ()=> {
    if (session < data.length) {
      setSession((prev)=> prev + 1);
    }
  }
  return (
    <section
      className={darkMode !== true ? "timerContainer" : "timerContainer dark"}
    >
      <TimerProgressBar
        darkMode={darkMode}
        time={data[session-1].time}
        session={session}
        status={data[session -1].status}
        sessionCount={data.length}
        changeSession={changeSession}
      />
      <Footer darkMode={darkMode} />
    </section>
  );
}

export default Timer;

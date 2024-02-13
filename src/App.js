import { useState, createContext, useRef } from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timer from "./components/Timer/Timer";
import Settings from "./components/Settings/Settings";
import audio from "../src/components/Timer/audio/audio";
import { useSelector } from "react-redux";

export const TimerDataContext = createContext();

function App() {
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
  const [mobileHeaderActive, setMobileHeaderActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const data = useSelector((state) => state.data);
  const timerData = formatData(data);

  const toggleMobileHeaderActive = () => {
    setMobileHeaderActive(!mobileHeaderActive);
  };
  const toggleDarckMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="App">
      <Router>
        <Header openNavigation={toggleMobileHeaderActive} darkMode={darkMode} />
        <Navigation
          active={mobileHeaderActive}
          closeNavigation={toggleMobileHeaderActive}
          toggleLightMode={toggleDarckMode}
          darkMode={darkMode}
        />
        <Routes>
          <Route path="/pomodoro-app" element={<Timer darkMode={darkMode} />} />
          <Route
            path="/pomodoro-app/settings"
            element={
              <Settings darkMode={darkMode} toggleLightMode={toggleDarckMode} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

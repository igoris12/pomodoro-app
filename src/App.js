import { useState, createContext } from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timer from "./components/Timer/Timer";
import Settings from "./components/Settings/Settings";

export const TimerDataContext = createContext();

function App() {
  const [mobileHeaderActive, setMobileHeaderActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [timerData, setTimerData] = useState({
    time: [
      { time: 5, status: "focus", session: 1 },
      { time: 5, status: "breack", session: 2 },
      { time: 5, status: "focus", session: 3 },
      { time: 5 * 60, status: "breack", session: 4 },
      { time: 25 * 60, status: "focus", session: 5 },
      { time: 5 * 60, status: "breack", session: 6 },
      { time: 25 * 60, status: "focus", session: 7 },
      { time: 20 * 60, status: "breack" },
    ],
    settings:{
      notification: true,
      autostart: false,
      timeInTitle: false
    }
  });
  const toggleMobileHeaderActive = () => {
    setMobileHeaderActive(!mobileHeaderActive);
  };
  const toggleDarckMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="App">
      <TimerDataContext.Provider value={[timerData, setTimerData]}>
        <Router>
          <Header
            openNavigation={toggleMobileHeaderActive}
            darkMode={darkMode}
          />
          <Navigation
            active={mobileHeaderActive}
            closeNavigation={toggleMobileHeaderActive}
            toggleLightMode={toggleDarckMode}
            darkMode={darkMode}
          />
          <Routes>
            <Route
              path="/pomodoro-app"
              element={<Timer darkMode={darkMode} />}
            />
            <Route
              path="/pomodoro-app/settings"
              element={
                <Settings
                  darkMode={darkMode}
                  toggleLightMode={toggleDarckMode}
                />
              }
            />
          </Routes>
        </Router>
      </TimerDataContext.Provider>
    </div>
  );
}

export default App;

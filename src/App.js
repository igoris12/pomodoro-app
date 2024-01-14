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
  const [timerData, setData] = useState([
    { time: 90, status: "focus 1", session: 1 },
    { time: 5, status: "brack", session: 2 },
    { time: 90, status: "focus 2", session: 3 },
    { time: 5, status: "brack", session: 2 },
    { time: 90, status: "focus 3", session: 1 },
    { time: 5, status: "brack", session: 2 },
    { time: 90, status: "focus 4", session: 1 },
    { time: 100, status: "big brake", session: 5 },
  ]);

  const toggleMobileHeaderActive = () => {
    setMobileHeaderActive(!mobileHeaderActive);
  };
  const toggleDarckMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className="App">
      <TimerDataContext.Provider value={timerData}>
      <Router>
        <Header openNavigation={toggleMobileHeaderActive} darkMode={darkMode} />
        <Navigation
          active={mobileHeaderActive}
          closeNavigation={toggleMobileHeaderActive}
          toggleLightMode={toggleDarckMode}
          darkMode={darkMode}
        />
        <Routes>
        <Route path="/pomodoro-app/timer" element={<Timer darkMode={darkMode}/>} />
        <Route path="/pomodoro-app/settings" element={<Settings darkMode={darkMode}/>} />
        </Routes>
      </Router>
      </TimerDataContext.Provider>
    </div>
  );
}

export default App;

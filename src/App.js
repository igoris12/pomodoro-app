import { useState } from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timer from "./components/Timer/Timer";
function App() {
  const [mobileHeaderActive, setMobileHeaderActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);


  const toggleMobileHeaderActive = () => {
    setMobileHeaderActive(!mobileHeaderActive);
  };
  const toggleDarckMode = () => {
    setDarkMode(!darkMode);
  }
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
        <Route path="/pomodoro-app/timer" element={<Timer darkMode={darkMode}/>} />
        <Route path="/pomodoro-app/settings" element={<main>settings</main>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

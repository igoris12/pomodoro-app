import { useState } from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mobileHeaderActive, setMobileHeaderActive] = useState(false);

  const toggleMobileHeaderActive = () => {
    setMobileHeaderActive(!mobileHeaderActive);
  };
  return (
    <div className="App">
      <Router>
        <Header openNavigation={toggleMobileHeaderActive} />
        <Navigation
          active={mobileHeaderActive}
          closeNavigation={toggleMobileHeaderActive}
        />
        <Routes>
        <Route path="/" element={<main>main</main>} />
        <Route path="/settings" element={<main>settings</main>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

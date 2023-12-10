import { useState } from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [mobileHeaderActive, setMobileHeaderActive] = useState(false);


  const toggleMobileHeaderActive = () => {
    setMobileHeaderActive(!mobileHeaderActive);
  };
  return (
    <div className="App">
      <Header openNavigation={toggleMobileHeaderActive} />
      <Navigation
        active={mobileHeaderActive}
        closeNavigation={toggleMobileHeaderActive}
      />
      <main>main</main>
    </div>
  );
}

export default App;

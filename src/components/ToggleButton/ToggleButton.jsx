import { useState, useEffect } from "react";
import "./ToggleButton.scss";

const ToggleButton = ({ text, clickFunction, def = false, darkMode }) => {
  useEffect(() => {setOn(def)}, [def]);
  const [on, setOn] = useState(def);
  const toggle = () => {
    setOn(!on);
  };

  return (
    <button
      type="checkbox"
      onClick={(e) => {
        e.preventDefault();
        toggle();
        clickFunction();
      }}
      className={!darkMode === true ? "toggleButton" : "toggleButton dark" }
    >
      {text}
      <div className={on !== true ? "button" : "button active"}>
        <span className="toggleButtonThumb"></span>
        <span className="track"></span>
      </div>
    </button>
  );
};

export default ToggleButton;

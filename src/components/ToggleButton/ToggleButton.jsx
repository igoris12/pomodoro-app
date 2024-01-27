import { useState, useEffect } from "react";
import "./ToggleButton.scss";

const ToggleButton = ({ text, clickFunction, def = false }) => {
  useEffect(() => {setOn(def)}, [def]);
  const [on, setOn] = useState(def);
  console.log(def);
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
      className={on !== true ? "toggleButton" : "toggleButton active"}
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

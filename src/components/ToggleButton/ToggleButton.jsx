import { useState } from "react";
import "./ToggleButton.scss";

const ToggleButton = ({ text, def }) => {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn(!on);
  };

  return (
    <button
      type="checkbox"
      onClick={(e) => {
        e.preventDefault();
        toggle();
      }}
      className={on ? "toggleButton" : "toggleButton active"}
    >
      {text}
      <div className={on ? "button" : "button active"}>
        <span className="toggleButtonThumb"></span>
        <span className="track"></span>
      </div>
    </button>
  );
};

export default ToggleButton;

import { useState } from "react";
import "./ToggleButton.scss";

const ToggleButton = () => {
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

     <span className="toggleButtonThumb"></span>
     <span className="track"></span>
    </button>
  );
};

export default ToggleButton;

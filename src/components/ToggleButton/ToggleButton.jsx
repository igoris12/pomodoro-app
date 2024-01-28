import { useState, useEffect } from "react";
import "./ToggleButton.scss";

const ToggleButton = ({ text, clickFunction, def = false, darkMode, name }) => {
  useEffect(() => {
    setOn(def);
  }, [def]);
  const [on, setOn] = useState(def);
  const toggle = () => {
    setOn(!on);
  };

  return (
    <>
      <label
        htmlFor={name}
        className={!darkMode === true ? "toggleButton" : "toggleButton dark"}
      >
        {text}
        <div className={on !== true ? "button" : "button active"}>
          <span className="toggleButtonThumb"></span>
          <span className="track"></span>
        </div>
        <input
          onChange={(e) => {
            toggle();
            clickFunction(e);
          }}
          name={name}
          id={name}
          type="checkbox"
          checked={on}
        />
      </label>
    </>
  );
};

export default ToggleButton;

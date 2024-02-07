import React, { useState, useRef  } from "react";
import "./CustomSelectInput.scss";
import audio from "../Timer/audio/audio.js";


function CustomSelectInput() {
  const audioRef = useRef(null);
  const options = [
    { name: "callToAttention", audio: audio.callToAttention, id: 0 },
    { name: "alarmClock", audio: audio.alarmClock, id: 1 },
    { name: "ringtone", audio:audio.ringtone, id: 2 },
  ];
  const [customSelectActive, setCustomSelectActive] = useState(false);
  const [selected, setSelected] = useState({
    name: options[0].name,
    audio: options[0].audio,
  });

 
  const toggleCustomSelectActive = () => {
    setCustomSelectActive(!customSelectActive);
  };


  return (
    <div
      className={customSelectActive ? "custom-select active" : "custom-select"}
    >
      
      <span className="name">Notificaiton sound</span>
      <button
        className="select-button"
        role="combobox"
        aria-labelledby="select button"
        aria-haspopup="listbox"
        aria-expanded={customSelectActive ? "true" : "fasle"}
        aria-controls="select-dropdown"
        onClick={(e) => {
          e.preventDefault();
          toggleCustomSelectActive();
        }}
      >
        <span className="selected-value">{selected.name}</span>
        <span className="arrow" ></span>
      </button>
      <ul className="select-dropdown" role="listbox">
      <audio src={selected.audio} ref={audioRef}  controls></audio>

        {options.map((item) => {
          return (
            <li
              onClick={(e) => {
                setSelected({ name: item.name, audio: item.audio });
                setCustomSelectActive(false);
                audioRef.current.play();
              }}
              key={item.id}
              role="option"
              aria-selected={selected.name === item.name ? true : false}
              className={selected.name === item.name ? "active" : ""}
            >
              <label>
                <input type="radio" name="soud" />
                {item.name}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CustomSelectInput;

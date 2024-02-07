import React, { useState } from "react";
import "./CustomSelectInput.scss";
import audio from "../Timer/audio/audio.js";


function CustomSelectInput() {
  const options = [
    { name: "callToAttention", audio: new Audio(audio.callToAttention), id: 0 },
    { name: "alarmClock", audio: new Audio(audio.alarmClock), id: 1 },
    { name: "ringtone", audio: new Audio(audio.ringtone), id: 2 },
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
        <span className="arrow" onClick={ selected.audio.pause()}></span>
      </button>
      <ul className="select-dropdown" role="listbox">
        {options.map((item) => {
          return (
            <li
              onClick={(e) => {
                // if(selected.audio.paused) {
                // console.log(selected.audio.paused);
                  
                //   selected.audio.pause();
                // }
                
                setSelected({ name: item.name, audio: item.audio });
                
                setCustomSelectActive(false);
                // selected.audio.play();
                // setAudioPlay(new Audio(selected.audio));
                // if (!audioPlay.paused) {
                //   audioPlay.pause();
                // }
                // new Audio(selected.audio).play();
                // audioPlay.play();
                // audioPlay.played
                // console.log(audioPlay.playing);
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

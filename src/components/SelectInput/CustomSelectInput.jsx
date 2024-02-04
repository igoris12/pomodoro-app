import React, { useState } from "react";
import "./CustomSelectInput.scss";
import audio from "../Timer/audio/audio.js";

// import './CustomSelectInput.js'

// optionsList.forEach((option) => {
//   function handler(e) {
//     // Click Events
//     if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
//       selectedValue.textContent = this.children[1].textContent;
//       customSelect.classList.remove("active");
//     }
//     // Key Events
//     if (e.key === "Enter") {
//       selectedValue.textContent = this.textContent;
//       customSelect.classList.remove("active");
//     }
//   }

//   option.addEventListener("keyup", handler);
//   option.addEventListener("click", handler);
// });
function CustomSelectInput() {
  const options = [
    { name: "callToAttention", audio: audio.callToAttention, id: 0 },
    { name: "alarmClock", audio: audio.alarmClock, id: 1 },
    { name: "ringtone", audio: audio.ringtone, id: 2  },

  ];
  const [customSelectActive, setCustomSelectActive] = useState(false);
  const [selected, setSelected] = useState(options[0].name);

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
        <span className="selected-value">{selected}</span>
        <span className="arrow"></span>
      </button>
      <ul className="select-dropdown" role="listbox">
        {options.map((item) => {
          return (
            <li
              onClick={(e) => {
                setSelected(item.name);
                setCustomSelectActive(false);
                const sound = new Audio(item.audio);
                sound.play();
              }}
              key={item.id}
              role="option"
              aria-selected
              className={selected === item.name ? "active" : ""}
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

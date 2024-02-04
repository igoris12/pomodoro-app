import React, { useState } from "react";
import "./CustomSelectInput.scss";
// import './CustomSelectInput.js'

// selectBtn.addEventListener("click", () => {
//   // add/remove active class on the container element
//   customSelect.classList.toggle("active");
//   // update the aria-expanded attribute based on the current state
//   selectBtn.setAttribute(
//     "aria-expanded",
//     selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
//   );
// });
function CustomSelectInput() {
  const [customSelectActive, setCustomSelectActive] = useState(false);
  const [selected, setSelected] = useState("soud1");

  const toggleCustomSelectActive = () => {
    setCustomSelectActive(!customSelectActive);
  };

  const options = [
    { name: "soud1", id: 0 },
    { name: "soud2", id: 1 },
  ];

  return (
    <div
      className={customSelectActive ? "custom-select active" : "custom-select"}
    >
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
      <ul className="select-dropdown" role="listbox" id="select-dropdown">
        {options.map((item) => {
          return (
            <li
              onClick={(e) => {
                setSelected(item.name);
              }}
              key={item.id}
              role="option"
              aria-selected
              className={selected === item.name ? "active" : ""}
            >
              <label>
                <input type="radio" name="soud" />
                <i className="bx bxl-github"></i>
                {item.name}
              </label>
            </li>
          );
        })}

        {/* <li role="option">
          <label htmlFor="github">
            <input type="radio" name="social-account" />
            <i className="bx bxl-github"></i>GitHub
          </label>
        </li>

        <li role="option">
          <label htmlFor="github">
            <input type="radio" name="social-account" />
            <i className="bx bxl-github"></i>GitHub
          </label>
        </li> */}
      </ul>
    </div>
  );
}

export default CustomSelectInput;

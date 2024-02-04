import React, {useState} from "react";
import './CustomSelectInput.scss';
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
  const [selected, setSelected] = useState(1)

  const toggleCustomSelectActive = ()=> {
    setCustomSelectActive(!customSelectActive);
  }

  return (
    <div className={customSelectActive ?  "custom-select active": 'custom-select'}>
     {/* <select></select> */}
      <button
        className="select-button"
        role="combobox"
        aria-labelledby="select button"
        aria-haspopup="listbox"
        aria-expanded={customSelectActive ? "true" : 'fasle'}
        aria-controls="select-dropdown"
        onClick={(e)=> {
          e.preventDefault();
          toggleCustomSelectActive();
        }}
      >
        <span className="selected-value">{selected}</span>
        <span className="arrow"></span>
      </button>
      <ul className="select-dropdown" role="listbox" id="select-dropdown">
        <li role="option" aria-selected={true} >
          <input type="radio" id="github" name="social-account" />
          <label htmlFor="github">
            <i className="bx bxl-github"></i>GitHub
          </label>
        </li>
        <li role="option" aria-selected={false} >
          <input type="radio" id="github" name="social-account" />
          <label htmlFor="github">
            <i className="bx bxl-github"></i>GitHub
          </label>
        </li> <li role="option"  >
          <label htmlFor="github">
          <input type="radio"  id="github" name="social-account" />
            <i className="bx bxl-github"></i>GitHub
          </label>
        </li> <li role="option" aria-selected={false} >
          <label htmlFor="github">
          <input type="radio" id="github" name="social-account" />
            <i className="bx bxl-github"></i>GitHub
          </label>
        </li> <li role="option" aria-selected={false} >
          <label htmlFor="github">
          <input type="radio" id="github" name="social-account" />
            <i className="bx bxl-github"></i>GitHub
          </label>
        </li> <li role="option" aria-selected={false} >
          <label htmlFor="github">
          <input type="radio" id="github" name="social-account" />
            <i className="bx bxl-github"></i>GitHub
          </label>
        </li> <li role="option" aria-selected={false} >
          <label htmlFor="github">
          <input type="radio" id="github" name="social-account" />
            <i className="bx bxl-github"></i>GitHub
          </label>
        </li>
      </ul>
    </div>
  );
}

export default CustomSelectInput;

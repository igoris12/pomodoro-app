import React, {useState} from "react";
import './CustomSelectInput.css';
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

  const toggleCustomSelectActive = ()=> {
    setCustomSelectActive(!customSelectActive);
  }

  return (
    <div className="custom-select">
      <button
        className={customSelectActive ? "select-button active" :  "select-button"}
        role="combobox"
        aria-labelledby="select button"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls="select-dropdown"
        onClick={(e)=> {
          e.preventDefault();
          toggleCustomSelectActive();
        }}
      >
        <span className="selected-value">Open this select menu</span>
        <span className="arrow"></span>
      </button>
      <ul className="select-dropdown" role="listbox" id="select-dropdown">
        <li role="option">
          <input type="radio" id="github" name="social-account" />
          <label htmlFor="github">
            <i className="bx bxl-github"></i>GitHub
          </label>
        </li>
        <li role="option">
          <input type="radio" id="instagram" name="social-account" />
          <label htmlFor="instagram">
            <i className="bx bxl-instagram"></i>Instagram
          </label>
        </li>
        <li role="option">
          <input type="radio" id="facebook" name="social-account" />
          <label htmlFor="facebook">
            <i className="bx bxl-facebook-circle"></i>Facebook
          </label>
        </li>
        <li role="option">
          <input type="radio" id="linkedIn" name="social-account" />
          <label htmlFor="linkedIn">
            <i className="bx bxl-linkedin-square"></i>LinkedIn
          </label>
        </li>
        <li role="option">
          <input type="radio" id="twitter" name="social-account" />
          <label htmlFor="twitter">
            <i className="bx bxl-twitter"></i>Twitter
          </label>
        </li>
        <li role="option">
          <input type="radio" id="reddit" name="social-account" />
          <label htmlFor="reddit">
            <i className="bx bxl-reddit"></i>Reddit
          </label>
        </li>
      </ul>
    </div>
  );
}

export default CustomSelectInput;

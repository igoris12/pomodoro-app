import React from "react";
import './SelectInput.scss';

function SelectInput() {
  return (
    <>
      <label htmlFor="sounds" className="selectInput">
        <span>Notificaiton sound</span>
        <select name="sounds">
          <option value="volvo">Volvo</option>
          <option value="saab" selected>Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </label>
    </>
  );
}

export default SelectInput;
import React from "react";
import './RangeInput.scss';
function RangeInput({value, max, min, name, text, defValue}) {
  return (
    <div className="rangeInput">
      <label htmlFor={name}>{text}</label>
      <input type="range"  name={name} min={min} max={max}  value={value}/>
    </div>
  );
}

export default RangeInput;

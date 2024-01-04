import React from "react";
import './RangeInput.scss';
function RangeInput({value, max, min, name, text, defValue, change}) {
  return (
    <div className="rangeInput">
      <label htmlFor={name}>{text}</label>
      <samp className="value">{value}</samp>
      <input type="range"  name={name} min={min} max={max}  value={value} onChange={change}/>
    </div>
  );
}

export default RangeInput;

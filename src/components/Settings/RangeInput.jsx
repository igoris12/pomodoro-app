import React from "react";
import "./RangeInput.scss";
function RangeInput({ value, max, min, name, text, defValue, change }) {
  return (
    <div className="rangeInput">
      <label htmlFor={name}>{text}</label>
      <span
        className="value"
        style={{ left:  value  / max  * 100 - min  / max  * 100 + '%' }}
      
      >
        {value}
      </span>
      <input
        type="range"
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={change}
      />
      {/* <span className="min">{min}</span>
      <span className="max">{max}</span> */}
    </div>
  );
}

export default RangeInput;

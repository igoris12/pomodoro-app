import React from "react";
import "./RangeInput.scss";
function RangeInput({ value, max, min, name, text, defValue, change }) {
  const a = (value / min) * 100 / ( max - min);
  return (
    <div className="rangeInput">
      <label htmlFor={name}>{text}</label>
      <span
        className="value"
        style={{ left: (value / max) * 100 - (min / max) * 100   + "%" }}
        // style={{ left:  value  / max  * 100  + '%' }}
      >
        {value}
      </span>
      <input
        type="range"
        name={name}
        min={min}
        max={max}
        value={value}
        onInput={change}
      />
      {/* ((val - min) * 100) / (max - min) */}
      {/* `calc(${newVal}% + (${8 - newVal * 0.15}px))`; */}
      <div
        className="costomeElements"
        style={{ left: `calc(${a}% + (${8 - a * 0.15}px))`}}
      >
        <span className="sliderThumb"></span>
      </div>
      <span
        className="progressbar"
        style={{ width: (value / max) * 100 - (min / max) * 100 + "%" }}
      ></span>

      {/* <span className="min">{min}</span>
      <span className="max">{max}</span> */}
    </div>
  );
}

export default RangeInput;

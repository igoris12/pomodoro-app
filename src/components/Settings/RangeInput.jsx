import React from "react";
import "./RangeInput.scss";
function RangeInput({
  value = 50,
  max = 100,
  min = 0,
  name,
  text,
  defValue,
  change,
}) {

  return (
    <div className="rangeInput">
      <label htmlFor={name}>{text}</label>
      <span
        className="value"
        style={{
          left: `calc(${Number(((value - min) * 100) / (max - min))}% + (${
            8 - Number(((value - min) * 100) / (max - min)) * 0.15
          }px))`,
        }}
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
      <div
        className="costomeElements"
        style={{
          left: `calc(${Number(((value - min) * 100) / (max - min))}% + (${
            8 - Number(((value - min) * 100) / (max - min)) * 0.15
          }px))`,
        }}
      >
        <span className="sliderThumb"></span>
      </div>
      <span
        className="progressbar"
        style={{
          width: `calc(${Number(((value - min) * 100) / (max - min))}% + (${
            8 - Number(((value - min) * 100) / (max - min)) * 0.15
          }px))`,
        }}
      ></span>
      {/* <span className="min">{min}</span>
      <span className="max">{max}</span> */}
    </div>
  );
}

export default RangeInput;

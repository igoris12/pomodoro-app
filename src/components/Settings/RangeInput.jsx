import React, { useState, useEffect } from "react";
import "./RangeInput.scss";
function RangeInput({
  value = 1,
  max = 100,
  min = 0,
  name,
  text,
  defValue,
  change,
}) {
  ///this number variable is for slider Thumb layout be in best position
  const [number, setNumber] = useState(7.5);
  useEffect(() => {
    if (Math.floor((max - min) / 2 > value)) {
      setNumber(6);
    }
    if (Math.floor((max - min) / 2 < value)) {
      setNumber(9);
    }
    if (
      Math.floor((max - min) / 2.5 < value) &&
      Math.floor((max - min) / 1.8 > value)
    ) {
      setNumber(7.5);
    }
  }, [value, max, min]);
  return (
    <div className="rangeInput">
      <label htmlFor={name}>{text}</label>

      <input
        type="range"
        name={name}
        min={min}
        max={max}
        value={value}
        onInput={change}
      />
      <span
        className="value"
        style={{
          left: `calc(${Number(((value - min) * 100) / (max - min))}% + (${
            number - Number(((value - min) * 100) / (max - min)) * 0.15
          }px))`,
        }}
      >
        {value}
      </span>
      <span
        className={value >= defValue ? "marker light" : "marker"}
        style={{
          left: `calc(${Number(((defValue - min) * 100) / (max - min))}% + (${
            7 - Number(((defValue - min) * 100) / (max - min)) * 0.15
          }px))`,
        }}
      >
        <span className="min">{defValue} min</span>
      </span>

      <span
        className={value >= min ? "marker light" : "marker"}
        style={{
          left: '1px',
        }}
      >
        <span className="min">{min} min</span>
      </span>
      <span
        className={value >= max ? "marker light" : "marker"}
        style={{
          right: '1px',
        }}
      >
        <span className="max">{max} min</span>
      </span>
      <div
        className="costomeElements"
        style={{
          left: `calc(${Number(((value - min) * 100) / (max - min))}% + (${
            number - Number(((value - min) * 100) / (max - min)) * 0.15
          }px))`,
        }}
      >
        <span className="sliderThumb"></span>
      </div>
      <span
        className="progressbar"
        style={{
          width: `calc(${Number(((value - min) * 100) / (max - min))}% + (${
            number - Number(((value - min) * 100) / (max - min)) * 0.15
          }px))`,
        }}
      ></span>
      {/* <span className="min">{min} min</span>
      <span className="max">{max} min</span> */}
    </div>
  );
}

export default RangeInput;
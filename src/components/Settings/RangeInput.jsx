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
  darkMode,
  subText= ''
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

  const percentCounterForPosition = (value, min, max, number) => {
    const percent = Number(((value - min) * 100) / (max - min));
    const pixels = number - Number(((value - min) * 100) / (max - min)) * 0.15;
    return `calc(${percent}% + (${pixels}px))`;
  };
  
  return (
    <div className={darkMode !== true ? "rangeInput" : "rangeInput dark"}>
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
          left: percentCounterForPosition(value, min, max, number),
        }}
      >
        {value}
      </span>
      <span
        className={value >= defValue ? "marker light" : "marker"}
        style={{
          left: percentCounterForPosition(defValue, min, max, 7.5),
        }}
      >
        <span className="min">{defValue} {subText}</span>
      </span>

      <span
        className={value >= min ? "marker light" : "marker"}
        style={{
          left: "1px",
        }}
      >
        <span className="min">{min} {subText}</span>
      </span>
      <span
        className={value >= max ? "marker light" : "marker"}
        style={{
          right: "1px",
        }}
      >
        <span className="max">{max} {subText}</span>
      </span>
      <div
        className="costomeElements"
        style={{
          left: percentCounterForPosition(value, min, max, number),
        }}
      >
        <span className="sliderThumb"></span>
      </div>
      <span
        className="progressbar"
        style={{
          width: percentCounterForPosition(value, min, max, number),
        }}
      ></span>
    </div>
  );
}

export default RangeInput;

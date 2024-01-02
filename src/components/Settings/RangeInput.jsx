import React from "react";
import './RangeInput.scss';
function RangeInput({value, max, min, name, text}) {
  return (
    <div className="rangeInput">
      <input type="range" id="volume" name="volume" min="0" max="11"  value="10"/>
      <label for="volume">Volume</label>
    </div>
  );
}

export default RangeInput;

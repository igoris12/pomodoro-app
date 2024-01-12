import React, { useState } from "react";
import "./Settings.scss";
import Footer from "../Footer/Footer";
import RangeInput from "./RangeInput";

const Settings = ({ darkMode }) => {
  const [data, setData] = useState({
    workDuration: 25,
    breakDuration: 5,
    rounds: 4,
    longBreakDuration: 20,
  });

  const changeWorkDuration = (e) => {
    setData({ ...data, workDuration: e.target.value });
  };
  const changeBreakDuration = (e) => {
    setData({ ...data, breakDuration: e.target.value });
  };
  const changeRounds = (e) => {
    setData({ ...data, rounds: e.target.value });
  };
  const changeLongBreakDuration = (e) => {
    setData({ ...data, longBreakDuration: e.target.value });
  };
  return (
    <section className={darkMode !== true ? "settings" : "settings dark"}>
      <form>
        <RangeInput
          text={"Work duration"}
          min={5}
          max={60}
          defValue={25}
          value={data.workDuration}
          change={changeWorkDuration}
          darkMode={darkMode}
        />
        <RangeInput
          text={"Short break duration"}
          min={1}
          max={30}
          defValue={5}
          value={data.breakDuration}
          change={changeBreakDuration}
          darkMode={darkMode}

        />
        <RangeInput
          text={"Long break duration"}
          min={1}
          max={45}
          defValue={20}
          value={data.longBreakDuration}
          change={changeLongBreakDuration}
          darkMode={darkMode}

        />
        <RangeInput
          text={"Rounds"}
          min={2}
          max={15}
          defValue={4}
          value={data.rounds}
          change={changeRounds}
          darkMode={darkMode}

        />
      </form>
      <Footer darkMode={darkMode} />
    </section>
  );
};

export default Settings;

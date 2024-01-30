import React, { useState, useContext, useEffect } from "react";
import { TimerDataContext } from "../../App";
import "./Settings.scss";
import Footer from "../Footer/Footer";
import RangeInput from "./RangeInput";
import ToggleButton from "../ToggleButton/ToggleButton";

const Settings = ({ darkMode, toggleLightMode }) => {
  const [data, setData] = useState({
    workDuration: 25,
    breakDuration: 5,
    rounds: 4,
    longBreakDuration: 20,
    notification: true,
    autoplay: false
  });
  console.log(data.autoplay);

  const [timerData, setTimerData] = useContext(TimerDataContext);

  useEffect(() => {
    const dataArray = [];

    for (let i = 0; i < data.rounds; i++) {
      dataArray.push({
        time: data.workDuration * 60,
        status: "focus" + i,
        session: i,
      });
      dataArray.push({
        time: data.breakDuration * 60,
        status: "brack" + i,
        session: i,
      });
    }
    dataArray.push({ time: data.longBreakDuration * 60, status: "long brake" });
    setTimerData({ ...timerData, time: dataArray,settings: {...timerData.settings, notification: data.notification} });
  }, [data, setTimerData]);

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

  const switchNotification = (e) => {
    setData({ ...data, notification: e.target.checked });
  };

  const switchAutoplay = (e)=> {
    setData({ ...data, autoplay: e.target.checked });
  }
  return (
    <section className={darkMode !== true ? "settings" : "settings dark"}>
      <form>
        <RangeInput
          text={"Work duration"}
          min={0.05}
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
        <div
          className={darkMode !== true ? "buttonsGroup" : "buttonsGroup dark"}
        >
          <ToggleButton
            text={"Timer in title"}
            name={"title"}
            darkMode={darkMode}
            clickFunction={() => {}}
          />
          <ToggleButton
            text={"Notifications"}
            name={"notifications"}
            darkMode={darkMode}
            def={data.notification}
            clickFunction={switchNotification}
          />
          <ToggleButton
            text={"Autostart"}
            name={"autostart"}
            darkMode={darkMode}
            def={data.autoplay}
            clickFunction={switchAutoplay}
          />
          <ToggleButton
            text={"Dark mode"}
            name={"darkMode"}
            darkMode={darkMode}
            clickFunction={toggleLightMode}
            def={darkMode}
          />
        </div>
      </form>
      <Footer darkMode={darkMode} />
    </section>
  );
};

export default Settings;

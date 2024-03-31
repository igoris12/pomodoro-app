import React from "react";
import "./Settings.scss";
import Footer from "../Footer/Footer";
import RangeInput from "./RangeInput";
import ToggleButton from "../ToggleButton/ToggleButton";
import CustomSelectInput from "../SelectInput/CustomSelectInput.jsx";
import { useDispatch, useSelector } from "react-redux";

const Settings = ({ darkMode, toggleLightMode }) => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const changeRounds = (e) => {
    dispatch({ type: "CHANGE_RAUNDS", deploy: e.target.value });
  };

  const changeWorkDuration = (e) => {
    dispatch({ type: "CHANGE_WORK_DURATION", deploy: e.target.value });
  };
  const changeBreakDuration = (e) => {
    dispatch({ type: "CHANGE_BREAK_DURATION", deploy: e.target.value });
  };

  const changeLongBreakDuration = (e) => {
    dispatch({ type: "CHANGE_LONG_BREAK_DURATION", deploy: e.target.value });
  };

  const switchNotification = (e) => {
    dispatch({ type: "SWITCH_NOTIFICATION", deploy: e.target.checked });
  };

  const switchAutoplay = (e) => {
    dispatch({ type: "SWITCH_AUTOPLAY", deploy: e.target.checked });
  };

  const switchTimeInTitle = (e) => {
    dispatch({ type: "SWITCH_TIME_IN_TITLE", deploy: e.target.checked });
  };

  const changeSound = (newSound) => {
    dispatch({ type: "CHAGE_SOUND", deploy: newSound });
  };
  return (
    <section className={darkMode !== true ? "settings" : "settings dark"}>
      <form>
        <RangeInput
          text={"Work duration"}
          min={0.1}
          max={60}
          defValue={25}
          value={data.workDuration}
          change={changeWorkDuration}
          darkMode={darkMode}
        />

        <RangeInput
          text={"Short break duration"}
          min={0.1}
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
        <CustomSelectInput clickFunction={changeSound} darkMode={darkMode} />
        <div
          className={darkMode !== true ? "buttonsGroup" : "buttonsGroup dark"}
        >
          <ToggleButton
            text={"Timer in title"}
            name={"title"}
            darkMode={darkMode}
            def={data.timeInTitle}
            clickFunction={switchTimeInTitle}
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

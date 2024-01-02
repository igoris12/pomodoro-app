import React from "react";
import "./Settings.scss";
import Footer from "../Footer/Footer";
import RangeInput from "./RangeInput";

const Settings = ({ darkMode }) => {
  return (
    <section className={darkMode !== true ? "settings" : "settings dark"}>
      <form>
        <RangeInput text={"Work duration"} min={5} max={60} defValue={25} />
        <RangeInput
          text={"Short break duration"}
          min={1}
          max={30}
          defValue={5}
        />
        <RangeInput
          text={"Long break duration"}
          min={1}
          max={45}
          defValue={20}
        />
        <RangeInput text={"Rounds"} min={2} max={15} defValue={4} />
      </form>
      <Footer darkMode={darkMode} />
    </section>
  );
};

export default Settings;

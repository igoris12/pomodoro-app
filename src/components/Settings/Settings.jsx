import React from "react";
import "./Settings.scss";
import Footer from "../Footer/Footer";
import RangeInput from "./RangeInput";

const Settings = ({ darkMode }) => {
  return (
    <section className={darkMode !== true ? "settings" : "settings dark"}>
      <form>
        <RangeInput />
        <RangeInput />
        <RangeInput />
        <RangeInput />
      </form>
      <Footer darkMode={darkMode} />
    </section>
  );
};

export default Settings;

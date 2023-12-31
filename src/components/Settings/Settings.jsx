import React from "react";
import "./Settings.scss";
import Footer from '../Footer/Footer';

const Settings = ({ darkMode }) => {
  return <section className={darkMode !== true ? "settings" : "settings dark"}>Settings 1
  <Footer darkMode={darkMode}/></section>;
};

export default Settings;

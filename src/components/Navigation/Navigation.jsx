import React from "react";
import "./Navigation.scss";
import NavigationLink from "./NavigationLink";
import { IoMdClose } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { CiLight } from "react-icons/ci";
function Navigation({ active, closeNavigation }) {
  return (
    <div className={active === true ? "navigation" : "navigation hidden"}>
      <nav>
        <button className="close" onClick={closeNavigation}>
          <IoMdClose />
        </button>
        <div className="logo">logo</div>
        <div className="links">
          <div className="navigationLinks">
            <NavigationLink icon={<LuAlarmClock />} text={"Timer"} />
            <NavigationLink icon={<FiSettings />} text={"Setting"} />
          </div>
          <div>
            <NavigationLink icon={<CiLight />} text={"Light mone"} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

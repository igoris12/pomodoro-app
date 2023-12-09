import React from "react";
import './Navigation.scss';
import NavigationLink from "./NavigationLink";
import { IoMdClose } from "react-icons/io";
function Navigation({active, closeNavigation}) {
  return (
    <div className={active === true ? "navigation" : "navigation hidden"}>
      <nav>
        <button className="close" onClick={closeNavigation}><IoMdClose /></button>
        <div className="logo">logo</div>
        <div className="links">
          <div className="navigationLinks">
            <NavigationLink/>
            <NavigationLink/>
          </div>
          <div>
            <NavigationLink/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

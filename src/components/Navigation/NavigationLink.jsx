import React from "react";
import "./NavigationLink.scss";
import { NavLink  } from "react-router-dom";

function NavigationLink({ icon, text, to, darkMode = false}) {
  return (
    <NavLink
      to={to}
      className={
        !true === darkMode
          ? `navigationLink }`
          : `navigationLink dark }`
      }
      // className={({ isActive, isPending }) =>
      // isPending ? `pending navigationLink ${!true === darkMode ? '':'dark'}` : isActive ? "active navigationLink" : "navigationLink"
      // }
    >
      {icon} {text}
    </NavLink>
  );
}

export default NavigationLink;

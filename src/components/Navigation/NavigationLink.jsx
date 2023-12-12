import React from "react";
import "./NavigationLink.scss";
import { NavLink, Link } from "react-router-dom";

function NavigationLink({ icon, text, to = "", darkMode = false }) {
  return "" !== to ? (
    <NavLink
      to={to}
      className={
        !true === darkMode ? `navigationLink ` : `navigationLink dark`
      }
    >
      {icon} {text}
    </NavLink>
  ) : (
    <Link
      className={
        !true === darkMode ? `navigationLink ` : `navigationLink dark `
      }
    >
      {icon} {text}
    </Link>
  );
}

export default NavigationLink;

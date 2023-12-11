import React from "react";
import "./NavigationLink.scss";
import { Link } from "react-router-dom";

function NavigationLink({ icon, text, to, darkMode = false, def = false }) {
  return (
    <Link
      to={to}
      className={
        !true === darkMode
          ? `navigationLink ${true === def ? "active" : ""}`
          : `navigationLink dark ${true === def ? 'active': ''}`
      }
    >
      {icon} {text}
    </Link>
  );
}

export default NavigationLink;

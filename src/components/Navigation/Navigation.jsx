import React from "react";
import './Navigation.scss';
function Navigation({active, closeNavigation}) {
  return (
    <div className={active === true ? "navigation" : "navigation hidden"}>
      <nav>
        <button className="close" onClick={closeNavigation}>x</button>
        <div className="logo">logo</div>
        <div className="links">
          <div>
            <a href="$">1</a>
            <a href="$">2</a>
          </div>
          <div>
            <a href="$">3</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

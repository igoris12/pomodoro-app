import React from "react";
import './Navigation.scss';
function Navigation() {
  return (
    <div className="navigation">
      <nav>
        <button className="close">x</button>
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

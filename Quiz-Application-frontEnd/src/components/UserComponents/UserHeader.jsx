import React from "react";
import { NavLink } from "react-router-dom";

function UserHeader() {
  return (
    <div>
      <nav>
        <h1>Brainit</h1>
        <div className="options">
          <NavLink to=".">Quiz</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default UserHeader;

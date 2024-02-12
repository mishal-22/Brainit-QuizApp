import React from "react";
import { NavLink } from "react-router-dom";

function AdminHeader() {
  return (
    <div>
      <nav>
        <h1>Brainit</h1>
        <div className="options">
          <NavLink to="questions">Questions</NavLink>
          <NavLink to="quiz">Quiz</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default AdminHeader;

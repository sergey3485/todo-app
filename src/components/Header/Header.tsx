import React from "react";
import "./header.css";

import {
  getCurrentDay,
  getNumberDay,
  getCurrentMonth,
} from "../../utilits/date";

export function Header() {
  return (
    <div className="header-container">
      <div className="day-all-todo-container">
        <div className="day-number">
          <strong>{getCurrentDay()},</strong>
          {getNumberDay()}
        </div>
        <div className="all-todo">12 tasks</div>
      </div>
      <div className="month-remain-container">
        <div className="month">{getCurrentMonth()}</div>
        <div className="remain-todo">4 remain</div>
      </div>
    </div>
  );
}

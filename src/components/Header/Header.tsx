import React from "react";
import "./header.css";

import {
  getCurrentDay,
  getNumberDay,
  getCurrentMonth,
} from "../../utilits/date";

export interface HeaderProps {
  counter: number;
  remainCounter: number;
}
export function Header(props: HeaderProps) {
  const { counter, remainCounter } = props;
  return (
    <div className="header-container">
      <div className="day-all-todo-container">
        <div className="day-number">
          <strong>{getCurrentDay()},</strong>
          {getNumberDay()}
        </div>
        <div className="all-todo">{counter} tasks</div>
      </div>
      <div className="month-remain-container">
        <div className="month">{getCurrentMonth()}</div>
        <div className="remain-todo">{remainCounter} remain</div>
      </div>
    </div>
  );
}

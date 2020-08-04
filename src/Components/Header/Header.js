import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="head_container  p-0 m-0">
        <div className="header p-0 m-0">
            <h1 className="text-center text-danger">Прогноз погоды на 5 дней</h1>
            <h2 className="text-center">Kharkiv</h2>
        </div>
      </div>
    );
  }
}

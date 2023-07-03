import React from "react";
import "../styles/Navbar.css";
import {
  leftArrow,
  shareIcon,
  searchIcon,
  detailsIcon,
  timelineIcon,
} from "../Constant/constant";

export const Navbar = () => {
  return (
    <div className="header">
      <div className="tabs-label-main-div" style={{ width: "295px" }}>
        {leftArrow()}
        <span className="tabs-top-label-one" style={{color:"rgb(251, 49, 87)"}}>DELETE</span>
        <span className="tabs-top-label-second">/purchase-order</span>
      </div>
      <div class="searchbar">
        <div className="icon">{searchIcon()}</div>
        <input type="text" placeholder="Search in trace" />
      </div>
      <div class="logsbutton">
        <span class="logtext">No logs found</span>
      </div>
      <button
        title="Details"
        class="details-btn"
        style={{ marginRight: "10px" }}
      >
        {detailsIcon()}
      </button>
      <button
        title="Timeline"
        class="details-btn"
        style={{ marginRight: "10px" }}
      >
        {timelineIcon()}
      </button>
      <button class="details-btn">{shareIcon()}</button>
    </div>
  );
};

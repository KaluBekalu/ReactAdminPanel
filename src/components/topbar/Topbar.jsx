import React from "react";
import "./Topbar.css";
import {
  NotificationsNone,
  Language,
  SettingsApplications,
  MenuOutlined,
} from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">KalBekalu</span>
        </div>
        <div className="toprightMenuBtn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
            <NotificationsNone classname="topbarIcon" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language classname="topbarIcon" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsApplications classname="topbarIcon" />
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/45060771?v=4"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
}

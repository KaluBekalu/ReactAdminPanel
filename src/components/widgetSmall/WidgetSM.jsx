import React from "react";
import "./WidgetSM.css";

import { Visibility } from "@material-ui/icons";

const WidgetSM = () => {
  return (
    <div className="widgetSm">
      <h3 className="widgetSmTitle">New Joined Members</h3>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://avatars.githubusercontent.com/u/45060771?v=4"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetsmUserName">Kalu Bekalu </span>
            <span className="widgetsmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetsmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://avatars.githubusercontent.com/u/45060771?v=4"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetsmUserName">Kalu Bekalu </span>
            <span className="widgetsmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetsmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://avatars.githubusercontent.com/u/45060771?v=4"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetsmUserName">Kalu Bekalu </span>
            <span className="widgetsmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetsmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://avatars.githubusercontent.com/u/45060771?v=4"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetsmUserName">Kalu Bekalu </span>
            <span className="widgetsmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetsmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSM;

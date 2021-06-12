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
            src="https://images.pexels.com/photos/1772475/pexels-photo-1772475.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
            src="https://images.pexels.com/photos/1772475/pexels-photo-1772475.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
            src="https://images.pexels.com/photos/1772475/pexels-photo-1772475.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
            src="https://images.pexels.com/photos/1772475/pexels-photo-1772475.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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

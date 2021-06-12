import React from "react";
import "./sidebar.css";

import {
  AttachMoney,
  BarChart,
  FeedbackOutlined,
  LineStyle,
  MailOutline,
  MessageOutlined,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarAvatar">
          <img
            className="sidebarAvatarImg"
            src="https://avatars.githubusercontent.com/u/45060771?v=4"
            alt=""
          />
          <h3 className="sidebarAvatarName">Kalkidan Bekalu</h3>
        </div>
        <hr className="brakeLine"></hr>
        <div className="sidebarMenu">
          <h3 className="sidebarTitile">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" /> Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitile">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" /> User
            </li>
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" /> Products
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transaction
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitile">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" /> Mail
            </li>
            <li className="sidebarListItem">
              <FeedbackOutlined className="sidebarIcon" /> Feedback
            </li>
            <li className="sidebarListItem">
              <MessageOutlined className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitile">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" /> Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

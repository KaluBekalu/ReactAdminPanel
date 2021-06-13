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

import { Link } from "react-router-dom";

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
            <Link to="/">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" /> Home
              </li>
            </Link>
            <Link to="">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" /> Analytics
              </li>
            </Link>
            <Link to="">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitile">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" /> Users
              </li>
            </Link>
            <Link to="">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" /> Products
              </li>
            </Link>
            <Link to="">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Transaction
              </li>
            </Link>
            <Link to="">
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitile">Notifications</h3>
          <ul className="sidebarList">
            <Link to="">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" /> Mail
              </li>
            </Link>
            <Link to="">
              <li className="sidebarListItem">
                <FeedbackOutlined className="sidebarIcon" /> Feedback
              </li>
            </Link>
            <Link to="">
              <li className="sidebarListItem">
                <MessageOutlined className="sidebarIcon" />
                Sales
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitile">Staff</h3>
          <ul className="sidebarList">
            <Link to="">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" /> Manage
              </li>
            </Link>
            <Link to="">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" /> Analytics
              </li>
            </Link>
            <Link to="">
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

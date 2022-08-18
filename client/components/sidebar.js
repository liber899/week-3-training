import React from "react";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import styles from "../styles/Sidebar.module.css";
import DevicesIcon from "@mui/icons-material/Devices";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InputIcon from "@mui/icons-material/Input";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function Sidebar(props) {
  const handleClick = () => {
    props.onClick();
  };

  const router = useRouter();

  return (
    <aside>
      <div className={` ${props.mobileState ? "sidebar_mobile" : "sidebar"}`}>
        <div className={styles.sidebar__dashboardName}>
          <DevicesIcon />
          <span className={styles.dashboard_title}>Divice Manager</span>
        </div>
        <div className={styles.profile_container}>
          <div className={styles.mobile_profile}>
            <div className={styles.profile_id}>
              <AccountCircleIcon sx={{ fontSize: 40 }} />
              <span className={styles.user_name}>Welcome John</span>
            </div>
            <div
              onClick={handleClick}
              className={`${
                props.mobileState ? "close_menu_mobile" : "close_menu"
              }`}
            >
              <ArrowBackIosNewIcon />
            </div>
          </div>
        </div>
        <div>
          <a
            href="./dashboard"
            className={`${router.pathname === "/dashboard" ? "active" : ""} ${
              styles.link_name
            }`}
          >
            <DashboardIcon />
            <span className={styles.page_name}>Dashboard</span>
          </a>
        </div>
        <div>
          <a
            href="../logs"
            className={`${router.pathname === "/logs" ? "active" : ""} ${
              styles.link_name
            }`}
          >
            <InputIcon />
            <span className={styles.page_name}>Logs</span>
          </a>
        </div>
        <div>
          <a
            href="'#"
            className={`${router.pathname === "/settings" ? "active" : ""} ${
              styles.link_name
            }`}
          >
            <SettingsIcon />
            <span className={styles.page_name}>Settings</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

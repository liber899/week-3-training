import React from "react";
import styles from "../styles/Header.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header(props) {
  const handleClick = () => {
    props.onClick();
  };

  return (
    <nav className={styles.navbar}>
      <button onClick={handleClick} className="menu_button">
        <MenuIcon />
      </button>
      <div className={styles.desktop_view}>
        <AccountCircleIcon />
        <span className={styles.user_name}>Welcome John</span>
      </div>
    </nav>
  );
}

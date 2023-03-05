import React from "react";
import styles from "./Header.module.css";
import reactFeedLogo from "../assets/react-feed-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={reactFeedLogo} alt="React feed logo" />
      <h1>React feed</h1>
    </header>
  );
}

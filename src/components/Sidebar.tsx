import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import React from "react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
        alt="notebook with a vs code open"
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/61950209?v=4" />
        <strong>Viviane Queiroz</strong>
        <span>Front-end Software Developer</span>
      </div>

      <footer>
        <button>
          Edit profile <PencilLine size={20} />
        </button>
      </footer>
    </aside>
  );
}

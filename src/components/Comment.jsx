import styles from "./Comment.module.css";
import { HandsClapping, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import React, { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/61950209?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Sofia Pyon</strong>
              <time
                title="05 de Marços às 08h15"
                dateTime="2023-03-05 08:15:45"
              >
                Published about 1h ago
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <HandsClapping size={20} /> Clap <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

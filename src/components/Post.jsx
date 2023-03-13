import { format, formatDistanceToNow } from "date-fns";
import React, { useState } from "react";
import ptBR from "date-fns/locale/pt-BR";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, content, id }) {
  const [comments, setComments] = useState(["Great post!"]);

  const publishDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, comments.length++]);
  }

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateRelativeToNow}
          dateTime={publishedAt.toISOString()}
        >
          {publishDateFormatted}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return (
              <div key={id}>
                <p>{line.content}</p>
              </div>
            );
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave a comment</strong>
        <textarea placeholder="Leave a comment"></textarea>
        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}

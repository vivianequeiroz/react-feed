import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/61950209?v=4" />
          <div className={styles.authorInfo}>
            <strong>Viviane Queiroz</strong>
            <span>Front-end Software Developer</span>
          </div>
        </div>

        <time title="05 de Marços às 08h15" dateTime="2023-03-05 08:15:45">
          Published 52m ago
        </time>
      </header>

      <div className={styles.content}>
        <p>Hello everyone!👋</p>

        <p>
          I just uploaded another project to my portfolio. It's a project I did
          at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀
        </p>

        <p>
          👉 <a href="#"> jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#newproject</a> {""}
          <a href="#">#nlw</a> {""}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave a comment</strong>
        <textarea placeholder="Leave a comment"></textarea>
        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

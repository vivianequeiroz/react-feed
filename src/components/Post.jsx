import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/61950209?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Viviane Queiroz</strong>
            <span>Front-end Software Developer</span>
          </div>
        </div>

        <time title="05 de Marços às 08h15" dateTime="2023-03-05 08:15:45">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="#"> jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a> {""}
          <a href="#">#nlw</a> {""}
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}

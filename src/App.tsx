import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import React from "react";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/61950209?v=4",
      name: "Viviane Queiroz",
      role: "Frontend software developer",
    },
    content: [
      { type: "paragraph", content: "Hello everyone!👋" },
      {
        type: "paragraph",
        content:
          " I just uploaded another project to my portfolio. Its a project I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "link", content: "#newproject" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ],
    publishedAt: new Date("2022-05-03 15:04:05"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/61950209?v=4",
      name: "Pyon Queiroz",
      role: "Frontend software developer",
    },
    content: [
      { type: "paragraph", content: "Hello everyone!👋" },
      {
        type: "paragraph",
        content:
          " I just uploaded another project to my portfolio. Its a project I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "link", content: "#newproject" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ],
    publishedAt: new Date("2022-05-03 15:04:05"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/61950209?v=4",
      name: "Pyon Pyon",
      role: "Frontend software developer",
    },
    content: [
      { type: "paragraph", content: "Hello everyone!👋" },
      {
        type: "paragraph",
        content:
          " I just uploaded another project to my portfolio. Its a project I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
      { type: "link", content: "#newproject" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ],
    publishedAt: new Date("2022-05-03 15:04:05"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;

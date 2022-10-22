import css from "../src/assets/skills/css.png";
import html from "../src/assets/skills/html.png";
import javascript from "../src/assets/skills/javascript.png";
import bootstrap from "../src/assets/skills/bootstrap.png";
import firebase from "../src/assets/skills/firebase.png";
import git from "../src/assets/skills/git-logo.png";
import react from "../src/assets/skills/react.png";
import sass from "../src/assets/skills/sass2.png";
import tailwind from "../src/assets/skills/tailwind.png";
import next from "../src/assets/skills/next.png";

export const skillsImages = [
  html,
  css,
  javascript,
  react,
  next,
  sass,
  tailwind,
  bootstrap,
  firebase,
  git,
];

export const projects = [
  {
    id: 1,
    web: "images/projects/burger.png",
    mobil: "images/projects/mobile.png",
    description: "This project created by html, css & javascript",
    tech: "Html, Css, Javascript",
    demo: "https://marsburger.netlify.app/",
    github: "https://github.com/mertoztat/Mars-Burger-Shop",
  },
  {
    id: 2,
    web: "images/projects/burger.png",
    mobil: "images/projects/mobile.png",
    name: "Pokemon Memory Card",
    description:
      "A memory game has been made where we try to find matching cards with using ",
    tech: "React JS, React Hooks",
    demo: "https://memory-game-with-pokemon.netlify.app/",
    github: "https://github.com/mertoztat/memory-game",
  },
  {
    id: 3,
    web: "images/projects/burger.png",
    mobil: "images/projects/mobile.png",
    name: "Unsplash Search Photo Gallery",
    description:
      "In this project, I made an application that you can search for photos using the unsplash api. I completed the project with tailwind css and axios.",
    tech: "React JS, React Hooks, Tailwind CSS, Unsplash Api, Axios",
    demo: "https://unsplash-photos-gallery.netlify.app/",
    github: "https://github.com/mertoztat/Unsplash-Search-Photos",
  },

  {
    id: 5,
    web: "images/projects/burger.png",
    mobil: "images/projects/mobile.png",
    name: "Todo App",
    description:
      "In this project, i was created todo app. Todo project have add, delete & filtering operations are performed.",
    tech: "React js, React Hooks",
    demo: "https://react-to-do-app-project.netlify.app/",
    github: "https://github.com/mertoztat/To-do-app-with-react",
  },
  {
    id: 6,
    web: "images/projects/burger.png",
    mobil: "images/projects/mobile.png",
    name: "Qr Code Generator",
    description:
      "In this project, I made an application that we can create and download qr code using the qrcode library with using react.",
    tech: "React js",
    demo: "https://qr-code-generator-react.netlify.app/",
    github: "https://github.com/mertoztat/react-qr-code-generator",
  },
];

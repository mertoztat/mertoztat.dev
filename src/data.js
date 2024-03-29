import css from "../src/assets/skills/css.png";
import html from "../src/assets/skills/html.png";
import javascript from "../src/assets/skills/javascript.png";
import bootstrap from "../src/assets/skills/bootstrap.png";
import firebase from "../src/assets/skills/firebase.png";
import git from "../src/assets/skills/git-logo.png";
import react from "../src/assets/skills/react.png";
import sass from "../src/assets/skills/sass.png";
import tailwind from "../src/assets/skills/tailwind.png";
import next from "../src/assets/skills/next.png";
import ts from "../src/assets/skills/ts.png";

export const skillsImages = [
  html,
  css,
  javascript,
  ts,
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
    img: "./images/projects/nike_ecommerce.jpg",
    description:
      "This project created by reactjs, typescript, redux, redux toolkit, ar(augmented reality), model viewer, 3D objects",
    tech: "React Js, Typescript, Redux, Redux Toolkit, AR(Augmented Reality), Model Viewer, 3D objects",
    demo: "https://nike-ecommerce-ar.vercel.app/",
    github: "https://github.com/mertoztat/nike_ecommerce_ar",
  },
  {
    id: 2,
    img: "./images/projects/sneakers2.png",
    description: "This project created by react js, context api",
    tech: "React Js, Context Api, React Hooks",
    demo: "https://fementor-sneakers.netlify.app/",
    github: "https://github.com/mertoztat/Ecommerce_sneakers",
  },
  {
    id: 3,
    img: "./images/projects/unsplash.png",
    name: "Unsplash Search Photo Gallery",
    description:
      "In this project, I made an application that you can search for photos using the unsplash api. I completed the project with tailwind css and axios.",
    tech: "React JS, React Hooks, Tailwind CSS, Unsplash Api, Axios",
    demo: "https://unsplash-photos-gallery.netlify.app/",
    github: "https://github.com/mertoztat/Unsplash-Search-Photos",
  },
  {
    id: 4,
    img: "./images/projects/github_search.jpg",
    name: "Github Find Users & Repos",
    description:
      "In this project i use to react js, tailwind css & github api. We can search users from github and we can see user details & repos.",
    tech: "React JS, Tailwind CSS, Github Api, Axios",
    demo: "https://github-searcing-profile.vercel.app/",
    github: "https://github.com/mertoztat/Searching-Github-Profiles",
  },
  {
    id: 5,
    img: "./images/projects/burger.png",
    description: "This project created by html, css & javascript",
    tech: "Html, Css, Javascript",
    demo: "https://marsburger.netlify.app/",
    github: "https://github.com/mertoztat/Mars-Burger-Shop",
  },
  {
    id: 6,
    img: "./images/projects/pokemon.png",
    name: "Pokemon Memory Card",
    description:
      "A memory game has been made where we try to find matching cards with using ",
    tech: "React JS, React Hooks",
    demo: "https://memory-game-with-pokemon.netlify.app/",
    github: "https://github.com/mertoztat/memory-game",
  },
];

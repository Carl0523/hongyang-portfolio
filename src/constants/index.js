import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  figma,
  c,
  firebase,
  java,
  flutter,
  uterra,
  investment,
  mealApp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web App Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Explorer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Figma",
    icon: figma,
  },
];



const projects = [
  {
    name: "Uterra",
    description:
      "An underdeveloped social media app based on the map, I'm responsible for front end development.",
    tags: [
      {
        name: "reactNative",
        color: "green-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "go",
        color: "blue-text-gradient",
      },
    ],
    image: uterra,
    source_code_link: "https://github.com/Uterra",
  },
  {
    name: "Food Recipe",
    description:
      "A food recipe app using Riverpod for state management.",
    tags: [
      {
        name: "dart",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
    ],
    image: mealApp,
    source_code_link: "https://github.com/Carl0523/food-recipe-app",
  },
  {
    name: "Investment Calculator",
    description:
      "An web application allows the user to calculate the investment based on the interest rate, annual deposit, etc.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: investment,
    source_code_link: "https://github.com/Carl0523/investment-calculator",
  },
];

export { services, technologies, projects };

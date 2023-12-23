import {
  fullstack,
  mernstack,
  mongodb,
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
  git,
  uterra,
  investment,
  expressjs,
  mealApp,
  realEstate,
  mealOrder,
  auth
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
    title: "Full Stack Developer",
    icon: fullstack,
  },
  {
    title: "MERN Stack Developer",
    icon: mernstack,
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
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: expressjs,
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
    name: "Home Yonder",
    description:
      "A MERN full-stack real estate web application. Intuitive Property Exploration: Navigate through an intuitive interface that explores the available properties through an advanced search and filtering system.Efficient Property Management: Manage the property list by posting, editing, and removing properties. Social Sharing: Easily share housing info with others Easy Contact: Simplify communication by providing a direct contact feature to contact the property owner.",
    tags: [
      {
        name: "React.js",
        color: "text-blue-400",
      },
      {
        name: "Express.js",
        color: "text-white",
      },
      {
        name: "Node.js",
        color: "text-green-500",
      },
      {
        name: "MongoDB",
        color: "text-green-700",
      },
      {
        name: "redux toolkit",
        color: "text-purple-600",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: realEstate,
    source_code_link: "https://github.com/Carl0523/home_yonder",
  },
  {
    name: "MERN Auth",
    description:
      "Developed secure authentication systems including registration, login, and profile management with JWT tokens. Implemented RESTful APIs for communication between frontend and backend. Manage frontend state with Redux Toolkit",
      tags: [
        {
          name: "React.js",
          color: "text-blue-400",
        },
        {
          name: "Express.js",
          color: "text-white",
        },
        {
          name: "Node.js",
          color: "text-green-500",
        },
        {
          name: "MongoDB",
          color: "text-green-700",
        },
        {
          name: "redux toolkit",
          color: "text-purple-600",
        },
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
        },
      ],
    image: auth,
    source_code_link: "https://github.com/Carl0523/mern-auth",
  },
  {
    name: "Meal Order",
    description:
      "A meal order app, featuring an aesthetically pleasing UI I designed. Developed using react and manage state using useContext functionality, the app facilitates a smooth food ordering experience. Users can easily select and order their preferred meals while efficiently managing their carts.",
    tags: [
      {
        name: "React.js",
        color: "text-blue-400",
      },
      {
        name: "React Context",
        color: "blue-text-gradient",
      },

    ],
    image: mealOrder,
    source_code_link: "https://github.com/Carl0523/meal-order",
  },
];

export { services, technologies, projects };

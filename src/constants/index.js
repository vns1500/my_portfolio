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
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  python,
  sql,
  springboot,
  springdatajpa,
  hibernate,
  genpact,
  reach,
  buzz,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Hibernate",
    icon: hibernate,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "SpringBoot",
    icon: springboot,
  },
  {
    name: "SpringData JPA",
    icon: springdatajpa,
  },
];

const experiences = [
  {
    title: "Business Development Executive",
    company_name: "BuzzOnEarth - Intern",
    icon: buzz,
    iconBg: "#383E56",
    date: "Aug 2019 - Nov 2019",
    points: [
      "Successfully led the development and execution of a strategic partnership initiative that resulted in a 30% increase in brand visibility.",
      "Collaborated with the marketing team to develop joint marketing campaigns, co-branded content, and social media initiatives.",
      "Successfully negotiated partnership terms, securing agreements with 10 high-impact partners.",
      "Analyzed key metrics and prepared detailed reports for senior management, highlighting the impact on brand visibility and revenue growth.",
    ],
  },
  {
    title: "Business Analyst",
    company_name: "Reach Technologies - Intern",
    icon: reach,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Dec 2020",
    points: [
      "Developed a comprehensive sales performance dashboard to provide real-time insights into sales metrics, track performance against targets, and identify trends and opportunities for the client.",
      "Developed stored procedures to automate common data processing tasks, such as monthly sales summaries and trend analysis.",
      "Improved the accuracy and timeliness of sales reporting, reducing the time spent on manual data collection and analysis by 40%.",
      "Identified key sales trends and opportunities that led to targeted marketing campaigns and a 15% increase in sales.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Genpact - Full Time",
    icon: genpact,
    iconBg: "#383E56",
    date: "Aug 2022 - Feb 2024",
    points: [
      "Worked on the enhancement of a trade processing system for Morgan Stanley, aimed at improving the efficiency, accuracy, and compliance of trade operations..",
      "Developed RESTful APIs using Spring Boot for trade capture, processing, and reporting functionalities.",
      "Implemented data persistence using Spring Data JPA and Hibernate, ensuring efficient database operations and optimal query performance.",
      "Successfully enhanced the trade processing system, improving trade capture efficiency by 30% and reducing processing latency by 25%",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

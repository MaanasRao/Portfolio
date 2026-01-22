import {
  aiml,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  tailwind,
  nodejs,
  mongodb,
  git,
  mysql,
  docker,
  luharia,
  healthrisk,
  stockanalyzer,
  footballpredictor,
  macfind,
  liveability,
  lifelink,
  neurovault,
  sentitrade,
  threejs,
  developer,
  dataanalytics,
  contentcreator,
  twitch,
  youtube,
  zappy,

  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",       // for Experience
    title: "Work",
  },
  {
    id: "projects",   // for Works
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const services = [
  {
    title: "Full Stack Developer",
    icon: developer,
    glow: "cyan",
  },
  {
    title: "Data Analyst",
    icon: dataanalytics,
    glow: "magenta",
  },
  {
    title: "AI ML",
    icon: aiml,
    glow: "violet",
  },
  {
    title: "Content Creator",
    icon: contentcreator,
    glow: "yellow",
  },
];


const technologies = [
  {
    name: "HTML",
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
    name: "python",
    icon: python,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "mysql", 
    icon: mysql,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Twitch affiliate",
    company_name: "Twitch",
    icon: twitch,
    iconBg: "#383E56",
    date: "Jun 2020 - Present",
    points: [
      "Designed and executed weekly video stream content on Twitch.tv.",
      "Create and implement strategies to actively engage with viewers during live streams, including chat interaction,shoutouts, and participation in community activities.",
      "Built and maintained an engaged social media following",
      "Utilize analytics tools to track viewer engagement, gather insights, and make data-driven recommendations for improvement.",
    ],
  },
  {
    title: "Content Creator & Youtube Partner",
    company_name: "YouTube",
    icon: youtube,
    iconBg: "#383E56",
    date: "Jun 2020 - Present",
    points: [
      "Grew a YouTube channel to over 600k total views and 1k subscribers, achieving Partner status and monetizing content successfully.",
      "Implement creative editing techniques to enhance video appeal and encourage subscriber growth.",
      "Ensure timely delivery of edited videos, maintaining a regular upload schedule to keep the audience engaged.",
      "Utilize audience feedback to make data-driven decisions on editing styles, content themes, and overall video strategy",
    ],
  },
  {
    title: "Social Media Intern",
    company_name: "Luharia Technologies Pvt Ltd ",
    icon: luharia,
    iconBg: "#383E56",
    date: "Apr 2023 - Jul 2023",
    points: [
      "Create paid and organic content to publish on Instagram, Facebook, Twitter and YouTube",
      "Created and sent the company’s weekly newsletter via Mailchimp to a subscriber list of 1000 achieving an open rate of 26%.",
      "Manage accounts and track content performance using social media marketing tools including Google Analytics,Facebook Insights and Hootsuite.",
      "Researched the Fintecg industry to identify trends, enabling channel partners to increase targeted marketing initiatives by 12%.",
      "Oversee Assist with the planning and execution of a social media campaign leading to a 10% increase in traffic to the company website over a 3-month period.",

    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "zappycareapp",
    icon: zappy,
    iconBg: "#E6DEDD",
    date: "May 2025 - Aug 2025",
    points: [
      "Extract patient and transaction data from partners, APIs, and spreadsheets. ",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Clean and format insurance claims and receipts (fix missing details, remove duplicates). ",
      "Use SQL, Mongo Queries, Python, and Excel for data analysis and reporting. ",
      "Create reports and visualizations to track claims and payment trends and prepare summaries and presentations for internal teams and external partners. ",
    ],
  },
];


const projects = [
  {
    name: "NeuroVault",
    description:
      "A caregiver-assisted memory system with voice interaction. Acts as a 'second brain' for patients, using semantic search to answer the questions aloud.",
    tags: [
      { name: "DeltaHacks 2026", color: "green-text-gradient" },
      { name: "fastapi", color: "blue-text-gradient" },
      { name: "deepface", color: "pink-text-gradient" },
    ],
    image: neurovault, 
    source_code_link: "https://github.com/YourUsername/NeuroVault", 
    live_demo_link: "", 
  },
  {
    name: "SentiTrade",
    description:
      "An AI-powered trading assistant that analyzes market sentiment and various factors to generate concrete 'Buy' or 'Sell' signals for users.",
    tags: [
      { name: "McHacks 2026", color: "green-text-gradient" },
      { name: "python", color: "blue-text-gradient" },
      { name: "gumloop", color: "pink-text-gradient" },
    ],
    image: sentitrade, // Make sure to import this!
    source_code_link: "https://github.com/YourUsername/SentiTrade", // Update this
  },
  {
    name: "Livability",
    description:
      "An urban analysis tool that evaluates street-level quality of life metrics using open data. Visualizes safety, convenience, and environment scores.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "reactjs", color: "green-text-gradient" },
      { name: "openstreetmap", color: "pink-text-gradient" },
    ],
    image: liveability,
    live_demo_link: "https://appetize.io/app/b_im3o2k77ututmdwx642ai57cmm",
    source_code_link: "https://github.com/MaanasRao/Liveability",
  },
  {
    name: "Life-Link Live",
    description:
      "An offline-first disaster response web app. Simulates a mobile emergency tool to report hazards, find shelters, and sync data locally without internet.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "leaflet", color: "green-text-gradient" },
    ],
    image: lifelink,
    source_code_link: "https://github.com/Saahil-Gupta/MEC--2025",
    live_demo_link: "https://life-link-live.vercel.app/",
  },
  {
    name: "Stock Analyzer",
    description:
      "A quantitative dashboard allowing users to visualize stock performance, calculate returns, and analyze risk metrics using mathematical modeling.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "streamlit", color: "green-text-gradient" },
      { name: "yfinance", color: "pink-text-gradient" },
    ],
    image: stockanalyzer,
    source_code_link: "https://github.com/MaanasRao/stock-analyzer",
    live_demo_link: "https://stock-analyzer-49dn.onrender.com",
  },
  {
    name: "Football Predictor",
    description:
      "A match outcome prediction system leveraging machine learning models to forecast results based on recent form, stats, and team data.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "scikit-learn", color: "green-text-gradient" },
      { name: "pandas", color: "pink-text-gradient" },
    ],
    image: footballpredictor,
    source_code_link: "https://github.com/Saahil-Gupta/Football-Predictor-V1",
  },
  {
    name: "Health Risk Predictor",
    description:
      "A machine learning-based web app that predicts potential health risks using user-provided data. Built using HTML, CSS, JavaScript and Flask.",
    tags: [
      { name: "flask", color: "blue-text-gradient" },
      { name: "html", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: healthrisk,
    source_code_link: "https://github.com/MaanasRao/Health-Risk-Predictor",
    live_demo_link: "https://health-risk-predictor.onrender.com",
  },
];

export { services, technologies, experiences, projects };

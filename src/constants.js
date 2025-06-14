// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import HCLTech from './assets/company_logo/hcl.png';

// Education Section Logo's
import gvp from './assets/education_logo/gvp.png';
import apt from './assets/education_logo/apt.png';

// Project Section Logo's
import virtuoCall from './assets/work_logo/virtuoCall.png';
import smartBrief from './assets/work_logo/smartBrief.png';
import codeCritique from './assets/work_logo/code.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: HCLTech,
      role: "Software Engineering Intern",
      company: "HCLTech",
      date: "Jan 2024 - May 2024",
      desc: " Engineered a QR-based Cycle Management App using Android Studio (Java) and Firebase Realtime DB,automating tracking and reducing operational workload by 25%.Developed UI screens using XML and integrated real-time data updates via Firebase listeners to enhance userexperience.",
      skills: [
        "Java",
        "XML",
        "Android Studio",
        "Firebase Realtime Database",
        "Git",
        "GitHub",
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: gvp,
      school: "Gayatri Vidya Parishad College of Engineering",
      date: "July 2023 - May 2027",
      grade: "9.30 CGPA",
      desc: "I am currently pursuing my B.Tech in Computer Science and Engineering from Gayatri Vidya Parishad College of Engineering, Visakhapatnam. My coursework includes advanced topics in computer science, software engineering, and data structures, which have equipped me with a solid foundation in both theoretical and practical aspects of computing. I am actively involved in various projects that apply my learning to real-world challenges.",
      degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
    },
    {
      id: 1,
      img: apt,
      school: "Andhra Polytechnic College, Kakinada",
      date: "July 2021 - May 2023",
      grade: "94%",
      desc: "I completed my Diploma in Computer Science and Engineering from Andhra Polytechnic College, Kakinada, where I gained a strong foundation in programming, algorithms, and software development. The curriculum included hands-on projects that enhanced my problem-solving skills and prepared me for advanced studies in computer science.",
      degree: "Diploma in Computer Science and Engineering",
    },
    
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "VirtuoCall",
      description:
        "A full-stack web application designed to facilitate seamless video conferencing and virtual meetings. It offers features like real-time chat, screen sharing, and meeting scheduling, making it an ideal solution for remote collaboration and communication.",
      image: virtuoCall,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript", "Socket.IO", "WebRTC", "Tailwind CSS"],
      github: "https://github.com/Soumyaatanna/virtuoCall",
      webapp: "https://virtuo-call.vercel.app/",
    },
    {
      id: 1,
      title: "SmartBrief",
      description:
        "SmartBrief is a full‑stack web application that converts long articles into concise, easy‑to‑read summaries using RapidAPI’s NLP engine. Built with modern tools, it provides a smooth UI, history tracking, and clipboard support—perfect for busy readers.",
      image: smartBrief,
    tags: ["React JS", "Node.js", "Express", "JavaScript", "RapidAPI", "Tailwind CSS","ChatGPT API"],
      github: "https://github.com/Soumyaatanna/smartBrief",
      webapp: "https://smart-brief-pi.vercel.app/",
    },
    {
      id: 2,
      title: "CodeCritique",
      description:
        "CodeCritique is an AI-powered code review tool that helps developers of all levels write cleaner, more efficient, and industry-standard code. Whether you're a student, solo dev, or part of a team, CodeCritique reviews your code and provides actionable suggestions instantly.",
      image: codeCritique,
      tags: ["React JS", "Node.js", "Express", "JavaScript", "Gemini AI", "Tailwind CSS"],
      github: "https://github.com/Soumyaatanna/codeCritique",
      webapp: "https://code-critique.vercel.app/",
    },
    
  ];  
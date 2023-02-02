import { mailsend ,linkedin ,team, tools, HighProfile, profileTest1, profileTest2, goodProfile1, goodProfile2, test } from "../assets";

export const navLinks = [
  {
    id: "introduction",
    title: "Introduction",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "workExperiencie",
    title: "Work experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "courses",
    title: "Courses",
  },
  {
    id: "courses",
    title: "Plans",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const content = [
  {
    id: "introductionContent",
    title: "Tomas Perez Coscia",
    subtitles:[
      {
        id: "especialitySubtitle",
        content: "Web Developer / Technical Analyst"
      }
    ], 
    content:[
      {
        id: "especialityContent",
        for: "especialitySubtitle",
        content: "As a talented web developer and technical analyst, Tomas has a strong background in delivering innovative and effective solutions to complex web development projects. With his expertise in web technologies and analytical skills, he is able to quickly identify and resolve technical issues, ensuring the smooth and efficient operation of web systems. Tomas has a passion for staying up-to-date with the latest developments in the field, and is committed to providing high-quality services to clients."
      }
    ],
    buttons:[
      {
      id: "cvDownloadButton",
      content: "Download CV",
      },
      {
      id: "contactButton",
      content: "Contact",
      }
    ]
  },
  {
    id: "educationContent",
    title: "Education",
    subtitles:[
      {
        id: "systemsEngenieeringSubtitle",
        content: "Systems Engenieering / UNICEN"
      },
      {
        id: "appDevelopmentSubtitle",
        content: "Computer application development / UNICEN"
      }
    ],
    content:[
      {
        id: "systemsEngenieering",
        for: "systemsEngerieeringSubtitle",
        skills: "SQL - Networks - TCP/IP - C++ - C - OOP - Complex maths",
        content: "Although Tomas did not complete a formal degree in systems engineering, he has acquired a wealth of knowledge and skills through self-study and practical experience. Tomas has a strong foundation in mathematics and a deep understanding of networks, as well as proficiency in programming languages such as C++, C, and object-oriented programming. His passion for systems engineering and drive to continuously improve his skills make him a valuable asset in any technical field."
      },
      {
        id: "appDevelopment",
        for: "appDevelopmentSubtitle",
        skills: "SQL - HTML - CSS - Javascript - Java",
        content: "Although Tomas did not complete a formal degree in computer applications development, he has acquired a solid foundation in web development through self-study and practical experience. Tomas has a strong understanding of Java, HTML, CSS, and JavaScript, and has honed his skills through various web development projects. His passion for computer applications development and drive to continuously improve his skills have formed the base of his web development expertise."
      }
    ]
  },
  {
    id: "workContent",
    title: "Work experience",
    subtitles:[
      {
        id: "freelanceDev",
        content: "Web Developer / Freelance"
      },
      {
        id: "techAnalyst",
        content: "Technical Analyst / InfOil"
      }
    ],
    content:[
      {
        id: "freelanceDevContentt",
        for: "freelanceDev",
        skills: "SQL - MySQL - SQLite3 - HTML - CSS - Javascript - Java - Arduino - Linux",
        content: "With extensive experience in web server development and maintenance, Tomas is highly skilled in ensuring the smooth operation and performance of web systems. He has also developed websites for a variety of business models, demonstrating a strong ability to create tailored and effective solutions to meet the unique needs of each client. He's commitment to staying up-to-date with the latest technologies and best practices makes him a valuable asset in any web development project."
      },
      {
        id: "techAnalystContent",
        for: "techAnalyst",
        skills: "SQL - Microsoft SQL Server - OracleDB - Ruby on Rails - OOP - SmallTalk - Agile",
        content: "As a skilled technical analyst, Tomas excels in optimizing SQL servers and queries, ensuring the efficient performance of databases. He has developed tools and solved problems for multinational companies, demonstrating a strong ability to identify and resolve complex technical issues. With his expertise in database management and problem-solving skills, Tomas has a proven track record of delivering effective and innovative solutions to clients, making him a valuable asset to any technical team."
      }
    ]
  },
  {
    id: "coursesContentt",
    title: "Courses",
    subtitles:[
      {
        id: "dataAnalytics",
        content: "Data Analytics / CoderHouse"
      },
      {
        id: "webDesign",
        content: "Web Design / CoderHouse"
      },
      {
        id: "oopProgramming",
        content: "Object Oriented Design / InfOil"
      },
      {
        id: "tdd",
        content: "Test Driven Design / InfOil"
      }
    ],
    content:[
      {
        id: "dataAnalyticsSkills",
        for: "dataAnalytics",
        skills: "PowerBI - SQL"
      },
      {
        id: "webDesignSkills",
        for: "webDesign",
        skills: "HTML - CSS - SASS - DEPLOYMENT"
      },
      {
        id: "oopSkills",
        for: "oopProgramming",
        skills: "SmallTalk - OOP"
      },
      {
        id: "tddSkills",
        for: "tdd",
        skills: "SmallTalk - OOP - TDD"
      }
    ]
  },
  {
    id: "plansContent",
    title: "Plans",
    subtitles:[
      {
        id: "AIBachelor",
        content: "Artificial Intelligence Bachelor"
      },
      {
        id: "react",
        content: "React"
      },
      {
        id: "angular",
        content: "Angular"
      },
      {
        id: "softwareEngenieering",
        content: "Software Engenieering"
      }
    ],
    content:[
      {
        id: "aiBachelorSkills",
        for: "AIBachelor",
        skills: "Universidad de Palermo"
      },
      {
        id: "reactSkills",
        for: "react",
        skills: "Self-taught"
      },
      {
        id: "angular-skills",
        for: "angular",
        skills: "Self-taught"
      },
      {
        id: "softwareEngenieeringSkills",
        for: "softwareEngenieering",
        skills: "Self-taught"
      }
    ]
  },
];

export const contact = [
  {
    id: "contact",
    title: "Contact information and goodbyes",
    icons:[
      {
        id: "emailIcon",
        content: "Email",
        link: "mailto: perezcosciatomas@gmail.com",
        icon: "mailsend"
      },
      {
        id: "linkedinIcon",
        content: "Linkedin",
        link: "https://www.linkedin.com/in/tomas-perez-coscia/",
        icon: "linkedin"
      }
    ],
    content: [
      {
        content: "Hi, im Tomas, the creator of this page, if you've come this far, this means that you looked through my page hope you liked it as much as i liked making it, if you have some comments let me know. A little more personal information about me, I'm Argentinian, 24 years young, I've used computers since I've memory, i like video-games and science fiction, and i developed my portfolio focusing in my strengths and liking,  redaction, gaming, artificial intelligence (MidJourney, i created the images with this model). I'm currently looking for remote work abroad as a web developer or as a technical analyst. If you would like to hire me, I'll drop my email and LinkedIn down bellow as well as a contact form. ",
        goodbyes: "Thanks for paying a visit, ",
        name: "Tomas Perez Coscia ",
      },
    ],
  },
];

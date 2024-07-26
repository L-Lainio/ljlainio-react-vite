import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";


export const HERO_CONTENT = `Hello! I'm Lora, a dedicated mother who recently transitioned into the tech industry. I successfully completed a rigorous full stack coding bootcamp with the University of Central Florida, gaining proficient skills in web development. Beyond coding, I prioritize quality time with my family. My diverse background in upholstery, entrepreneurship, and personal assistance has honed my initiative, fast-learning abilities, and problem-solving skills. I'm enthusiastic about applying my tech skills and past experiences to make a meaningful impact in my new career path.`;

export const ABOUT_TEXT = `Additionally, I bring hands-on experience with Express.js for backend development, SQL and NoSQL databases, Object-Relational Mapping (ORM), and building Model-View-Controller (MVC) architectures. My enthusiasm lies in crafting Progressive Web Applications (PWAs) and I am proficient in the MERN (MongoDB, Express.js, React, Node.js) stack.

Outside of coding, I prioritize quality time with my family as a dedicated parent. My diverse background spans upholstery, entrepreneurship, and personal assistance, which have equipped me with a proactive approach, quick learning abilities, and strong problem-solving skills. I am eager to apply my technical skills and past experiences to contribute effectively to my new career path.`;

export const EXPERIENCES = [
    {
        year: "2024 - Present",
        role: "Junior Full Stack Developer",
        company: "EdEx University of Central Florida",
        description: `I completed a 12 week comprehensive bootcamp that covered the MERN stack, including MongoDB, Express.js, React.js, and Node.js. I gained hands-on experience with Express.js for backend development, SQL and NoSQL databases, Object-Relational Mapping (ORM), and building Model-View-Controller (MVC) architectures. I am enthusiastic about crafting Progressive Web Applications (PWAs) and am proficient in the MERN stack.`,
        technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "Express.js", "Node.js", "GraphQL", "Apollo", "Tailwindcss", "mui", "Materialize", "HTML", "CSS", "API", "Insomnia", "Heroku", "Netlify", "Vercel"],
    },

    {
        year: "2017 - 2024",
        role: "Upholsterer & Personal Assistant",
        company: "Bob's Tops & Upholstery",
        description: `Tasks included managing the front office, customer service, and assisting with upholstery projects. I also provided personal assistance to the owner, including managing his schedule, organizing his office, and running errands.`,
        technologies: ["Microsoft365", "Google", "ios", "Quickbooks"],
    },

    {
        year: "2011 - 2019",
        role: "Personal Assistant & Entrepreneur",
        company: "Self-Employed & Entrepreneur",
        description: `Administrative tasks include Scheduling appointments, meetings, and travel arrangements, Handling phone calls, emails, and correspondence, managing paperwork, filing systems, and maintaining records, providing personal support such as shopping, errands, and household management, Handling personal appointments and commitments.`,
        technologies: ["HTML", "CSS", "Microsoft", "Quickbooks"],
    },

];

export const PROJECTS = [
    {
        title: "Facts and Quotes",
        image: project1,
        description:
            "Facts and Quotes by a single keyword, plus favorites.",
        technologies: ["HTML", "CSS", "API", "JavaScript", "Materilize"],
        url: 'https://Abbate11.github.io/Today-Facts-and-Quotes/'
    },
    {
        title: "Express Note Taker",
        image: project2,
        description:
            "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
        technologies: ["HTML", "CSS", "Express.js", "Node.js", "JavaScript", "Insomnia"],
        url: 'https://express-jsnotetaker.onrender.com'
    },
    {
        title: "Root2Roast",
        image: project3,
        description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "Tailwindcss", "React", "Node.js", "MongoDB", "Apollo GraphQL", "mui", "Express"],
        url: 'https://root2roast.onrender.com/'
    },

];

export const CONTACT = {
    address: "Lake City, Florida ",
    phoneNo: "+1 (772)475-9943 ",
    email: "lora.lainio.it@gmail.com",
};

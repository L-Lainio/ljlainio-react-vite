import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";


export const HERO_CONTENT = 
 `🚀 Hello World, I'm Lora Lainio 👋

Full-Stack Developer | Data Security & Tax Professional (PTIN)

I am a developer who bridges the gap between complex financial compliance and modern web technology. With an Active PTIN and experience in the Intuit/TurboTax ecosystem, I bring a "Security-First" mindset to software development, specializing in the handling of sensitive PII and secure data management.

🛡️ Secure Development Philosophy

- **Data Integrity:** I prioritize "Security-by-Design," leveraging PostgreSQL for ACID compliance and MongoDB for scalable, flexible data architectures.
- **Compliance-Driven:** My background in pharmacy (HIPAA) and tax law ensures I build with strict data privacy and regulatory standards in mind.
- **Empathy in Design:** As a caregiver and former service professional, I build with accessibility (a11y) and user safety as core requirements, not afterthoughts.

I thrive on fixing complex problems—from debugging deep SQL joins to navigating intricate tax regulations—making systems more efficient and secure for everyone.`;


export const EXPERIENCES = [
    {
        year: "Jan 2025 – Nov 2025",
        role: "Advisor II, Customer Service",
        company: "Concentrix (Contract for Intuit/TurboTax)",
        description: "Served as a primary technical contact for the Intuit program, troubleshooting software issues and state/federal filing requirements during high-volume tax season[cite: 68, 69, 70, 71]. Managed sensitive customer data (PII) with 100% adherence to security protocols[cite: 72].",
        technologies: ["TurboTax Software", "Technical Troubleshooting", "Data Compliance (PII)", "Tax Law Fundamentals"],
    },
    {
        year: "2024 - Present",
        role: "Junior Full Stack Developer",
        company: "EdEx University of Central Florida",
        description: `I completed a 12 week comprehensive bootcamp that covered the MERN stack, including MongoDB, Express.js, React.js, and Node.js. I gained hands-on experience with Express.js for backend development, SQL and NoSQL databases, Object-Relational Mapping (ORM), and building Model-View-Controller (MVC) architectures. I am enthusiastic about crafting Progressive Web Applications (PWAs) and am proficient in the MERN stack.`,
           technologies: ["TypeScript", "PostgreSQL", "React", "Node.js", "MongoDB", "Docker", "GraphQL"],
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
    email: "lora.lainio.it@gmail.com",
};

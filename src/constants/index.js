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
    kua,
    alex,
    chow
} from "../assets";

export const navLinks = [
    {
        id: "#about",
        title: "About",
    },
    {
        id: "#work",
        title: "Experience",
    },
    {
        id: "#contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Data Analyst",
        icon: mobile,
    },
    {
        title: "Figma Designer",
        icon: backend,
    },
    {
        title: "Student",
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
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "100 Days of Code: The Complete Python Pro Bootcamp",
        company_name: "Angela Yu",
        icon: starbucks,
        iconBg: "#383E56",
        date: "May 2022 - October 2022",
        points: [
            "Mastering Python Programming with various unique projects.",
            "Able to use Python for data science and machine learning.",
            "Learnt Selenium, Beautiful Soup, Pandas, Flask for Web Scraping.",
            "Can be fluently programming in Python.",
        ],
    },
    {
        title: "Diploma in IT (Software Engineering)",
        company_name: "Asia Pacific University",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "August 2022  - August 2024",
        points: [
            "Develop solutions requiring the application of technology in a business context.",
            "Prepare for careers in ICT environment on software development.",
            "Prepare to provide technical support within an organisation.",
            "Design and Implement algorithms using second programming language.",
        ],
    },
    {
        title: "NUS Fintech Month Hackathon 2023",
        company_name: "NUS Singapore",
        icon: shopify,
        iconBg: "#383E56",
        date: "December 2022 - Jan 2023",
        points: [
            "First time joining a hackathon with seniors in university",
            "Collaborating with teammates to brainstorm for the problem statement",
            "Propose a web3 protocol funding for early-stage tech startups built on Ethereum",
            "Built with react, node.js, aws, solidity, express.js, mongodb, next.js",
        ],
    },
    {
        title: "The Complete 2023 Web Development Bootcamp",
        company_name: "Angela Yu",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Mastering frontend development with React",
            "Master backend development with Node",
            "Build fully-fledged websites and web apps for business",
            "Learning professional developer best practices",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought the website developed by a student will be terrible , but Charles proved me wrong.",
        name: "Jenny Kua",
        designation: "Student",
        company: "Sunway College",
        image: kua,
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' like Charles does.",
        name: "Pakho Chow",
        designation: "Student",
        company: "Asia Pacific University",
        image: chow,
    },
    {
        testimonial:
            "Charles could really explained how programming works for me, which helps in my assginment",
        name: "Alexandra Lim",
        designation: "Student",
        company: "Universiti Teknologi Malaysia",
        image: alex,
    },
];

const projects = [
    {
        name: "React Responsive Restaurant Landing Page",
        description:
            "Restaurant website which can pitch the restaurant to potential customers. Beside browsing the menu and chef, customers could reserve their seats.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/charleshorzz/charleshorzz.github.io.git",
    },
    {
        name: "Python Automation Bot",
        description:
            "A Python automation bot which will lodge a complaint to the network company in twitter when the network speed tested doesn't match with the network speed promised by the company.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Selenium",
                color: "green-text-gradient",
            },
            {
                name: "Beautiful Soup",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/charleshorzz/automation-bot.git",
    },
    {
        name: "E-Commerce Responsive Website",
        description:
            "Clothes Online Shopping Website for faster buying process. The UI is captivating, yet functions such as shopping cart and payment gateway haven't be added which will be modified in the future.",
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
                name: "js",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/charleshorzz/e-commerce-website.git",
    },
];

export { services, technologies, experiences, testimonials, projects };
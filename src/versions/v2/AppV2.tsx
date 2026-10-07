import { useCallback, useEffect, useRef, useState } from "react";
import { BsArrowDown, BsFileEarmarkPdfFill, BsGithub, BsLinkedin } from "react-icons/bs";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import "./index.css";

// ── Local image imports ───────────────────────────────────────────────────────
import Astronaut from "./assets/astronaut.jpg";
import Beefin from "./assets/beefin.jpg";
import BeSocial from "./assets/besocial.jpg";
import BigBens from "./assets/big-bens.jpg";
import CS10Map from "./assets/cs10-map.png";
import CSCInternshipRepo from "./assets/csc-internship-repo.jpg";
import MediLingo from "./assets/medilingo.jpg";
import Millipede from "./assets/millipede.jpg";
import PittCSWiki from "./assets/pitt-cs-wiki.jpg";
import PittGymTracker from "./assets/pitt-gym-tracker.jpg";
import RedditScraper from "./assets/reddit-scraper.jpg";
import Tux from "./assets/tux.jpg";
import WikipediaLogo from "./assets/wikipedia-logo.jpg";
import Wordle from "./assets/wordle.jpg";

// ── Particles background ──────────────────────────────────────────────────────

const ParticlesComponent = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                particles: {
                    number: { value: 150 },
                    shape: { type: "circle" },
                    opacity: { value: 0.7 },
                    size: { value: { min: 1, max: 3 } },
                    move: {
                        angle: { value: 10, offset: 0 },
                        enable: true,
                        speed: 2,
                    },
                },
            }}
        />
    );
};

// ── Project card ──────────────────────────────────────────────────────────────

type ProjectProps = {
    imageSrc: string;
    name: string;
    description: string;
    keywords: string[];
    link?: string;
};

const Project = ({ imageSrc, name, description, keywords, link }: ProjectProps) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries[0].isIntersecting ? setIsAnimated(true) : setIsAnimated(false);
            },
            { threshold: 0.7 }
        );
        if (elementRef.current) observer.observe(elementRef.current);
        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
        };
    });

    return (
        <div ref={elementRef}>
            <div className="project__container">
                <div className={`project__image-container ${isAnimated ? "animate" : ""}`}>
                    <img src={imageSrc} className="project__image" alt={name} />
                </div>
                <div className={`project__info-container ${isAnimated ? "animate" : ""}`}>
                    <p className="project__name">{name}</p>
                    <p className="project__description">{description}</p>
                    <div className="project__link-container">
                        {link ? (
                            <a target="_blank" rel="noreferrer" href={link} className="project__link">
                                Link to GitHub
                            </a>
                        ) : (
                            <p className="project__link">Code Available Upon Request</p>
                        )}
                    </div>
                    <div className="project__keywords-container">
                        <p>Keywords:</p>
                        <ul className="project__keywords-holder">
                            {keywords.map((keyword, i) => (
                                <li key={i} className="project__keyword">
                                    {keyword}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ── Project data (from original Version_2.0 branch) ──────────────────────────

const projects: ProjectProps[] = [
    {
        imageSrc: PittGymTracker,
        name: "Pitt Gym Tracker",
        description:
            "Created a website to display the number of people at Pitt's various recreational facilities. Leveraged AWS Lambda, AWS Event Bridge, AWS ECR, Docker, and GitHub actions to create a CI/CD pipeline for the scraper I implemented with Python and BeautifulSoup. For the Frontend, I used Next.js and deployed the site using Vercel.",
        keywords: ["TypeScript", "Next.js", "AWS Lambda", "AWS Event Bridge", "AWS ECR", "Docker", "Python", "GitHub Actions", "Personal Project"],
        link: "https://github.com/Steven-Jarmell/Pitt-Gym-Tracker",
    },
    {
        imageSrc: CSCInternshipRepo,
        name: "CSC Internship Website",
        description:
            "Designed and implemented a proof-of-concept website to replace the original CSC Internship Repository. Allows users to sign in with GitHub OAuth, add new jobs, as well as filter existing jobs. All newly added job postings undergo a rigorous review process by an admin before being published.",
        keywords: ["TypeScript", "React", "Express", "Node", "MongoDB", "Figma", "Personal Project"],
        link: "https://github.com/Steven-Jarmell/CSC-Internships",
    },
    {
        imageSrc: PittCSWiki,
        name: "Pitt Computer Science Wiki",
        description:
            "Refactored the old Pitt Computer Science Club Wikipedia from Gatsby to Next.js. The original website was difficult to maintain and very flakey. I aimed to rewrite the site in Next.js in order to fix these problems and make it easier for future maintainers to work on.",
        keywords: ["TypeScript", "Next.js", "Personal Project"],
        link: "https://github.com/Steven-Jarmell/pittcswiki-next",
    },
    {
        imageSrc: MediLingo,
        name: "MediLingo",
        description:
            "Project for the Pitt Challenge 2023 Hackathon. Built a full-stack web application using the MERN Stack and TypeScript that helps users learn about specific medical conditions in an easily digestible format. Won two tracks: Health Literacy and Best Use of MongoDB.",
        keywords: ["MongoDB", "Express", "React", "Node", "TypeScript", "Clerk", "Hackathon Project"],
        link: "https://github.com/Steven-Jarmell/MediLingo",
    },
    {
        imageSrc: Beefin,
        name: "Beefin",
        description:
            "Collaborative project which created a full-stack social media workout app, leveraging a microservice backend architecture based on Java Spring Boot. We seamlessly connected the backend to the frontend using RESTful APIs and Json Web Tokens, resulting in a robust, secure, and scalable application.",
        keywords: ["Java", "Spring Boot", "JavaScript", "React", "Firebase", "Docker", "JWT", "Personal Project"],
        link: "https://github.com/Steven-Jarmell/Beefin",
    },
    {
        imageSrc: Wordle,
        name: "Wordle Clone",
        description:
            "Created a clone of the popular game 'Wordle' while learning React and TypeScript. In addition to the core game mechanics, I added a feature to allow for multiple games to be played daily, enhancing the user experience.",
        keywords: ["TypeScript", "React", "Personal Project"],
        link: "https://github.com/Steven-Jarmell/Wordle-Clone",
    },
    {
        imageSrc: RedditScraper,
        name: "Reddit Web Scraper",
        description:
            "Developed a program that utilizes web scraping to extract data from r/wallstreetbets, a popular subreddit on Reddit. The program processes the comments and identifies the most frequently mentioned stock tickers.",
        keywords: ["Python", "Selenium", "Pandas", "NumPy", "Personal Project"],
        link: "https://github.com/Steven-Jarmell/RedditScraper",
    },
    {
        imageSrc: CS10Map,
        name: "Pittsburgh's Best Neighborhood",
        description:
            "Collaborative project that employs advanced data analysis techniques to rank neighborhoods in Pittsburgh based on various regional parameters. We leveraged diverse datasets, including fire data, restaurant inspections, and asbestos permits/removals, to generate insights and identify patterns.",
        keywords: ["Python", "Pandas", "Class Project"],
        link: "https://github.com/Steven-Jarmell/CS0010-FinalProject",
    },
    {
        imageSrc: BigBens,
        name: "Big Ben's BBQ",
        description:
            "As part of The Odin Project's curriculum, I created an imaginary BBQ restaurant website using JavaScript DOM manipulation. Through the use of DOM manipulation, I was able to dynamically create and update page elements, providing a seamless user experience.",
        keywords: ["JavaScript", "Webpack", "Personal Project"],
        link: "https://github.com/Steven-Jarmell/restaurant-page",
    },
    {
        imageSrc: BeSocial,
        name: "BeSocial",
        description:
            "Collaborative class project for Database Management Systems at the University of Pittsburgh. We implemented a database for a social media application using PostgreSQL and used JDBC to connect to it and build a CLI program.",
        keywords: ["PostgreSQL", "Java", "JDBC", "Class Project"],
    },
    {
        imageSrc: Millipede,
        name: "Millipede",
        description:
            "As part of my Computer Architecture and Assembly Language (CS447) course, we designed and programmed a version of the popular game 'Millipede' using a modified MIPS assembly language. To enhance the organization of the code, we implemented a Model-View-Controller (MVC) design pattern.",
        keywords: ["MIPS Assembly", "Class Project"],
    },
    {
        imageSrc: Tux,
        name: "File System",
        description:
            "Using a modified version of Debian Linux, alongside FUSE, a Linux kernel extension, created a user space program to implement a file system. Implemented syscalls for mkdir, rmdir, mknod, read, write, and more.",
        keywords: ["C", "Linux", "Class Project"],
    },
    {
        imageSrc: WikipediaLogo,
        name: "Wikipedia Discord Bot",
        description:
            "Created a Discord bot that utilizes the Wikipedia API to enable users to obtain a summary of any article they search for. Additionally, the bot features a language switcher that allows users to choose their preferred language, as well as a feature that retrieves a random Wikipedia article.",
        keywords: ["Python", "API", "Personal Project"],
        link: "https://github.com/Steven-Jarmell/Wikipedia-Bot",
    },
];

// ── Root component ────────────────────────────────────────────────────────────

const AppV2 = () => {
    return (
        <div className="v2-root">
            <ParticlesComponent />
            <div className="layout__container">
                {/* Header */}
                <div className="header__container">
                    <p className="header__SJ">SJ</p>
                    <nav className="header__social-nav">
                        <a className="header__nav-link" target="_blank" rel="noreferrer" href="https://github.com/Steven-Jarmell">
                            <BsGithub />
                        </a>
                        <a className="header__nav-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jarmell/">
                            <BsLinkedin />
                        </a>
                        <a className="header__nav-link" target="_blank" rel="noreferrer" href="https://github.com/Steven-Jarmell/Resume/blob/main/Steven_Jarmell_Resume.pdf">
                            <BsFileEarmarkPdfFill />
                        </a>
                    </nav>
                </div>

                {/* Main content */}
                <div className="MainContent__wrapper">
                    <div className="MainContent__container">
                        <div className="MainContent__info">
                            <p>Hey,</p>
                            <p>
                                My name is Steven Jarmell. I'm a{" "}
                                <b>
                                    <span className="MainContent__info-pitt">University of Pittsburgh</span>
                                </b>{" "}
                                graduate and a <b>Software Engineer at Amazon Web Services</b>.
                            </p>
                            <div className="MainContent__info-project-link">
                                <p>Check out my projects below</p>
                                <BsArrowDown />
                            </div>
                        </div>
                        <div className="MainContent__picture-container">
                            <img src={Astronaut} alt="Astronaut on Computer" className="MainContent__picture" />
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="projects__element-container">
                        <div className="projects__container">
                            {projects.map((project) => (
                                <Project key={project.name} {...project} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="footer__container">
                    <p>Made with ❤️</p>
                </div>
            </div>
        </div>
    );
};

export default AppV2;

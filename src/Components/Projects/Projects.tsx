import "../../Styles/Projects.css";
import Project from "./Project";
import CSC_Internship_Repo from "../../assets/csc-internship-repo.jpg";
import Beefin from "../../assets/beefin.jpg";
import Big_Bens from "../../assets/big-bens.jpg";
import CS10_Map from "../../assets/cs10-map.png";
import Millipede from "../../assets/millipede.jpg";
import Reddit_Scraper from "../../assets/reddit-scraper.jpg";
import Tux from "../../assets/tux.jpg";
import Wordle from "../../assets/wordle.jpg";
import Wiki_Bot from "../../assets/wikipedia-logo.jpg";
import BeSocial from "../../assets/besocial.jpg";
import MediLingo from "../../assets/medilingo.jpg";
import Pitt_CS_Wiki from "../../assets/pitt-cs-wiki.jpg";
import Pitt_Gym_Tracker from "../../assets/pitt-gym-tracker.jpg";

const CSCWebsiteDescription: string =
    "Designed and implemented a proof-of-concept website to replace the original CSC Internship Repository. Allows users to sign in with GitHub OAuth, add new jobs, as well as filter existing jobs. All newly added job postings undergo a rigorous review process by an admin before being published. The platform offers a more efficient, streamlined way to connect aspiring interns with potential employers.";
const BeefinDescription: string =
    "Collaborative project which created a full-stack social media workout app, leveraging a microservice backend architecture based on Java Spring Boot. We seamlessly connected the backend to the frontend using RESTful APIs and Json Web Tokens, resulting in a robust, secure, and scalable application.";
const WordleDescription: string =
    "Created a clone of the popular game 'Wordle' while learning React and TypeScript. In addition to the core game mechanics, I added a feature to allow for multiple games to be played daily, enhancing the user experience.";
const RedditScraperDescription: string =
    "Developed a program that utilizes web scraping to extract data from r/wallstreetbets, a popular subreddit on Reddit. The program processes the comments and identifies the most frequently mentioned stock tickers.";
const PittsburghNeighborhoodDescription: string =
    "Collaborative project that employs advanced data analysis techniques to rank neighborhoods in Pittsburgh based on various regional parameters. We leveraged diverse datasets, including fire data, restaurant inspections, and asbestos permits/removals, to generate insights and identify patterns.";
const BigBensDescription: string =
    "As part of The Odin Project's curriculum, I created an imaginary BBQ restaurant website using JavaScript DOM manipulation. Through the use of DOM manipulation, I was able to dynamically create and update page elements, providing a seamless user experience.";
const BeSocialDescription: string =
    "Collaborative class project for Database Management Systems at the University of Pittsburgh. We implemented a database for a social media application using PostgreSQL and used JDBC to connect to it and build a CLI program";
const MillipedeDescription: string =
    "As part of my Computer Architecture and Assembly Language (CS447) course, we designed and programmed a version of the popular game 'Millipede' using a modified MIPS assembly language. To enhance the organization of the code, we implemented a Model-View-Controller (MVC) design pattern.";
const FileSystemDescription: string =
    "Using a modified version of Debian Linux, alongside FUSE, a Linux kernel extension, created a user space program to implement a file system. Implemented syscalls for mkdir, rmdir, mknod, read, write, and more.";
const WikiDescription: string =
    "Created a Discord bot that utilizes the Wikipedia API to enable users to obtain a summary of any article they search for. Additionally, the bot features a language switcher that allows users to choose their preferred language, as well as a feature that retrieves a random Wikipedia article.";
const MediLingoDescription: string =
    "Project for the Pitt Challenge 2023 Hackathon. Built a full-stack web application using the MERN Stack and TypeScript that helps users learn about specific medical conditions in an easily digestible format. Won two tracks: Health Literacy and Best Use of MongoDB.";
const PittCSWikiDescrption: string =
    "Refactored the old Pitt Computer Science Club Wikipedia from Gatsby to Next.js. The original website was difficult to maintain and very flakey. I aimed to rewrite the site in Next.js in order to fix these problems and make it easier for future maintainers to work on.";
const PittGymTrackerDescription: string =
    "Created a website to display the number of people at Pitt's various recreational facilities. I leveraged AWS Lambda, AWS Event Bridge, AWS ECR, Docker, and GitHub actions to create a CI/CD pipeline for the scraper I implemented with Python and BeautifulSoup. For the Frontend, I used Next.js and deployed the site using Vercel.";

const Projects = () => {
    return (
        <div className="projects__element-container">
            <div className="projects__container">
                {/* Pitt Gym Tracker*/}
                <Project
                    imageSrc={Pitt_Gym_Tracker}
                    name="Pitt Gym Tracker"
                    description={PittGymTrackerDescription}
                    keywords={[
                        "TypeScript",
                        "Next.js",
                        "AWS Lambda",
                        "AWS Event Bridge",
                        "AWS ECR",
                        "Docker",
                        "Python",
                        "GitHub Actions",
                        "Personal Project",
                    ]}
                    link="https://github.com/Steven-Jarmell/Pitt-Gym-Tracker"
                />

                {/* CSC Internship Repo */}
                <Project
                    imageSrc={CSC_Internship_Repo}
                    name="CSC Internship Website"
                    description={CSCWebsiteDescription}
                    keywords={[
                        "TypeScript",
                        "React",
                        "Express",
                        "Node",
                        "MongoDB",
                        "Figma",
                        "Personal Project",
                    ]}
                    link="https://github.com/Steven-Jarmell/CSC-Internships"
                />

                {/* Pitt CS Wiki */}
                <Project
                    imageSrc={Pitt_CS_Wiki}
                    name="Pitt Computer Science Wiki"
                    description={PittCSWikiDescrption}
                    keywords={["TypeScript", "Next.js", "Personal Project"]}
                    link="https://github.com/Steven-Jarmell/pittcswiki-next"
                />

                {/* MediLingo */}
                <Project
                    imageSrc={MediLingo}
                    name="MediLingo"
                    description={MediLingoDescription}
                    keywords={[
                        "MongoDB",
                        "Express",
                        "React",
                        "Node",
                        "TypeScript",
                        "Clerk",
                        "Hackathon Project",
                    ]}
                    link="https://github.com/Steven-Jarmell/MediLingo"
                />

                {/* Beefin */}
                <Project
                    imageSrc={Beefin}
                    name="Beefin"
                    description={BeefinDescription}
                    keywords={[
                        "Java",
                        "Spring Boot",
                        "JavaScript",
                        "React",
                        "Firebase",
                        "Docker",
                        "JWT",
                        "Personal Project",
                    ]}
                    link="https://github.com/Steven-Jarmell/Beefin"
                />

                {/* Wordle Clone */}
                <Project
                    imageSrc={Wordle}
                    name="Wordle Clone"
                    description={WordleDescription}
                    keywords={["TypeScript", "React", "Personal Project"]}
                    link="https://github.com/Steven-Jarmell/Wordle-Clone"
                />

                {/* Reddit Scraper */}
                <Project
                    imageSrc={Reddit_Scraper}
                    name="Reddit Web Scraper"
                    description={RedditScraperDescription}
                    keywords={[
                        "Python",
                        "Selenium",
                        "Pandas",
                        "NumPy",
                        "Personal Project",
                    ]}
                    link="https://github.com/Steven-Jarmell/RedditScraper"
                />

                {/* Pittsburgh's Best Neighborhood */}
                <Project
                    imageSrc={CS10_Map}
                    name="Pittsburgh's Best Neighborhood"
                    description={PittsburghNeighborhoodDescription}
                    keywords={["Python", "Pandas", "Class Project"]}
                    link="https://github.com/Steven-Jarmell/CS0010-FinalProject"
                />

                {/* Big Bens BBQ */}
                <Project
                    imageSrc={Big_Bens}
                    name="Big Ben's BBQ"
                    description={BigBensDescription}
                    keywords={["JavaScript", "Webpack", "Personal Project"]}
                    link="https://github.com/Steven-Jarmell/restaurant-page"
                />

                {/* BeSocial */}
                <Project
                    imageSrc={BeSocial}
                    name="BeSocial"
                    description={BeSocialDescription}
                    keywords={["PostgreSQL", "Java", "JDBC", "Class Project"]}
                />

                {/* Millipede */}
                <Project
                    imageSrc={Millipede}
                    name="Millipede"
                    description={MillipedeDescription}
                    keywords={["MIPS Assembly", "Class Project"]}
                />

                {/* File System */}
                <Project
                    imageSrc={Tux}
                    name="File System"
                    description={FileSystemDescription}
                    keywords={["C", "Linux", "Class Project"]}
                />

                {/* Wikipedia Bot */}
                <Project
                    imageSrc={Wiki_Bot}
                    name="Wikipedia Discord Bot"
                    description={WikiDescription}
                    keywords={["Python", "API", "Personal Project"]}
                    link="https://github.com/Steven-Jarmell/Wikipedia-Bot"
                />
            </div>
        </div>
    );
};

export default Projects;

import "../../Styles/Projects.css";
import Project from "./Project";
import CSC_Internship_Repo from "../../assets/csc-internship-repo.jpg";
import Beefin from "../../assets/beefin.jpg";
import Big_Bens from "../../assets/big-bens.jpg";
import CS10_Map from "../../assets/cs10-map.png";
import Millipede from "../../assets/csc-internship-repo.jpg";
import Reddit_Scraper from "../../assets/reddit-scraper.jpg";
import Tux from "../../assets/tux.jpg";
import Wordle from "../../assets/wordle.jpg";
import Wiki_Bot from "../../assets/wiki-bot.jpg";
import BeSocial from "../../assets/besocial.jpg";

const CSCWebsiteDescription: string =
    "Designed and implemented a proof-of-concept website to replace the original CSC Internship Repository. Allows users to sign in with GitHub OAuth, add new jobs, as well as filter existing jobs. All newly added job postings undergo a rigorous review process by an admin before being published. The platform offers a more efficient, streamlined way to connect aspiring interns with potential employers.";
const BeefinDescription: string =
    "Collaborative project which created a full-stack social media workout app, leveraging a microservice backend architecture based on Java Spring Boot. We seamlessly connected the backend to the frontend using RESTful APIs and Json Web Tokens, resulting in a robust, secure, and scalable application.";
const WordleDescription: string =
    "Created a clone of the popular game 'Wordle' while learning React and TypeScript. In addition to the core game mechanics, I added a feature to allow for multiple games to be played daily, enhancing the user experience.";
const RedditScraperDescription: string =
    "Developed a program that utilizes web scraping to extract data from r/wallstreetbets, a popular subreddit on Reddit. The program processes the comments and identifies the most frequently mentioned stock tickers.";
const PittsburghNeighborhoodDescription =
    "Collaborative project that employs advanced data analysis techniques to rank neighborhoods in Pittsburgh based on various regional parameters. We leveraged diverse datasets, including fire data, restaurant inspections, and asbestos permits/removals, to generate insights and identify patterns.";
const BigBensDescription =
    "As part of The Odin Project's curriculum, I created an imaginary BBQ restaurant website using JavaScript DOM manipulation. Through the use of DOM manipulation, I was able to dynamically create and update page elements, providing a seamless user experience.";
const BeSocialDescription =
    "Collaborative class project for Database Management Systems at the University of Pittsburgh. We implemented a database for a social media application using PostgreSQL and used JDBC to connect to it and build a CLI program";

const Projects = () => {
    return (
        <div className="projects__element-container">
            <div className="projects__container">
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
                <Project imageSrc={BeSocial} name="BeSocial" description={BeSocialDescription} keywords={["PostgreSQL", "Java", "JDBC", "Class Project"]} />

                {/* Malloc */}

                {/* Millipede */}

                {/* File System */}

                {/* Wikipedia Bot */}
            </div>
        </div>
    );
};

export default Projects;

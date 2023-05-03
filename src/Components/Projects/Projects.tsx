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
    ""

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

                {/* Pittsburghs Best Neighborhood */}

                {/* CSC Hacks Project */}

                {/* Big Bens BBQ */}

                {/* BeSocial */}

                {/* Malloc */}

                {/* Millipede */}

                {/* File System */}

                {/* Wikipedia Bot */}
            </div>
        </div>
    );
};

export default Projects;

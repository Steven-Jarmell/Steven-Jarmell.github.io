import "./index.css";

// ── Local image imports ───────────────────────────────────────────────────────
import MyPhoto from "./images/new-picture-of-me.jpg";
import CSCInternshipWebsite from "./images/CSC Internship Website.jpg";
import InternshipWebsite from "./images/internship-website.jpg";
import WordleScreenshot from "./images/wordle-screenshot.png";
import BigBensBBQ from "./images/big-bens-bbq.jpg";
import CS10Map from "./images/cs10-map.png";

// ── V1 App (faithful recreation of Version_1.0 branch) ───────────────────────

const AppV1 = () => {
    return (
        <div className="v1-root">
            {/* Navbar */}
            <nav className="header-container">
                <a href="https://github.com/Steven-Jarmell" target="_blank" rel="noreferrer" className="link">GitHub</a>
                <a href="https://github.com/Steven-Jarmell/Resume/blob/main/Steven_Jarmell_Resume.pdf" target="_blank" rel="noreferrer" className="link">Resume</a>
                <a href="https://www.linkedin.com/in/Jarmell" target="_blank" rel="noreferrer" className="link">LinkedIn</a>
                <a href="mailto:jarmellsteve@yahoo.com" target="_blank" rel="noreferrer" className="link">Email</a>
            </nav>

            {/* Introduction */}
            <section className="intro" id="home">
                <h1 className="section-title section-title-intro">
                    <strong>Steven Jarmell</strong>
                </h1>
                <p className="section-subtitle section-subtitle-intro">
                    software developer
                </p>
                <img src={MyPhoto} alt="Picture of Myself" className="intro-image" />
            </section>

            {/* About */}
            <section className="about" id="about">
                <h2 className="section-title section-title-about">About Me</h2>
                <p className="section-subtitle section-subtitle-about"></p>
                <div className="about-info">
                    <p>Hi, my name is Steven Jarmell and I am a Junior at the University of Pittsburgh. This upcoming summer, I will be a Software Development Engineer Intern at Amazon in Boston.</p>
                    <p>Outside of my classes, I am currently learning full stack development and cloud computing.</p>
                </div>
            </section>

            {/* My Work */}
            <section className="my-work" id="work">
                <h2 className="section-title section-title-work">My Work</h2>
                <p className="section-subtitle section-subtitle-about"></p>
                <div className="portfolio">
                    <div className="portfolio-item">
                        <a href="https://github.com/Steven-Jarmell/CSC-Internships" className="portfolio-item-title">
                            <span className="material-symbols-outlined">open_in_new</span>
                            Upgraded Internship Website
                        </a>
                        <img src={CSCInternshipWebsite} alt="Screenshot of New Internship Website" className="portfolio-image" />
                        <p><b>Description:</b></p>
                        <p>Built out a proof of concept for a website to replace the CSC Internship GitHub Repo</p>
                        <p>Users can login with GitHub OAuth in order to add jobs which are sent to a queue for the moderators to review</p>
                        <p>Uses Redux and RTK Queries to cache Users, Jobs, and Filters</p>
                        <p>Technology Used: TypeScript, React, Redux, Node, Express, MongoDB</p>
                    </div>
                    <div className="portfolio-item">
                        <a href="https://github.com/Steven-Jarmell/CSC-Hacks-2022" className="portfolio-item-title">
                            <span className="material-symbols-outlined">open_in_new</span>
                            Internship Website
                        </a>
                        <img src={InternshipWebsite} alt="Screenshot of Internship Website" className="portfolio-image" />
                        <p><b>Description:</b></p>
                        <p>Hackathon Submission for CSC Hacks 2022</p>
                        <p>Front-End for the CSC Internship Repo that allows for users to filter jobs</p>
                        <p>Technology Used: TypeScript, JavaScript, React, Node, Express, MongoDB</p>
                    </div>
                    <div className="portfolio-item">
                        <a href="https://steven-jarmell.github.io/Wordle-Clone/" className="portfolio-item-title">
                            <span className="material-symbols-outlined">open_in_new</span>
                            Wordle Clone
                        </a>
                        <img src={WordleScreenshot} alt="Screenshot of Wordle Game" className="portfolio-image" />
                        <p><b>Description:</b></p>
                        <p>Fully-functional clone of the popular game Wordle</p>
                        <p>Altered the game to allow users to play rounds back-to-back with randomly pooled words.</p>
                        <p>Technology Used: TypeScript, React</p>
                    </div>
                    <div className="portfolio-item">
                        <a href="https://steven-jarmell.github.io/restaurant-page/" className="portfolio-item-title">
                            <span className="material-symbols-outlined">open_in_new</span>
                            Restaurant Website
                        </a>
                        <img src={BigBensBBQ} alt="Big Bens BBQ Screenshot" className="portfolio-image" />
                        <p><b>Description:</b></p>
                        <p>Website for a fictional restaurant made as part of the Odin Project's Curriculum</p>
                        <p>Technology Used: HTML, CSS, JavaScript, Webpack</p>
                    </div>
                    <div className="portfolio-item">
                        <a href="https://github.com/Steven-Jarmell/CS0010-FinalProject" className="portfolio-item-title">
                            <span className="material-symbols-outlined">open_in_new</span>
                            Best Neighborhood in Pittsburgh
                        </a>
                        <img src={CS10Map} alt="Final Neighborhood Map Screenshot" className="portfolio-image" />
                        <p><b>Description:</b></p>
                        <p>Final Project for CS0010: Intro to Computing</p>
                        <p>Ranks neighborhoods in Pittsburgh by analyzing regional data using parameters such as fire data, restaurant inspections, and asbestos permits/removals</p>
                        <p>Technology Used: Python, Pandas, NumPy, GeoPandas</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AppV1;

import "../../Styles/Projects.css"
import Project from './Project';
import CSC_Internship_Repo from "../../assets/csc-internship-repo.jpg";
import Beefin from "../../assets/beefin.jpg";
import Big_Bens from "../../assets/big-bens.jpg";
import CS10_Map from "../../assets/cs10-map.png";
import Millipede from "../../assets/csc-internship-repo.jpg";
import Reddit_Scraper from "../../assets/reddit-scraper.jpg";
import Tux from "../../assets/tux.jpg";
import Wordle from "../../assets/wordle.jpg";
import Wiki_Bot from "../../assets/wiki-bot.jpg";
import BeSocial from "../../assets/besocial.jpg"

const CSCWebsiteDescription = "Designed and implemented a proof-of-concept website to replace the original CSC Internship Repository. Allows users to sign in with GitHub OAuth, add new jobs, as well as filter existing jobs. Jobs that are added get sent to an admin only dashboard where they are reviewed before being published.";

const Projects = () => {
    return (
        <div className="projects__element-container">

            <div className="projects__container">
                {/* CSC Internship Repo */}
                <Project imageSrc={CSC_Internship_Repo} name="CSC Internship Website" description={CSCWebsiteDescription} keywords={["TypeScript", "React", "Express", "Node", "MongoDB"]} link="https://github.com/Steven-Jarmell/CSC-Internships"/>
                {/* Beefin */}

                {/* Wordle Clone */}

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
    )
}

export default Projects;
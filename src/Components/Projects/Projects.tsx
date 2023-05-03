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


const Projects = () => {
    return (
        <div className="projects__element-container">
            <div className="projects__container">
                {/* CSC Internship Repo */}
                <Project imageSrc={CSC_Internship_Repo} name="CSC Internship Website" description="Test" keywords={["TypeScript", "React"]}/>
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
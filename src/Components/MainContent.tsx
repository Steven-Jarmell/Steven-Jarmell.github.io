import "../Styles/MainContent.css";
import { BsArrow90DegDown, BsArrowDown } from "react-icons/bs";
import Astronaut from "../assets/astronaut.jpg";
import { useNavigate } from "react-router-dom";
import Projects from "./Projects/Projects";

const MainContent = () => {
    const navigate = useNavigate();

    return (
        <div className="MainContent__wrapper">
            <div className="MainContent__container">
                <div className="MainContent__info">
                    <p>Hey,</p>
                    <p>
                        My name is Steven Jarmell. I'm a {" "}
                        <b>
                            <span className="MainContent__info-pitt">
                                University of Pittsburgh
                            </span>
                        </b>{" "}
                        graduate and a <b>Software Engineer at Amazon Web Services</b>.
                    </p>

                    <div
                        className="MainContent__info-project-link"
                    >
                        <p>Check out my projects below</p>
                        <BsArrowDown />
                    </div>
                </div>
                <div className="MainContent__picture-container">
                    <img
                        src={Astronaut}
                        alt="Astronaut on Computer"
                        className="MainContent__picture"
                    />
                </div>
            </div>
            <Projects />
        </div>
    );
};

export default MainContent;

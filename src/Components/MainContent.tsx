import '../Styles/MainContent.css';
import { BsArrowReturnRight } from "react-icons/bs";
import Astronaut from '../assets/astronaut.png';

const MainContent = () => {
    return (
        <div className="MainContent__container">
            <div className="MainContent__info">
                <p>Hey,</p>
                <p>My name is Steven Jarmell, I'm a Student at the <b><span className="MainContent__info-pitt">University of Pittsburgh</span></b> and a <b>Full-Stack Software Engineer</b>.</p>
                
                <div className="MainContent__info-project-link">
                    <p>Check out my projects</p>
                    <BsArrowReturnRight />
                </div>
            </div>
            <div className="MainContent__picture-container">
                <img src={Astronaut} alt='Astronaut on Computer' className="MainContent__picture"/>
            </div>
        </div>
    )
}

export default MainContent;
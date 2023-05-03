import { BsFileEarmarkPdfFill, BsGithub, BsLinkedin } from "react-icons/bs";
import "../../Styles/Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="header__container">
            <nav className="header__router-nav">
                <p onClick={() => navigate("/")} className="header__router-link">Home</p>
                <p onClick={() => navigate("/projects")} className="header__router-link">Projects</p>
            </nav>
            <nav className="header__social-nav">
                <a className="header__nav-link" target="_blank" href="https://github.com/Steven-Jarmell">
                    <BsGithub/>
                </a>
                <a className="header__nav-link" target="_blank" href="https://www.linkedin.com/in/jarmell/">
                    <BsLinkedin />
                </a>
                <a className="header__nav-link" target="_blank" href="https://github.com/Steven-Jarmell/Resume/blob/main/Steven_Jarmell_Resume_May2023.pdf">
                    <BsFileEarmarkPdfFill />
                </a>
            </nav>
        </div>
    );
};

export default Header;

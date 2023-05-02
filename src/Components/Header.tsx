import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

const Header = () => {
    return (
        <>
            <nav className="header__router-nav">
                
            </nav>
            <nav className="header__social-nav">
                <FaGithubSquare />
                <FaLinkedin />
                <MdEmail />
                <BsFileEarmarkPdfFill />
            </nav>
        </>
    );
};

export default Header;

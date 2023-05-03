import "../../Styles/Project.css";

type Props = {
    imageSrc: string;
    name: string;
    description: string;
    keywords: string[];
    link?: string;
};

const Project = ({ imageSrc, name, description, keywords, link }: Props) => {
    return (
        <div className="project__container">
            <div className="project__image-container">
                <img src={imageSrc} className="project__image" />
            </div>
            <div className="project__info-container">
                <p className="project__name">{name}</p>
                <p className="project__description">{description}</p>
                <div className="project__link-container">
                {link ? (
                    <a target="_blank" href={link} className="project__link">
                        Link to GitHub
                    </a>
                ) : (
                    <p className="project__link">Code Available Upon Request</p>
                )}
                </div>
                <div className="project__keywords-container">
                    <p>Keywords:</p>
                    <ul className="project__keywords-holder">
                        {keywords.map((keyword, i) => (
                            <li key={i} className="project__keyword">
                                {keyword}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project;

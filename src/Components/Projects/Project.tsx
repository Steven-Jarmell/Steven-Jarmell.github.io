import "../../Styles/Project.css";

type Props = {
    imageSrc: string;
    name: string;
    description: string;
    keywords: string[];
};

const Project = ({ imageSrc, name, description, keywords }: Props) => {
    return (
        <div className="project__container">
            <img src={imageSrc} className="project__image" />
            <div className="project__info-container">
                <p className="project__name">{name}</p>
                <p className="project__description">{description}</p>
                <ul className="project__keywords-container">
                    {keywords.map((keyword, i) => (
                        <li key={i} className="project__keyword">
                            {keyword}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Project;

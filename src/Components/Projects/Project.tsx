import { useEffect, useRef, useState } from "react";
import "../../Styles/Project.css";

type Props = {
    imageSrc: string;
    name: string;
    description: string;
    keywords: string[];
    link?: string;
};

const Project = ({ imageSrc, name, description, keywords, link }: Props) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const elementRef = useRef(null);

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries[0].isIntersecting ? setIsAnimated(true) : setIsAnimated(false);
    };

    const options = {
        threshold: 0.7,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    });

    return (
        <div ref={elementRef}>
            <div className={"project__container"}>
                <div className={`project__image-container ${isAnimated ? "animate" : ""}`}>
                    <img src={imageSrc} className="project__image" />
                </div>
                <div className={`project__info-container ${isAnimated ? "animate" : ""}`}>
                    <p className="project__name">{name}</p>
                    <p className="project__description">{description}</p>
                    <div className="project__link-container">
                        {link ? (
                            <a
                                target="_blank"
                                href={link}
                                className="project__link"
                            >
                                Link to GitHub
                            </a>
                        ) : (
                            <p className="project__link">
                                Code Available Upon Request
                            </p>
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
        </div>
    );
};

export default Project;

import React, { useContext } from "react";
import "./Challenge.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SessionContext from "../../context/SessionContext";
import { codeChallengeDataEn } from "../../assets/data/dataEn";
import { codeChallengeDataAr } from "../../assets/data/dataAr";

const Challenge = () => {
  const {
    state: { toggleLan },
  } = useContext(SessionContext);
  const { title, description, content } = codeChallengeDataEn;
  const {
    title: titleAr,
    description: descriptionAr,
    content: contentAr,
  } = codeChallengeDataAr;

  return (
    <section className="code-challenge">
      {console.log("code challenge", toggleLan)}
      <div className="code-challenge-title-info">
        <h1 className="code-challenge-title">{toggleLan ? titleAr : title}</h1>
        <p>{toggleLan ? descriptionAr : description}</p>
      </div>
      <div className="code-challenge-details">
        {toggleLan
          ? contentAr.map((res) => (
              <div className="code-challenge-details-info">
                <div className="code-challenge-details-img">
                  <FontAwesomeIcon icon={res.iconName} size="4x" />
                </div>
                <h3>{res.title}</h3>
                <p>{res.description}</p>
              </div>
            ))
          : content.map((res) => (
              <div className="code-challenge-details-info">
                <div className="code-challenge-details-img">
                  <FontAwesomeIcon icon={res.iconName} size="4x" />
                </div>
                <h3>{res.title}</h3>
                <p>{res.description}</p>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Challenge;

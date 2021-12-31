import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import "./CodeChallenge2.css";
import { codeChallenge2DataEn } from "../../assets/data/dataEn";
import { codeChallenge2DataAr } from "../../assets/data/dataAr";
import SessionContext from "../../context/SessionContext";

const CodeChallenge2 = () => {
  const {
    state: { toggleLan },
  } = useContext(SessionContext);

  const { title, description, content } = codeChallenge2DataEn;
  const {
    title: titleAr,
    description: descriptionAr,
    content: contentAr,
  } = codeChallenge2DataAr;

  return (
    <section className="code-challenge2-container">
      <div className="code-challenge2-title-info">
        <h1 className="code-challenge2-title">{toggleLan ? titleAr : title}</h1>
        <p>{toggleLan ? descriptionAr : description}</p>
      </div>
      <div
        className={
          toggleLan
            ? "code-challenge2-details row-reverse-ar-style"
            : "code-challenge2-details"
        }
      >
        {toggleLan
          ? contentAr.map((res, index) => {
              if (index === contentAr.length - 1) {
                return (
                  <div key={index} className="code-challenge2-details-info">
                    <div className="code-challenge2-details-img">
                      <img src={res.img} />
                    </div>
                    <h3>{res.title}</h3>
                    <p>{res.description}</p>
                  </div>
                );
              } else {
                return (
                  <div key={index} className="code-challenge2-details-info">
                    <div className="code-challenge2-details-img">
                      <img src={res.img} />
                    </div>
                    <h3>{res.title}</h3>
                    <p>{res.description}</p>
                    <div className="right-arrow to-left-ar rotate-180-deg">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                  </div>
                );
              }
            })
          : content.map((res, index) => {
              if (index === contentAr.length - 1) {
                return (
                  <div key={index} className="code-challenge2-details-info">
                    <div className="code-challenge2-details-img">
                      <img src={res.img} />
                    </div>
                    <h3>{res.title}</h3>
                    <p>{res.description}</p>
                  </div>
                );
              } else {
                return (
                  <div key={index} className="code-challenge2-details-info">
                    <div className="code-challenge2-details-img">
                      <img src={res.img} />
                    </div>
                    <h3>{res.title}</h3>
                    <p>{res.description}</p>
                    <div className="right-arrow">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                  </div>
                );
              }
            })}
      </div>
    </section>
  );
};

export default CodeChallenge2;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { ShareImage } from "../../assets/images";
import "./Share.css";
import { sharePhotosEn } from "../../assets/data/dataEn";
import { sharePhotosAr } from "../../assets/data/dataAr";
import SessionContext from "../../context/SessionContext";

const Share = () => {
  const {
    state: { toggleLan },
  } = useContext(SessionContext);

  const { title, content, btnText } = sharePhotosEn;
  const {
    title: titleAr,
    content: contentAr,
    btnText: btnTextAr,
  } = sharePhotosAr;

  return (
    <section className="share_container">
      <div className={toggleLan ? "share row-reverse-ar-style" : "share"}>
        <div
          className={
            toggleLan ? "share-details text-align-end" : "share-details"
          }
        >
          <h1 className={toggleLan ? "mg-L" : ""}>
            {toggleLan ? titleAr : title}
          </h1>
          {toggleLan
            ? contentAr.map((res) => (
                <div className="share-details-info row-reverse-ar-style">
                  <div className="share-details-icon">
                    <FontAwesomeIcon icon={res.icon} />
                  </div>
                  <p>{res.description}</p>
                </div>
              ))
            : content.map((res) => (
                <div className="share-details-info">
                  <div className="share-details-icon">
                    <FontAwesomeIcon icon={res.icon} />
                  </div>
                  <p>{res.description}</p>
                </div>
              ))}
          <a>{toggleLan ? btnTextAr : btnText}</a>
        </div>
        <div className="share_img">
          <img src={ShareImage} />
        </div>
      </div>
    </section>
  );
};

export default Share;

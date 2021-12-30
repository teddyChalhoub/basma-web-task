import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { ToolsImage } from "../../assets/images";
import "./Tools.css";
// import {
//   faCheck,
//   faBell,
//   faEnvelopeOpen,
//   faVideo,
// } from "@fortawesome/free-solid-svg-icons";
import { toolsDataEn } from "../../assets/data/dataEn";
import { toolsDataAr } from "../../assets/data/dataAr";
import SessionContext from "../../context/SessionContext";

const Tools = () => {
  const {
    state: { toggleLan },
  } = useContext(SessionContext);

  const { title, content, icons } = toolsDataEn;
  const { title: titleAr, content: contentAr, icons: iconsAr } = toolsDataAr;

  return (
    <section className="tools_container">
      <div className={toggleLan ? "tools row-reverse-ar-style" : "tools"}>
        <div className="tools_img">
          <img src={ToolsImage} />
        </div>
        <div
          className={
            toggleLan ? "tools-details  text-align-end" : "tools-details"
          }
        >
          <h1>{toggleLan ? titleAr : title}</h1>
          {toggleLan
            ? contentAr.map((res) => (
                <div className="tools-details-info row-reverse-ar-style">
                  <FontAwesomeIcon icon={res.icon} color="#741EF7" />
                  <p>{res.description}</p>
                </div>
              ))
            : content.map((res) => (
                <div className="tools-details-info">
                  <FontAwesomeIcon icon={res.icon} color="#741EF7" />
                  <p>{res.description}</p>
                </div>
              ))}
          <div
            className={
              toggleLan
                ? "tools-details-icons row-reverse-ar-style mg-L"
                : "tools-details-icons"
            }
          >
            {icons.map((res) => (
              <div className="tools-details-icon">
                <FontAwesomeIcon icon={res} color="#741EF7" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;

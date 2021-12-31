import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { HeaderImage } from "../../assets/images";
import { faChevronUp, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import "./HeaderAr.css";
import NavbarBurgerMenu from "../navBarBurger/NavbarBurgerMenu";
import { headerDataEn } from "../../assets/data/dataEn";
import { headerDataAr } from "../../assets/data/dataAr";
import SessionContext from "../../context/SessionContext";

const Header = () => {
  const {
    state: { toggleLan },
    actions: { handleToggleAr, handleToggleEn },
  } = useContext(SessionContext);
  const [toggle, setToggle] = useState(false);
  const { nav, content } = headerDataEn;
  const { nav: navAr, content: contentAr } = headerDataAr;

  const closeModel = () => {
    setToggle(!toggle);
  };

  return (
    <header className={toggleLan ? "header-ar" : "header-en"}>
      <nav id="nav_bar">
        <ul className={toggleLan ? "row-reverse-ar-style" : ""}>
          {toggleLan
            ? navAr.map((res) => (
                <li>
                  <a href="#">{res}</a>
                </li>
              ))
            : nav.map((res) => (
                <li>
                  <a href="#">{res}</a>
                </li>
              ))}
        </ul>
        <a
          onClick={() => setToggle(true)}
          className={
            toggleLan
              ? "burger-icon-media mg-R remove-mg-L"
              : "burger-icon-media"
          }
          href="#"
        >
          <FontAwesomeIcon icon={faBars} />
        </a>
      </nav>
      <div className={toggleLan ? "header row-reverse-ar-style" : "header"}>
        <div
          className={toggleLan ? "header-title text-align-end" : "header-title"}
        >
          <h1 className={toggleLan ? "mg-L" : ""}>
            {toggleLan ? contentAr.title : content.title}
          </h1>
          <p>{toggleLan ? contentAr.description : content.description}</p>
          <a href="#" className={toggleLan ? "mg-L" : ""}>
            {toggleLan ? contentAr.button : content.button}
          </a>
        </div>
        <div className="header_image-info">
          <div className={toggleLan ? "header_image mg-L" : "header_image"}>
            <img src={HeaderImage} />
          </div>
        </div>
      </div>

      <a className="to-top" href="#nav_bar">
        <FontAwesomeIcon icon={faChevronUp} />
      </a>
      <NavbarBurgerMenu toggle={toggle} closeModel={closeModel} />
      <div
        className={
          toggleLan ? "header-lan-Bar-ar to-right-ar" : "header-lan-Bar"
        }
      >
        <a href="#" onClick={handleToggleAr}>
          {toggleLan ? "عربي" : "AR"}
        </a>
        <a href="#" onClick={handleToggleEn}>
          {toggleLan ? "إنجليزي" : "EN"}
        </a>
      </div>
    </header>
  );
};

export default Header;

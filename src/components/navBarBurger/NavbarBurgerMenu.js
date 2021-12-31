import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { createPortal } from "react-dom";
import "./NavbarBurgerMenu.css";
import { headerDataEn } from "../../assets/data/dataEn";
import { headerDataAr } from "../../assets/data/dataAr";
import SessionContext from "../../context/SessionContext";

const NavbarBurgerMenu = ({ toggle, closeModel }) => {
  const {
    state: { toggleLan },
  } = useContext(SessionContext);

  const { nav } = headerDataEn;
  const { nav: navAr } = headerDataAr;

  if (!toggle) {
    return null;
  } else {
    return createPortal(
      <div className="burger-nav">
        <div className="burger-nav-links">
          <ul>
            {toggleLan
              ? navAr.map((res, index) => (
                  <li key={index}>
                    <a href="#">{res}</a>
                  </li>
                ))
              : nav.map((res, index) => (
                  <li key={index}>
                    <a href="#">{res}</a>
                  </li>
                ))}
          </ul>
        </div>
        <div onClick={closeModel} className="burger-nav-close">
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>,
      document.getElementById("model")
    );
  }
};

export default NavbarBurgerMenu;

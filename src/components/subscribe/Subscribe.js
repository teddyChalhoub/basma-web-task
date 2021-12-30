import React, { useContext } from "react";
import "./Subscribe.css";
import { subscribeDataEn } from "../../assets/data/dataEn";
import { subscribeDataAr } from "../../assets/data/dataAr";
import SessionContext from "../../context/SessionContext";

const Subscribe = () => {
  const {
    state: { toggleLan },
  } = useContext(SessionContext);
  const { title, description, input, btnInputText } = subscribeDataEn;
  const {
    title: titleAr,
    description: descriptionAr,
    input: inputAr,
    btnInputText: btnInputTextAr,
  } = subscribeDataAr;
  return (
    <section className="subscribe-container">
      <div className="subscribe-info">
        <h1>{toggleLan ? titleAr : title}</h1>
        <p>{toggleLan ? descriptionAr : description}</p>
        <div className="subscribe-inputs">
          <input
            type="text"
            name="email"
            placeholder={toggleLan ? inputAr.placeholder : input.placeholder}
          />
          <input
            type="submit"
            value={toggleLan ? btnInputTextAr : btnInputText}
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

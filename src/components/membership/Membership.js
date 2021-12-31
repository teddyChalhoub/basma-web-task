import React, { useContext, useState } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import "./Membership.css";
import { membershipDataEn } from "../../assets/data/dataEn";
import { membershipDataAr } from "../../assets/data/dataAr";
import SessionContext from "../../context/SessionContext";

const Membership = () => {
  const [toggle, setToggle] = useState(false);

  const {
    state: { toggleLan },
  } = useContext(SessionContext);

  const { title, description, content, info, btnText } = membershipDataEn;
  const {
    title: titleAr,
    description: descriptionAr,
    content: contentAr,
    info: infoAr,
    btnText: btnTextAr,
  } = membershipDataAr;

  const closeModel = () => {
    setToggle(!toggle);
  };
  return (
    <section className="membership-container">
      <div className="membership-title-info">
        <h1 className="membership-title">{toggleLan ? titleAr : title}</h1>
        <p>{toggleLan ? descriptionAr : description}</p>
      </div>
      <div
        className={
          toggleLan
            ? "membership-details-message row-reverse-ar-style"
            : "membership-details-message"
        }
      >
        {toggleLan
          ? contentAr.map((res, index) => (
              <div key={index} className="membership-details">
                <div className="membership-details-img">
                  <img src={res.img} />
                </div>
                <h1>{res.title}</h1>
                <h1>
                  <span className="dollar-sign">{res.price.sign}</span>
                  <span className="price">{res.price.nb}</span>
                </h1>
                <div className="membership-details-info">
                  {res.details.map((res, ind) => (
                    <p key={ind}>{res}</p>
                  ))}
                </div>
                <a onClick={closeModel}>{toggleLan ? btnTextAr : btnText}</a>
              </div>
            ))
          : content.map((res, index) => (
              <div key={index} className="membership-details">
                <div className="membership-details-img">
                  <img src={res.img} />
                </div>
                <h1>{res.title}</h1>
                <h1>
                  <span className="dollar-sign">{res.price.sign}</span>
                  <span className="price">{res.price.nb}</span>
                </h1>
                <div className="membership-details-info">
                  {res.details.map((res, ind) => (
                    <p key={ind}>{res}</p>
                  ))}
                </div>
                <a onClick={closeModel}>{toggleLan ? btnTextAr : btnText}</a>
              </div>
            ))}
      </div>
      <p>
        {toggleLan ? infoAr.message : info.message}{" "}
        <a href="#">{toggleLan ? infoAr.linkText : info.linkText}</a>
      </p>
      <SignUpForm toggle={toggle} closeModel={closeModel} />
    </section>
  );
};

export default Membership;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import "./Contact.css";
import "./ContactAr.css";
import { contactDataEn } from "../../assets/data/dataEn";
import { contactDataAr } from "../../assets/data/dataAr";
import SessionContext from "../../context/SessionContext";

const Contact = () => {
  const {
    state: { toggleLan },
  } = useContext(SessionContext);
  const { title, description, info, mail, btnText } = contactDataEn;
  const {
    title: titleAr,
    description: descriptionAr,
    info: infoAr,
    mail: mailAr,
    btnText: btnTextAr,
  } = contactDataAr;

  return (
    <section className="contact-container">
      <div className="contact-title-info">
        <h1 className="contact-title">{toggleLan ? titleAr : title}</h1>
        <p>{toggleLan ? descriptionAr : description}</p>
      </div>
      <div
        className={toggleLan ? "contact-info text-align-end" : "contact-info"}
      >
        <div className="contact-info-details">
          <p>{toggleLan ? infoAr.description : info.description}</p>
          {toggleLan
            ? infoAr.details.map((res, index) => (
                <div
                  key={index}
                  className="contact-details-description row-reverse-ar-style"
                >
                  <div className="contact-details-icon">{res.icon}</div>
                  <p>{res.message}</p>
                </div>
              ))
            : info.details.map((res, index) => (
                <div key={index} className="contact-details-description">
                  <div className="contact-details-icon">{res.icon}</div>
                  <p>{res.message}</p>
                </div>
              ))}
        </div>
        <div className="contact-form-inputs">
          <form method="post" action="#" id="contact-form">
            {toggleLan
              ? mailAr.map((res, index) => {
                  if (index === mailAr.length - 1) {
                    return (
                      <textarea
                        className="text-align-end"
                        rows="6"
                        cols="50"
                        name={res.name}
                        placeholder={res.placeholder}
                        form="contact-form"
                      ></textarea>
                    );
                  } else {
                    return (
                      <input
                        className="text-align-end"
                        key={index}
                        type="text"
                        name={res.name}
                        placeholder={res.placeholder}
                      />
                    );
                  }
                })
              : mail.map((res, index) => (
                  <input
                    key={index}
                    type="text"
                    name={res.name}
                    placeholder={res.placeholder}
                  />
                ))}
            <div className="submit-icon">
              <span className={toggleLan ? "icon-ar" : "icon"}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
              <input type="submit" value={toggleLan ? btnTextAr : btnText} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

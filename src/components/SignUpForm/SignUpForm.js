import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./SignUpForm.css";
import { signUpFormDataEn } from "../../assets/data/dataEn";
import { signUpFormDataAr } from "../../assets/data/dataAr";
import SessionContext from "../../context/SessionContext";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA_SECRET_KEY } from "../../assets/secretKey";

const SignUpForm = ({ toggle, closeModel }) => {
  const {
    state: { toggleLan, errors, message },
    actions: { handleSubmit, handleFormResetMessages },
  } = useContext(SessionContext);

  const { title, inputs, btnText } = signUpFormDataEn;
  const {
    title: titleAr,
    inputs: inputsAr,
    btnText: btnTextAr,
  } = signUpFormDataAr;

  const [body, setBody] = useState({});

  let captcha = useRef();

  const onChange = (e) => {
    const { name, value } = e.target;
    if (value) {
      setBody((res) => {
        return {
          ...res,
          [name]: value,
        };
      });
    }
  };

  const onChangeRecaptcha = async (e) => {
    e.preventDefault();
    const token = await captcha.current.executeAsync();
    handleSubmit(e, body, token, captcha);
  };

  if (!toggle) {
    return null;
  } else {
    return createPortal(
      <div className="signUp-container">
        <div className="signUp-form">
          <h1>{toggleLan ? titleAr : title}</h1>
          {message && (
            <p className="error-message text-align-center">{message}</p>
          )}
          <form method="post" onSubmit={(e) => onChangeRecaptcha(e)}>
            {toggleLan
              ? inputsAr.map((res, index) => (
                  <div className="input-group">
                    <input
                      key={index}
                      className="text-align-end"
                      type={res.type}
                      onChange={onChange}
                      name={res.name}
                      placeholder={res.placeholder}
                    />
                    {errors && (
                      <p className="error-message text-align-end">
                        {errors[res.name]}
                      </p>
                    )}
                  </div>
                ))
              : inputs.map((res, index) => (
                  <div className="input-group">
                    <input
                      key={index}
                      type={res.type}
                      onChange={onChange}
                      name={res.name}
                      placeholder={res.placeholder}
                    />
                    {errors && (
                      <p className="error-message">{errors[res.name]}</p>
                    )}
                  </div>
                ))}
            <ReCAPTCHA
              ref={captcha}
              className="recaptcha-field"
              size="invisible"
              sitekey={RECAPTCHA_SECRET_KEY}
            />
            <input type="submit" value={toggleLan ? btnTextAr : btnText} />
          </form>
          <div
            onClick={() => {
              closeModel();
              handleFormResetMessages();
            }}
            className="signUp-form-close"
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      </div>,
      document.getElementById("signUp")
    );
  }
};

export default SignUpForm;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./SignUpForm.css";
import axios from "axios";
import { signUpFormDataEn } from "../../assets/data/dataEn";
import { signUpFormDataAr } from "../../assets/data/dataAr";
import SessionContext from "../../context/SessionContext";
import ReCAPTCHA from "react-google-recaptcha";

const SignUpForm = ({ toggle, closeModel }) => {
  const {
    state: { toggleLan },
  } = useContext(SessionContext);

  const { title, inputs, btnText } = signUpFormDataEn;
  const {
    title: titleAr,
    inputs: inputsAr,
    btnText: btnTextAr,
  } = signUpFormDataAr;

  const [body, setBody] = useState({});
  const [message, setMessage] = useState("");
  let captcha = null;

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

  const handleSubmit = async (e) => {
    console.log({ recaptchaToken: captcha.getValue() });
    console.log({ body });
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/admin/user-register",
        body,
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            recaptchaToken: captcha.getValue(),
          },
        }
      );
      const data = response.data;
      setMessage(data.message);
      captcha.reset();
    } catch (err) {
      console.log({ error: err?.response?.data });
      console.log({ error2: err?.message });
      captcha.reset();
    }
  };

  if (!toggle) {
    return null;
  } else {
    return createPortal(
      <div className="signUp-container">
        <div className="signUp-form">
          <h1>{toggleLan ? titleAr : title}</h1>
          {message && (
            <p
              style={{
                color: "red",
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              {message}
            </p>
          )}
          <form method="post" onSubmit={handleSubmit}>
            {toggleLan
              ? inputsAr.map((res, index) => (
                  <input
                    key={index}
                    className="text-align-end"
                    type={res.type}
                    onChange={onChange}
                    name={res.name}
                    placeholder={res.placeholder}
                  />
                ))
              : inputs.map((res, index) => (
                  <input
                    key={index}
                    type={res.type}
                    onChange={onChange}
                    name={res.name}
                    placeholder={res.placeholder}
                  />
                ))}
            <ReCAPTCHA
              sitekey="6Le5xNwdAAAAADs9h-KhOOP6nS4CyCxPo6Uyyz6b"
              // onChange={onChangeCaptcha}
              ref={(el) => {
                captcha = el;
              }}
            />
            <input type="submit" value={toggleLan ? btnTextAr : btnText} />
          </form>
          <div
            onClick={() => {
              closeModel();
              setMessage("");
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

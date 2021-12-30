import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import "./SignUpForm.css";
import axios from "axios";
import { signUpFormDataEn } from "../../assets/data/dataEn";
import { signUpFormDataAr } from "../../assets/data/dataAr";
import SessionContext from "../../context/SessionContext";

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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        name,
        email,
        password,
      };
      const response = await axios.post(
        "https://fathomless-shelf-22509.herokuapp.com/api/admin/user-register",
        body,
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = response.data;
      setMessage(data.message);
    } catch (err) {
      console.log({ error: err?.response?.data?.message });
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
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    name={res.name}
                    placeholder={res.placeholder}
                  />
                ))
              : inputs.map((res, index) => (
                  <input
                    key={index}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    name={res.name}
                    placeholder={res.placeholder}
                  />
                ))}
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

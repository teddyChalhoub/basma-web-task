import axios from "axios";
import React, { useState } from "react";
import SessionContext from "./SessionContext";

const SessionProvider = ({ children }) => {
  const [toggleLan, setToggleLan] = useState(false);
  const [errors, setErrors] = useState(null);
  const [message, setMessage] = useState("");

  const handleToggleEn = () => {
    setToggleLan(false);
  };

  const handleToggleAr = () => {
    setToggleLan(true);
  };

  const handleFormResetMessages = () => {
    setMessage("");
    setErrors(null);
  };

  const handleSubmit = async (e, body, recaptchaToken, captcha) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://fathomless-shelf-22509.herokuapp.com/api/user/user-register",
        body,
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            recaptchaToken,
          },
        }
      );
      const data = response.data;
      setMessage(data.message);
      setErrors(null);
      captcha.current.reset();
    } catch (err) {
      if (err?.response?.status === 401) {
        setMessage(err?.response?.data?.message);
        setErrors(null);
      } else if (err?.response?.status === 400) {
        setMessage("");
        setErrors(err?.response?.data?.errors);
      } else {
        setMessage(
          "Please try again! Contact our support team if the issue is not resolved"
        );
        setErrors(null);
      }
      captcha.current.reset();
    }
  };

  const context = {
    state: { toggleLan, errors, message },
    actions: {
      handleToggleEn,
      handleToggleAr,
      handleSubmit,
      handleFormResetMessages,
    },
  };
  return (
    <SessionContext.Provider value={context}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;

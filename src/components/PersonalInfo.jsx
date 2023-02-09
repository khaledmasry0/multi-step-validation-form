import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [nameCheck, setNameCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneCheck, setPhoneCheck] = useState(false);
  const navigate = useNavigate();

  // Handling errors of empty Fields

  const handleNameBlur = (e) => {
    if (/[a-z] [a-z]/gi.test(name)) {
      e.target.parentElement.children[0].children[0].style.display = "none";
      e.target.parentElement.children[1].style.borderColor =
        "hsl(229, 24%, 87%)";
      setNameCheck(true);
    } else {
      e.target.parentElement.children[0].children[0].style.display = "block";
      e.target.parentElement.children[1].style.borderColor =
        "hsl(354, 84%, 57%)";
    }
  };

  const handleEmailBlur = (e) => {
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
      e.target.parentElement.children[2].children[0].style.display = "none";
      e.target.parentElement.children[3].style.borderColor =
        "hsl(229, 24%, 87%)";
      setEmailCheck(true);
    } else {
      e.target.parentElement.children[2].children[0].style.display = "block";
      e.target.parentElement.children[3].style.borderColor =
        "hsl(354, 84%, 57%)";
      setEmailCheck(false);
    }
  };

  const handlePhoneBlur = (e) => {
    if (
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone)
    ) {
      e.target.parentElement.children[4].children[0].style.display = "none";
      e.target.parentElement.children[5].style.borderColor =
        "hsl(229, 24%, 87%)";
      setPhoneCheck(true);
    } else {
      e.target.parentElement.children[4].children[0].style.display = "block";
      e.target.parentElement.children[5].style.borderColor =
        "hsl(354, 84%, 57%)";
      setPhoneCheck(false);
    }
  };

  const handleNextStep = (e) => {
    if (!nameCheck) {
      e.target.parentElement.children[2].children[0].children[0].style.display =
        "block";
    } else if (!emailCheck) {
      e.target.parentElement.children[2].children[2].children[0].style.display =
        "block";
    } else if (!phoneCheck) {
      e.target.parentElement.children[2].children[4].children[0].style.display =
        "block";
    } else {
      navigate("/selectplan");
    }
  };

  return (
    <article className="personal-info">
      <h1 className="main-header">Personal info</h1>
      <p className="main-description">
        Please provide your name, email address, and phone number.
      </p>
      <form>
        <label>
          Name{" "}
          <span
            id="wrongNameField"
            style={{ color: "hsl(354, 84%, 57%)", display: "none" }}
          >
            This field is required
          </span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Stephen King"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleNameBlur}
        />
        <label>
          Email Adress{" "}
          <span
            id="wrongEmailField"
            style={{ color: "hsl(354, 84%, 57%)", display: "none" }}
          >
            This field is required
          </span>
        </label>
        <input
          type="text"
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleEmailBlur}
        />
        <label>
          Phone Number{" "}
          <span
            id="wrongPhoneField"
            style={{ color: "hsl(354, 84%, 57%)", display: "none" }}
          >
            This field is required
          </span>
        </label>
        <input
          type="text"
          placeholder="e.g. +1234567890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={handlePhoneBlur}
        />
      </form>
      <button className="next-step" onClick={handleNextStep}>
        Next Step
      </button>
    </article>
  );
};

export default PersonalInfo;

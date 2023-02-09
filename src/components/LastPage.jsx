import React from "react";
import thankYou from "../assets/images/icon-thank-you.svg";

const LastPage = () => {
  return (
    <section className="thank-you">
      <img src={thankYou} alt="thank-you" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/khaledmasry0"
          target="_blank"
          rel="noreferrer"
        >
          Khaled Mohamed
        </a>
        .
      </div>
    </section>
  );
};

export default LastPage;

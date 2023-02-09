import React, { useState } from "react";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../state/dataSlice";

const SelectPlan = () => {
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let planState = useSelector((state) => state.data.selectPlanData);

  // handle Switch Input

  const handleSwitch = (e) => {
    setToggle(!toggle);
    e.target.parentElement.parentElement.children[0].classList.toggle("active");
    e.target.parentElement.parentElement.children[2].classList.toggle("active");
    for (let i = 0; i < 3; i++) {
      e.target.parentElement.parentElement.previousSibling.children[
        i
      ].classList.remove("active");
    }
    dispatch(updateData({ planName: "", planPrice: "", planPeriod: "" }));
  };

  // handle select plan

  const handlePlanChoice = (e) => {
    let planName = e.target.parentElement.children[2].children[0].innerHTML;
    let planPrice = e.target.parentElement.children[2].children[1].innerHTML;
    for (let i = 0; i < 3; i++) {
      e.target.parentElement.parentElement.children[i].classList.remove(
        "active"
      );
    }
    e.target.parentElement.classList.toggle("active");
    e.target.parentElement.parentElement.nextSibling.nextSibling.style.display =
      "none";
    toggle
      ? dispatch(updateData({ planName, planPrice, planPeriod: "Monthly" }))
      : dispatch(updateData({ planName, planPrice, planPeriod: "Yearly" }));
  };

  //   handle the Go Back Button

  const handleGoBack = () => {
    navigate("/");
  };

  // handle the Next step Button

  const handleNextStep = (e) => {
    planState.planName
      ? navigate("/addons")
      : (e.target.previousSibling.style.display = "block");
  };

  return (
    <article className="select-plan">
      <h1 className="main-header">Select your plan</h1>
      <p className="main-description">
        You have the option of monthly or yearly billing.
      </p>
      <div className="select-plan-cards-container">
        <div className="card" onClick={handlePlanChoice}>
          <div className="layout"></div>
          <img src={iconArcade} alt="icon-arcade" />
          <div>
            <h1>Arcade</h1>
            {toggle ? <p>$9/mo</p> : <p>$90/yr</p>}
          </div>
        </div>
        <div className="card" onClick={handlePlanChoice}>
          <div className="layout"></div>
          <img src={iconAdvanced} alt="icon-arcade" />
          <div>
            <h1>Advanced</h1>
            {toggle ? <p>$12/mo</p> : <p>$120/yr</p>}
          </div>
        </div>
        <div className="card" onClick={handlePlanChoice}>
          <div className="layout"></div>
          <img src={iconPro} alt="icon-arcade" />
          <div>
            <h1>Pro</h1>
            {toggle ? <p>$15/mo</p> : <p>$150/yr</p>}
          </div>
        </div>
      </div>
      <form className="select-plan-form">
        <label className="plan-period active">Monthly</label>
        <label className="switch">
          <input type="checkbox" onChange={handleSwitch} />
          <span className="slider round"></span>
        </label>
        <label className="plan-period">Yearly</label>
      </form>
      <p
        style={{
          textAlign: "center",
          color: "hsl(354, 84%, 57%)",
          marginTop: "1rem",
          display: "none",
        }}
      >
        Please select a plan
      </p>
      <button className="next-step" onClick={handleNextStep}>
        Next Step
      </button>
      <button className="go-back" onClick={handleGoBack}>
        Go Back
      </button>
    </article>
  );
};

export default SelectPlan;

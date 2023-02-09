import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOnline, addLarger, addCustom } from "../state/dataSlice";

const AddOns = () => {
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [cutomProfile, setCutomProfile] = useState(false);
  const navigate = useNavigate();

  let dispatch = useDispatch();
  let state = useSelector((state) => state.data);
  //   console.log(state);

  const hanldeOnlineService = (e) => {
    e.target.parentElement.classList.toggle("active");
    e.target.parentElement.children[1].children[0].checked =
      !e.target.parentElement.children[1].children[0].checked;
    setOnlineService(!onlineService);
    e.target.parentElement.classList.contains("active")
      ? dispatch(
          addOnline({
            onlineServiceName: "Online service",
            onlineServicePrice: e.target.parentElement.children[2].innerHTML,
          })
        )
      : dispatch(addOnline({}));
  };

  const hanldeLargerStorage = (e) => {
    e.target.parentElement.classList.toggle("active");
    e.target.parentElement.children[1].children[0].checked =
      !e.target.parentElement.children[1].children[0].checked;
    setLargerStorage(!largerStorage);
    e.target.parentElement.classList.contains("active")
      ? dispatch(
          addLarger({
            largerStorageName: "Larger storage",
            largerStoragePrice: e.target.parentElement.children[2].innerHTML,
          })
        )
      : dispatch(addLarger({}));
  };

  const hanldeCutomProfile = (e) => {
    e.target.parentElement.classList.toggle("active");
    e.target.parentElement.children[1].children[0].checked =
      !e.target.parentElement.children[1].children[0].checked;
    setCutomProfile(!cutomProfile);
    e.target.parentElement.classList.contains("active")
      ? dispatch(
          addCustom({
            customProfileName: "Customizable Profile",
            customProfilePrice: e.target.parentElement.children[2].innerHTML,
          })
        )
      : dispatch(addCustom({}));
  };

  const handleGoBack = () => {
    navigate("/selectplan");
  };

  const handleNextStep = (e) => {
    onlineService || largerStorage || cutomProfile
      ? navigate("/summary")
      : (e.target.previousSibling.style.display = "block");
  };

  return (
    <article className="add-ons">
      <h1 className="main-header">Pick add-ons</h1>
      <p className="main-description">
        Add-ons help enhance your gaming experience.
      </p>
      <section className="add-ons-section">
        <div className="add-ons-row" onClick={hanldeOnlineService}>
          <div className="layout"></div>
          <form>
            <input type="checkbox" />
            <label>
              <h1>Online service</h1>
              <p>Access to multiplayer games</p>
            </label>
          </form>
          <span>
            {state.selectPlanData.planPeriod === "Monthly"
              ? "+$1/mo"
              : "+$10/yr"}
          </span>
        </div>
        <div className="add-ons-row" onClick={hanldeLargerStorage}>
          <div className="layout"></div>
          <form>
            <input type="checkbox" />
            <label>
              <h1>Larger storage</h1>
              <p>Extra 1TB of cloud save</p>
            </label>
          </form>
          <span>
            {state.selectPlanData.planPeriod === "Monthly"
              ? "+$2/mo"
              : "+$20/yr"}
          </span>
        </div>
        <div className="add-ons-row" onClick={hanldeCutomProfile}>
          <div className="layout"></div>
          <form>
            <input type="checkbox" />
            <label>
              <h1>Customizable Profile</h1>
              <p>Custom theme on your profile</p>
            </label>
          </form>
          <span>
            {state.selectPlanData.planPeriod === "Monthly"
              ? "+$2/mo"
              : "+$20/yr"}
          </span>
        </div>
      </section>
      <p
        style={{
          textAlign: "center",
          color: "hsl(354, 84%, 57%)",
          marginTop: "1rem",
          display: "none",
        }}
      >
        Please select a service
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

export default AddOns;

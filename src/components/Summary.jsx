import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOnline, addLarger, addCustom } from "../state/dataSlice";

const Summary = () => {
  let data = useSelector((state) => state.data);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let chosenPlan = useSelector((state) => state.data.selectPlanData);
  const handleTotalPrice = () => {
    let onlineServicePrice = data.onlineService.onlineServicePrice
      ? data.onlineService.onlineServicePrice
      : "0";
    let largerStoragePrice = data.largerStorage.largerStoragePrice
      ? data.largerStorage.largerStoragePrice
      : "0";
    let customProfilePrice = data.customProfile.customProfilePrice
      ? data.customProfile.customProfilePrice
      : "0";
    let returnValue = (str) => {
      return chosenPlan.planName ? parseInt(str.replace(/\D/g, "")) : 0;
    };
    return (
      returnValue(chosenPlan.planPrice) +
      returnValue(onlineServicePrice) +
      returnValue(largerStoragePrice) +
      returnValue(customProfilePrice)
    );
  };

  const handleChangeButton = () => {
    dispatch(addCustom({}));
    dispatch(addOnline({}));
    dispatch(addLarger({}));
    navigate("/selectplan");
  };

  const handleGoBack = () => {
    dispatch(addCustom({}));
    dispatch(addOnline({}));
    dispatch(addLarger({}));
    navigate("/addons");
  };

  const handleConfirm = () => {
    navigate("/done");
  };

  return (
    <article className="summary">
      <h1 className="main-header">Finishing up</h1>
      <p className="main-description">
        Double-check everything looks OK before confirming.
      </p>
      <section className="summary-details">
        <div className="first-row">
          <div>
            <h1>
              {chosenPlan.planName}{" "}
              {chosenPlan.planPeriod === "Yearly" ? "(Yearly)" : "(Monthly)"}
            </h1>
            <p className="link" onClick={handleChangeButton}>
              change
            </p>
          </div>
          <span>{chosenPlan.planPrice}</span>
        </div>
        <hr />
        <div className="second-row">
          {data.onlineService.onlineServiceName && (
            <div>
              <p>Online service</p>
              <span>{data.onlineService.onlineServicePrice}</span>
            </div>
          )}
          {data.largerStorage.largerStorageName && (
            <div>
              <p>{data.largerStorage.largerStorageName}</p>
              <span>{data.largerStorage.largerStoragePrice}</span>
            </div>
          )}
          {data.customProfile.customProfileName && (
            <div>
              <p>{data.customProfile.customProfileName}</p>
              <span>{data.customProfile.customProfilePrice}</span>
            </div>
          )}
        </div>
      </section>
      <div className="total">
        <p>
          Total ({chosenPlan.planPeriod === "Yearly" ? "per year" : "per month"}
          )
        </p>
        <span>
          +${handleTotalPrice()}/
          {chosenPlan.planPeriod === "Yearly" ? "yr" : "mo"}
        </span>
      </div>
      <button className="next-step" onClick={handleConfirm}>
        Confirm
      </button>
      <button className="go-back" onClick={handleGoBack}>
        Go Back
      </button>
    </article>
  );
};

export default Summary;

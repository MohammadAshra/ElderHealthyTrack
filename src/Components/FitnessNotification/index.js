import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function FitnessNotification() {
  useEffect(() => {
    const morningTime = new Date();
    morningTime.setHours(8, 0, 0);

    const timeUntilNotification = morningTime - new Date();

    const timeOutId = setTimeout(() => {
      toast.info("It's time for your morning fitness routine!", {
        position: "top-left",
        autoClose: false,
        hideProgressBar: true,
      });
    }, timeUntilNotification);

    return () => clearTimeout(timeOutId);
  });
  return (
    <div className="notification">
      <h1>Fitness Notification</h1>
      <ToastContainer />
    </div>
  );
}

export default FitnessNotification;

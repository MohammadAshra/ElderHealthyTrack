import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function WaterIntakeNotification() {
  const [waterIntake, setWaterIntake] = useState(0);
  const dailyWaterGoal = 2000; // in ml

  const handleWaterIntakeChange = (event) => {
    const newWaterIntake = parseInt(event.target.value);
    setWaterIntake(newWaterIntake);
  };

  const scheduleNotification = () => {
    const remainingWater = dailyWaterGoal - waterIntake;
    const notificationMessage =
      remainingWater > 0
        ? `You need to drink ${remainingWater} ml more water to reach your goal.`
        : `Congratulations! You've reached your daily water intake goal.`;

    toast.info(notificationMessage, {
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
    });
  };

  return (
    <div className="notification">
      <h2>Water Intake Notification</h2>
      <div>
        <label htmlFor="waterIntakeInput">Enter water intake (ml): </label>
        <input
          type="number"
          id="waterIntakeInput"
          value={waterIntake}
          onChange={handleWaterIntakeChange}
        />
        <button onClick={scheduleNotification}>Check Water Intake</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default WaterIntakeNotification;

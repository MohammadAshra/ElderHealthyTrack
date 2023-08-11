import React, { useEffect, useMemo } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function HealthyMealsNotification() {
  const mealTimes = useMemo(
    () => [
      { label: "Breakfast", hour: 7, minute: 30 },
      { label: "Lunch", hour: 12, minute: 0 },
      { label: "Dinner", hour: 18, minute: 30 },
    ],
    []
  );

  useEffect(() => {
    mealTimes.forEach((mealTime) => {
      const notificationTime = new Date();
      notificationTime.setHours(mealTime.hour, mealTime.minute, 0);

      if (notificationTime <= new Date()) {
        notificationTime.setDate(notificationTime.getDate() + 1);
      }

      const timeUntilNotification = notificationTime - new Date();

      setTimeout(() => {
        toast.info(`Time for a healthy ${mealTime.label.toLowerCase()}!`, {
          position: "top-right",
          autoClose: false,
          hideProgressBar: true,
        });
      }, timeUntilNotification);
    });
  }, [mealTimes]);

  return (
    <div className="notification">
      <h2>Healthy Meals Notification</h2>
      <ToastContainer />
    </div>
  );
}

export default HealthyMealsNotification;

import React from "react";
import "./App.css";
import FitnessNotification from "./Components/FitnessNotification";
import HealthyMealsNotification from "./Components/HealthyMealsNotification";
import WaterIntakeNotification from "./Components/WaterIntakeNotification";

function App() {
  return (
    <div className="App">
      <h1>Elderly Health Tracker</h1>
      <FitnessNotification />
      <HealthyMealsNotification />
      <WaterIntakeNotification />
    </div>
  );
}

export default App;

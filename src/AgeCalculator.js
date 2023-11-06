import React, { useState } from "react";
import './age.css';

function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / 31557600000);
    setAge(ageInYears);
  };

  return (
    <div className="ac">
      <h2>Age calculator</h2>
      <label>Enter Your Date of Birth</label><br />
      <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} /><br /><br />
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p>Your Age is: {age} years</p>}
    </div>
  );
}

export default AgeCalculator;

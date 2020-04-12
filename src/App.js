import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;

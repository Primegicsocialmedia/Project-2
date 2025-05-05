import React, { useState } from "react";

const TimeArea = () => {

const [theTime,setTheTime] = useState(new Date().toLocaleTimeString())
  // This hook initializes the state with the current time formatted as a string.

setTimeout(() => {
    setTheTime(new Date().toLocaleTimeString())
  }, 1000)
  // This function updates the state with the current time every second.

  return (
    <div className="m-2 p-2">
      <p>The Current time is: {theTime}</p>
    </div>
  );
};

export default TimeArea;
// This component displays the current time in a paragraph element. It uses the Date object to get the current time and formats it using toLocaleTimeString(). The component is exported as the default export of the module.

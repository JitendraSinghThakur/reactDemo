import React, { useState, useEffect, useRef } from "react";

const RightSidebar = () => {
  const [value, setValue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Start the counter
  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setValue((prev) => prev + 1);
      }, 1000); // Every 1 second
    }
  };

  // Pause the counter
  const pause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  // Stop the counter (pause and reset)
  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setValue(0);
  };

  // Clean up interval on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="p-3 text-center">
      <h2 className="text-warning">{value}</h2>
      <div className="btn-group my-2">
        <button
          className="btn btn-success btn-sm"
          onClick={start}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className="btn btn-warning btn-sm"
          onClick={pause}
          disabled={!isRunning}
        >
          Pause
        </button>
        <button className="btn btn-danger btn-sm" onClick={stop}>
          reset
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;

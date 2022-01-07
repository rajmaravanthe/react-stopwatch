import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import Layout from "./Layout";
import "./index.css";
import Buttons from "./Buttons";

const App = () => {
  const [startTime, setStartTime] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [stopTime, setStopTime] = useState<number>(0);

  // Store interval id in React ref
  const intervalRef = useRef<any | undefined>();

  const [disableStop, setDisableStop] = useState<boolean>(true);
  const [disableReset, setDisableReset] = useState<boolean>(true);
  const [disableStart, setDisableStart] = useState<boolean>(false);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const calculateTime = () => {
    setCurrentTime(Date.now());
  };

  const startTimer = async () => {
    setDisableStart(true);
    setDisableStop(false);

    // Only update start time if reset to 0
    if (!startTime) {
      setStartTime(Date.now());
    }

    if (stopTime) {
      setStartTime(startTime + (Date.now() - stopTime));
      setStopTime(0);
    }

    // Invoke once immediately
    calculateTime();

    // Instantiate interval
    intervalRef.current = setInterval(() => {
      calculateTime();
    }, 1);
  };

  const stopTimer = () => {
    setStopTime(Date.now());
    clearInterval(intervalRef.current);
    setDisableStart(false);
    setDisableStop(true);
    setDisableReset(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setDisableStart(false);
    setDisableStop(true);
    setDisableReset(true);
    setStartTime(0);
    setCurrentTime(0);
    setStopTime(0);
  };

  // Compute the minutes, seconds, and milliseconds from time delta
  const delta: number = currentTime - startTime; // in ms
  const minutes: string = Math.floor(delta / (1000 * 60)).toString();
  const seconds: string = (Math.floor(delta / 1000) % 60)
    .toString()
    .padStart(2, "0");
  const milliseconds: string = (delta % 1000).toString().padStart(3, "0");

  return (
    <React.Fragment>
      <div className='container'>
        <h1>Stop Watch</h1>
      </div>
      <Layout seconds={seconds} minutes={minutes} milliseconds={milliseconds} />
      <Buttons
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
        disableStop={disableStop}
        disableStart={disableStart}
        disableReset={disableReset}
      />
    </React.Fragment>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

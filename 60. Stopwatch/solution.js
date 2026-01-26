import { useState, useEffect } from "react";
export default function Stopwatch() {
  // const [paused, setIsPaused] = useState(true);
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [acc, setAccu] = useState(0);

  useEffect(() => {
    if (startTime === null) return;
    const interval = setInterval(() => {
      setElapsed(Date.now() - startTime);
    }, 10);

    return () => {
      interval && clearInterval(interval);
    };
  }, [startTime]);

  function handlePause() {
    if (startTime === null) {
      // restart time
      setStartTime(Date.now());
    } else {
      // pause timer
      setStartTime(null);
      setAccu((prev) => prev + elapsed);
      setElapsed(0);
    }
  }

  function handleReset() {
    setStartTime(null);
    setElapsed(0);
    setAccu(0);
  }

  return (
    <div>
      <p
        onClick={handlePause}
      >{`${parseInt((elapsed + acc) / 1000)}s ${parseInt((elapsed + acc) % 1000)}ms`}</p>
      <div>
        <button onClick={handlePause}>
          {startTime === null ? "start" : "stop"}
        </button>{" "}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

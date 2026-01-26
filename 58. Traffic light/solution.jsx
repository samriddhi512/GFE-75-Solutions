import { useState, useEffect } from "react";

const LIGHTS = [
  { value: "green", time: 3000, color: "green" },
  { value: "yellow", time: 500, color: "yellow" },
  { value: "red", time: 4000, color: "red" },
];
export default function TrafficLight() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % LIGHTS.length);
    }, LIGHTS[current].time);

    return () => {
      clearTimeout(timeout);
    };
  }, [current]);
  return (
    <div>
      <div className="light-container">
        {LIGHTS.map((light, idx) => {
          return (
            <div
              key={light.value}
              className="lights"
              style={{ backgroundColor: idx === current ? light.color : "" }}
            >
              {" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

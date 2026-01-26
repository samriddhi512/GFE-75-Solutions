import { useState, useEffect } from "react";

const BORDERS = {
  TOP: "digit_square_border_top",
  BOTTOM: "digit_square_border_bottom",
  LEFT: "digit_square_border_left",
  RIGHT: "digit_square_border_right",
};

const DIG_TO_SQ = {
  0: {
    top: [BORDERS.TOP, BORDERS.LEFT, BORDERS.RIGHT],
    bottom: [BORDERS.BOTTOM, BORDERS.LEFT, BORDERS.RIGHT],
  },
  1: {
    top: [BORDERS.RIGHT],
    bottom: [BORDERS.RIGHT],
  },
  2: {
    top: [BORDERS.TOP, BORDERS.BOTTOM, BORDERS.RIGHT],
    bottom: [BORDERS.TOP, BORDERS.LEFT, BORDERS.BOTTOM],
  },
  3: {
    top: [BORDERS.TOP, BORDERS.LEFT, BORDERS.RIGHT],
    bottom: [BORDERS.BOTTOM, BORDERS.LEFT, BORDERS.RIGHT],
  },
  4: {
    top: [BORDERS.TOP, BORDERS.RIGHT, BORDERS.BOTTOM],
    bottom: [BORDERS.TOP, BORDERS.RIGHT, BORDERS.BOTTOM],
  },
  5: {
    top: [BORDERS.TOP, BORDERS.LEFT, BORDERS.BOTTOM],
    bottom: [BORDERS.TOP, BORDERS.RIGHT, BORDERS.BOTTOM],
  },
  6: {
    top: [BORDERS.TOP, BORDERS.LEFT, BORDERS.BOTTOM],
    bottom: [BORDERS.TOP, BORDERS.LEFT, BORDERS.BOTTOM, BORDERS.RIGHT],
  },
  7: {
    top: [BORDERS.TOP, BORDERS.RIGHT],
    bottom: [BORDERS.RIGHT],
  },
  8: {
    top: [BORDERS.TOP, BORDERS.LEFT, BORDERS.RIGHT, BORDERS.BOTTOM],
    bottom: [BORDERS.BOTTOM, BORDERS.LEFT, BORDERS.RIGHT, BORDERS.TOP],
  },
  9: {
    top: [BORDERS.TOP, BORDERS.LEFT, BORDERS.RIGHT, BORDERS.BOTTOM],
    bottom: [BORDERS.TOP, BORDERS.BOTTOM, BORDERS.RIGHT],
  },
};

function Digit({ digit = 9 }) {
  const { top, bottom } = DIG_TO_SQ[digit];
  return (
    <div className="digit">
      <div className={["digit-segment", ...top].join(" ")}></div>
      <div className={["digit-segment", ...bottom].join(" ")}></div>
    </div>
  );
}

function Colon() {
  return (
    <div className="colon">
      <div className="colon-part"> </div>
      <div className="colon-part"> </div>
    </div>
  );
}

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function padTwoDigit(number) {
    return number > 9 ? String(number) : `0${number}`;
  }

  const hours = time.getHours() % 12 ? time.getHours() % 12 : 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const formattedDateTime = `${padTwoDigit(hours)}:${padTwoDigit(minutes)}:${padTwoDigit(seconds)}`;

  return (
    <time className="clock" dateTime={formattedDateTime}>
      <Digit digit={parseInt(hours / 10)} />
      <Digit digit={parseInt(hours % 10)} />
      <Colon />
      <Digit digit={parseInt(minutes / 10)} />
      <Digit digit={parseInt(minutes % 10)} />
      <Colon />
      <Digit digit={parseInt(seconds / 10)} />
      <Digit digit={parseInt(seconds % 10)} />
    </time>
  );
}

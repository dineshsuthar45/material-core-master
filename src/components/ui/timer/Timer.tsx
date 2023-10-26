import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "@mui/material";
import { sortedBreakpoints } from "./sortBreakpoints";
import { TimerBreakpoint, TimerProps } from "./Timer.types";
import { MColours } from "../../../theme";

import "./Timer.scss";

export function MTimer({
  expiryTime,
  size = 34,
  breakpoints = [],
}: TimerProps) {
  const intervalId = useRef<NodeJS.Timer | null>(null);

  const theme = useTheme();
  const defaultElipsedTimeColor = useMemo(
    () =>
      theme.palette.mode === "light"
        ? MColours.greyScale[100]
        : MColours.greyScale[600],
    [theme.palette.mode]
  );
  const defaultColor = useMemo(
    () =>
      theme.palette.mode === "light"
        ? MColours.greyScale[500]
        : MColours.greyScale[400],
    [theme.palette.mode]
  );
  const [timer, setTimer] = useState("");
  const [animationDuration, setAnimationDuration] = useState(0);
  const [colorBreakpoints, setColorBreakpoints] = useState<TimerBreakpoint[]>(
    []
  );
  const [elipsedTimeColor, setElipsedTimeColor] = useState(
    defaultElipsedTimeColor
  );
  const [color, setColor] = useState(defaultColor);

  const formatTime = useCallback(
    (hours: number, minutes: number, seconds: number) => {
      const minutesPadding = minutes.toString().padStart(2, "0");
      const secondsPadding = seconds.toString().padStart(2, "0");

      if (hours > 0) return `${hours}HR`;

      return `${minutesPadding}:${secondsPadding}`;
    },
    []
  );

  const getTimeRemaining = useCallback((endTime: number) => {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    const now = new Date();
    const endTimeDate = new Date(endTime);
    // @ts-ignore
    const differenceDate = new Date(endTimeDate - now);

    if (differenceDate.getTime() <= 0) {
      return {
        hours,
        minutes,
        seconds,
      };
    }

    hours = differenceDate.getUTCHours();
    minutes = differenceDate.getUTCMinutes();
    seconds = differenceDate.getUTCSeconds();

    return {
      hours,
      minutes,
      seconds,
    };
  }, []);

  const applyBreakpoints = useCallback(
    (colorBreakpoints: TimerBreakpoint[], endTime: number) => {
      const { hours, minutes, seconds } = getTimeRemaining(endTime);

      if (!(seconds === 0 && minutes === 0 && hours === 0)) {
        if (colorBreakpoints.length > 0) {
          colorBreakpoints.forEach((breakpoint: TimerBreakpoint) => {
            switch (breakpoint.unit) {
              case "hour":
                if (hours < breakpoint.startTime) setColor(breakpoint.color);
                break;
              case "minute":
                if (minutes + hours * 60 < breakpoint.startTime)
                  setColor(breakpoint.color);
                break;
              case "second":
                if (seconds + minutes * 60 + hours * 120 < breakpoint.startTime)
                  setColor(breakpoint.color);
                break;
            }
          });
        } else {
          setColor(defaultColor);
        }
      } else {
        if (intervalId.current) clearInterval(intervalId.current);
        setColor(elipsedTimeColor);
      }
    },
    [defaultColor, elipsedTimeColor, getTimeRemaining]
  );

  const startTimer = useCallback(
    (endTime: number) => {
      const { hours, minutes, seconds } = getTimeRemaining(endTime);

      setTimer(formatTime(hours, minutes, seconds));
      applyBreakpoints(colorBreakpoints, endTime);
    },
    [colorBreakpoints, getTimeRemaining, formatTime, applyBreakpoints]
  );

  const isTimestampSeconds = useCallback(
    (time: number) => /^\d{10}$/.test(time.toString()),
    []
  );
  const isTimestampMilliseconds = useCallback(
    (time: number) => /^\d{13}$/.test(time.toString()),
    []
  );

  useEffect(() => {
    setElipsedTimeColor(defaultElipsedTimeColor);
    setColor(defaultColor);
  }, [defaultColor, defaultElipsedTimeColor]);

  useEffect(() => {
    let time = expiryTime;
    if (isTimestampSeconds(expiryTime)) {
      time *= 1000;
    }
    if (!isTimestampMilliseconds(time)) {
      console.error(
        "Expiry time is not a valid timestamp. The current timestamp is used instead of the provided value."
      );
      time = new Date().getTime();
    }

    const { hours, minutes, seconds } = getTimeRemaining(time);
    setAnimationDuration(hours * 60 * 60 + minutes * 60 + seconds);
    startTimer(time);

    intervalId.current = setInterval(() => {
      startTimer(time);
    }, 1000);

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [
    expiryTime,
    colorBreakpoints,
    getTimeRemaining,
    startTimer,
    isTimestampSeconds,
    isTimestampMilliseconds,
  ]);

  useEffect(() => {
    setColorBreakpoints(sortedBreakpoints(breakpoints || []));
  }, [breakpoints]);

  return (
    <div className="timer-wrapper">
      <div
        className="countdown-timer"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 34 34"
          fill="none"
          className="timer-svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.1621 32C25.4464 32 32.1621 25.2843 32.1621 17C32.1621 8.71573 25.4464 2 17.1621 2C8.87784 2 2.16211 8.71573 2.16211 17C2.16211 25.2843 8.87784 32 17.1621 32ZM17.1621 33C25.9987 33 33.1621 25.8366 33.1621 17C33.1621 8.16344 25.9987 1 17.1621 1C8.32555 1 1.16211 8.16344 1.16211 17C1.16211 25.8366 8.32555 33 17.1621 33Z"
            fill={elipsedTimeColor}
          />
          <circle
            cx="17"
            cy="17"
            r="15.5"
            className="time-remaining"
            style={{
              animation: `dash ${animationDuration}s linear forwards`,
              stroke: color,
            }}
          />
        </svg>
        <span
          aria-hidden="true"
          className="timer-value"
          style={{
            color: color,
            fontSize: `${size / 3.7}px`,
          }}
        >
          {timer}
        </span>
      </div>
    </div>
  );
}

MTimer.defaultProps = {
  size: 34,
  breakpoints: [],
};

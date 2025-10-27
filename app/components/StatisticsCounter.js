"use client";
import React from "react";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ endValue = 0, duration = 2000 }) => {
  const [currentCount, setCurrentCount] = useState(0);

  // Determine the number of decimal places to show.
  // We check if the endValue is NOT an integer.
  const isDecimal = !Number.isInteger(Number(endValue));
  // If it's a decimal, we want 1 decimal place. Otherwise, we want 0.
  const decimalPlaces = isDecimal ? 1 : 0;

  useEffect(() => {
    let start = 0;
    const incrementTime = 30; // ms
    const numericEndValue = Number(endValue);

    // Calculate the number of steps and the increment amount
    const steps = Math.ceil(duration / incrementTime);
    const increment = numericEndValue / (steps || 1);

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericEndValue) {
        start = numericEndValue;
        clearInterval(timer);
      }

      // Update the state with the raw decimal value.
      setCurrentCount(start);
    }, incrementTime);

    // Cleanup function
    return () => clearInterval(timer);
  }, [endValue, duration]);

  // Format the number for display using the determined decimal places (0 or 1).
  // toFixed(0) is used for whole numbers (900, 175, 98).
  // toFixed(1) is used for the decimal number (6.4).
  const formattedCount = currentCount.toFixed(decimalPlaces).toLocaleString();

  return <span>{formattedCount}</span>;
};

const StatisticsCounter = ({
  Title = "null",
  Million = false,
  Para = "null",
  endCount = 0,
  suffix = "",
  duration = 2000,
}) => {
  return (
    <>
      <div className={`flex flex-col items-center`}>
        <div className="flex">
          <h4 className={`font-the-bold text-center leading-[100%]`}>
            <AnimatedCounter endValue={endCount} duration={duration} />
            {Million ? " Million" : ""}
            <span className="text-brown">{suffix}</span>
            {Title}
          </h4>
        </div>
        <p className={`mt-2 text-center font-medium line-clamp-3`}>{Para}</p>
      </div>
    </>
  );
};

export default StatisticsCounter;
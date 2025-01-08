"use client";
import { useState } from "react";

const GrowButton = () => {
  const [size, setSize] = useState<number>(100);
  const [color, setColor] = useState<string>("bg-blue-500");

  // Function to handle button click
  const handleClick = () => {
    setSize(size * 2);
    setColor(getRandomColor());
  };

  const getRandomColor = () => {
    const colors = [
      "bg-red-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const reset = () => {
    setSize(100);
    setColor("bg-blue-500");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={reset}
        className="absolute top-4 right-4 bg-gray-500 text-white px-4 py-2 rounded"
      >
        RESET
      </button>
      <button
        onClick={handleClick}
        className={`${color} text-white transition-all duration-300`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "8px",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        GROW
      </button>
    </div>
  );
};

export default GrowButton;

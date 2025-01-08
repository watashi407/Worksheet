"use client";
import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);

  const sum = num1 + num2;

  const reset = () => {
    setNum1(0);
    setNum2(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Simple Calculator</h1>
      <div className="flex flex-col space-y-4">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          className="border border-gray-300 p-2 rounded"
          placeholder="First Number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          className="border border-gray-300 p-2 rounded"
          placeholder="Second Number"
        />
      </div>
      <h2 className="text-xl mt-4">Sum: {sum}</h2>
      <button
        onClick={reset}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
      >
        Reset
      </button>
    </div>
  );
};

export default Calculator;

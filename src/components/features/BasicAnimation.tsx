"use client";
import React, { useState } from 'react';

const BasicAnimation = () => {
  const [animate, setAnimate] = useState(false);

  const toggleAnimation = () => {
    setAnimate(!animate);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full max-w-md mx-auto">
      <div
        className={`w-32 h-32 md:w-48 md:h-48 bg-blue-500 transition-all duration-500 ease-in-out
          ${animate ? 'w-48 h-48 md:w-64 md:h-64 bg-red-500 rounded-full' : 'rounded-md'}`}
      ></div>
      <button
        onClick={toggleAnimation}
        className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
      >
        Toggle Animation
      </button>
    </div>
  );
};

export default BasicAnimation;

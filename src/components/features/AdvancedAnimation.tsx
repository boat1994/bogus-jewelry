"use client";
import React, { useState } from 'react';

const AdvancedAnimation = () => {
  const [rotate, setRotate] = useState(false);

  const toggleRotate = () => {
    setRotate(!rotate);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full max-w-md mx-auto">
      <div
        className={`w-32 h-32 md:w-48 md:h-48 bg-purple-500 transition-transform duration-1000 ease-in-out
          ${rotate ? 'rotate-180 scale-125' : 'rotate-0 scale-100'}`}
      ></div>
      <button
        onClick={toggleRotate}
        className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
      >
        Toggle Rotation
      </button>
    </div>
  );
};

export default AdvancedAnimation;

"use client";

import { useState } from "react";

const ClientSideButton = () => {
  const [count, setCount] = useState(0);

  const clicked = () => {
    setCount(count + 1);
    // console.log("yay clicked");
  };

  return (
    <div className="border-4 rounded-lg m-4 p-2">
      <p className="text-xl mb-4">Below is a button that requires useState</p>
      <button
        onClick={clicked}
        className={`border-4 text-yellow-500 bg-yellow-200 rounded-xl p-2 ${
          count % 2 == 0 ? "bg-yellow-200" : "bg-blue-200"
        }`}
      >
        Click to change color
      </button>
    </div>
  );
};

export default ClientSideButton;

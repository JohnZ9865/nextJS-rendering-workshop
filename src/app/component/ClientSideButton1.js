"use client";

import { useState } from "react";
import FakeServerComponent1 from "./FakeServerComponent1";

const ClientSideButton1 = ({ children }) => {
  const [count, setCount] = useState(0);

  const clicked = () => {
    setCount(count + 1);
  };

  return (
    <div className="border-blue-500 border-4">
      <p className="text-xl mb-4">
        {" "}
        Below is Client Side Button + A server component.{" "}
      </p>
      <button
        onClick={clicked}
        className={`rounded-xl bg-green-500 p-4 ${
          count % 2 == 0 ? "text-yellow-500" : "text-blue-500"
        }`}
      >
        Hi there
      </button>

      <FakeServerComponent1>{children}</FakeServerComponent1>
    </div>
  );
};

export default ClientSideButton1;

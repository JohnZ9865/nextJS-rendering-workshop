"use client";
import React, { Children } from "react";

const Clientcomp = ({ children }) => {
  const childrenArray = Children.toArray(children);

  return (
    <div className="border-4 rounded-lg m-4 p-2">
      <p>
        {" "}
        This is a client Component, we can see the window height=
        {window.innerHeight}
      </p>

      {childrenArray[0]}
      {childrenArray[1]}
    </div>
  );
};

export default Clientcomp;

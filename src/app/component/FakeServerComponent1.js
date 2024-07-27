import { useState } from "react";
import FakeServerComponent2 from "./FakeServerComponent2";
// import RealServerComponent1 from "./RealServerComponent1"; //will crash!

const FakeServerComponent1 = ({ children }) => {
  const [count, setCount] = useState(5);

  const clicked = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button
        onClick={clicked}
        className={`rounded-xl bg-green-500 p-4 ${
          count % 2 == 0 ? "text-yellow-500" : "text-blue-500"
        }`}
      >
        Fake Server Component 1
      </button>

      <FakeServerComponent2 />
      {children}
      {/* <RealServerComponent1/> */}
    </div>
  );
};

export default FakeServerComponent1;

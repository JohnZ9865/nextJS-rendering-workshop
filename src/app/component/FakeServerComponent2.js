import { useState } from "react";

const FakeServerComponent2 = () => {
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
        Fake server component 2
      </button>
    </div>
  );
};

export default FakeServerComponent2;

"use client";
function is_server() {
  return !(typeof window != "undefined" && window.document);
}

const Comp2 = () => {
  const res = is_server();

  console.log("is server, comp2: " + res);

  return (
    <div className="border-4 rounded-lg m-4 p-2">
      <p>Component 2 being shown here</p>
    </div>
  );
};

export default Comp2;

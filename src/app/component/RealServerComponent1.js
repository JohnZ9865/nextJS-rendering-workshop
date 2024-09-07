function is_server() {
  return !(typeof window != "undefined" && window.document);
}

const RealServerComponent1 = () => {
  console.log("Is this a component2?" + is_server());

  return (
    <div className="border-4 border-red-500">Actual Server Component here</div>
  );
};

export default RealServerComponent1;

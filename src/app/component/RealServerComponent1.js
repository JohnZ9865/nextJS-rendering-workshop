async function create() {
  return 1;
}

const RealServerComponent1 = () => {
  console.log(1);

  return (
    <div className="border-4 border-red-500">Actual Server Component here</div>
  );
};

export default RealServerComponent1;

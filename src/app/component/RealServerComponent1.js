function is_server() {
    return ! (typeof window != 'undefined' && window.document);
 }

const RealServerComponent1 = () => {
  console.log("Is server component?" + is_server());

  return (
    <div className="border-4 border-red-500">Actual Server Component here</div>
  );
};

export default RealServerComponent1;
// function is_server() {
//   return ! (typeof window != 'undefined' && window.document);
// }

import ClientSideButton from "./ClientSideButton";

const Home = () => {
  return (
    <div className="">
      <ClientSideButton />
    </div>
  );
};

export default Home;

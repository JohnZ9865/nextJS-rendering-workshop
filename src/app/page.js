import { api } from "@/utils/api";
import toast from "react-hot-toast";
import ClientSideButton1 from "./component/ClientSideButton1";
import RealServerComponent1 from "./component/RealServerComponent1";

const Home = () => {
  return (
    <div className="">
      <ClientSideButton1>
        <RealServerComponent1 />
      </ClientSideButton1>
    </div>
  );
};

/*


*/

export default Home;

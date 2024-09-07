import { api } from "@/utils/api";
import ClientSideButton1 from "./component/ClientSideButton1";
function is_server() {
  return !(typeof window != "undefined" && window.document);
}
const Home = () => {
  return (
    <div className="">
      <ClientSideButton1 />
    </div>
  );
};

export default Home;

import Clientcomp from "./clientcomp";
import Comp1 from "./comp1";
import Comp2 from "./comp2";

const Home = () => {
  return (
    <div className="">
      <Clientcomp>
        <Comp1 />
        <Comp2 />
      </Clientcomp>
    </div>
  );
};

export default Home;

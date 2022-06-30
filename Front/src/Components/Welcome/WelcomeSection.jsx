import { words } from "../../words";
import Welocme from "../../Asset/Welcome/welcome.png";

const WelcomeSection = () => {
  return (
    <div className="max-w-[98rem] mx-auto ">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div>
          <img src={Welocme} alt="Welcome" />
        </div>
        <div className="max-w-[600px] mx-auto text-center lg:text-left">
          <span className="text-[#c24907] text-[20px] lg:text-[25px]">
            {words.welcome}
          </span>
          <h1 className="text-[25px] lg:text-[50px] font-bold my-6">
            {words.burgerWithyummi}
          </h1>
          <p className=" text-[#737373] leading-8">{words.lorem}</p>
          <button
            type="submit"
            className="bg-[#fbb403] text-[18px]   px-7 py-2 mt-6 rounded-[100px] font-semibold "
          >
            {words.Explore}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;

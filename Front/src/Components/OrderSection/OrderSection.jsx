import { Bounce } from "react-reveal";
import shape1 from "../../Asset/shape/shape1.png";
import shape2 from "../../Asset/shape/shape2.png";
import "../../css/OrderSection/OrderSection.css";
import { data } from "../../data/Data";

const OrderSection = () => {
  const { othersection } = data;

  return (
    <div className="wrraper">
      <div className="flex flex-col md:flex-row md:space-x-5 justify-around items-center ">
        <div className="flex justify-between lg:space-x-28">
          <div className="flex flex-col justify-around">
            <Bounce left cascade>
              {othersection.map(({ title, dec }) => (
                <div className="infoSection">
                  <h1 className="font-bold text-[20px]">{title}</h1>
                  <p className="text-[#737373]">{dec}</p>
                </div>
              ))}
            </Bounce>
          </div>

          <div className="shape">
            <img src={shape1} alt="shape1" className="h-full" />
          </div>
        </div>

        <div className="flex justify-between space-y-9 md:space-y-0 lg:space-x-28">
          <div className="shape">
            <img src={shape2} alt="shape1" className="h-full" />
          </div>

          <div className="flex flex-col justify-around">
            {othersection.map(({ title, dec }) => (
              <Bounce right cascade>
                <div className="infoSection">
                  <h1 className="font-bold text-[20px]">{title}</h1>
                  <p className="text-[#737373]">{dec}</p>
                </div>
              </Bounce>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;

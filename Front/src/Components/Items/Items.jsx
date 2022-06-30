import { words } from "../../words";
import { Bounce } from "react-reveal";

const Items = () => {
  const { itemsWords } = words;
  return (
    <>
      <div className="max-w-6xl mx-auto my-32">
        <div className="flex flex-col lg:flex-row items-center justify-around">
          {itemsWords.map((item) => (
            <div className="flex flex-col items-center space-y-5 mb-12">
              <Bounce left duration={2000}>
                <img src={item.img} alt="items" />
              </Bounce>
              <Bounce left cascade duration={2000}>
                <h1 className="text-[25px] font-bold">{item.title}</h1>
              </Bounce>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Items;

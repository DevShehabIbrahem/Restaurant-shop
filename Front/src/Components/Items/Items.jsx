import { words } from "../../words";
import { Bounce } from "react-reveal";

const Items = () => {
  const { itemsWordsone, itemsWordtow } = words;
  //flex flex-col md:flex-row items-center justify-around
  return (
    <>
      <div className="max-w-6xl mx-auto my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {itemsWordsone.map((item) => (
            <div className="flex flex-col items-center space-y-5 mb-12">
              <Bounce left duration={2000}>
                <img src={item.img} alt="items" />
              </Bounce>

              <Bounce left cascade duration={2000}>
                <h1 className="text-[25px] font-bold">{item.title}</h1>
              </Bounce>
            </div>
          ))}

          {itemsWordtow.map((item) => (
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

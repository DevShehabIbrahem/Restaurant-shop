import { words } from "../../words";

const Items = () => {
  const { itemsWords } = words;
  return (
    <>
      <div className="max-w-6xl mx-auto my-32">
        <div className="flex flex-col lg:flex-row items-center justify-around">
          {itemsWords.map((item) => (
            <div className="flex flex-col items-center space-y-5 mb-12">
              <img src={item.img} alt="items" />
              <h1 className="text-[25px] font-bold">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Items;

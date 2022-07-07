import React, { useState, useRef, useEffect } from "react";
import { data } from "../../data/Data.js";
import { Bounce } from "react-reveal";

import "../../css/chooseOrder/ChooseOrder.css";
import { words } from "../../words.js";

const ChooseOrder = () => {
  const { tabs, Choose, Pricing } = words;
  const [show, setShow] = useState(true);
  const [state, setState] = useState(0);
  console.log(
    "🚀 ~ file: ChooseOrder.jsx ~ line 12 ~ ChooseOrder ~ state",
    state
  );

  const { choooseOrder, choooseOrderConentOne, choooseOrderConentTow } = data;

  const eleemnt = useRef();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const arr = Array.from(eleemnt.current?.children);
    setItems(arr);
  }, []);

  const handleTabs = (index) => {
    setState(index);
  };

  const handleActive = (e) => {
    items.forEach((ele) => {
      ele.classList.remove("active"); //Reomve All Active class From elements
    });

    e.currentTarget.classList.add("active");

    setShow(true);
  };

  return (
    <div className="my-[100px]">
      <div className="flex flex-col items-center justify-center space-y-2 my-10">
        <p className="text-[#fd9503] text-[30px] font-bold">{Pricing}</p>
        <h1 className="text-[30px] font-bold">{Choose}</h1>
      </div>

      <ul
        className=" grid grid-cols-2 md:flex items-center justify-center  mb-[55px]"
        id="shehab"
        ref={eleemnt}
      >
        <>
          {choooseOrder.map((item, i) => (
            <li
              key={i.toString()}
              onClick={(e) => {
                handleActive(e);
                handleTabs(i);
              }}
              className={
                state === i
                  ? "style"
                  : " border-2 border-black p-5 mb-5 ml-10 flex overflow-hidden cursor-pointer"
              }
            >
              <div className=" w-[150px] h-[85px] lg:h-[120px] mx-auto">
                <div className="flex flex-col items-center justify-center w-[60px] mx-auto  lg:space-y-4">
                  <img src={item.imgaeurl} alt="" />

                  <h1 className="font-bold text-[20px] text-center">
                    {item.title}
                  </h1>
                </div>
              </div>
            </li>
          ))}
        </>
      </ul>

      {show && (
        <>
          {tabs.map((i) => (
            <div className={state === i ? "show" : "none"} key={i.toString()}>
              <Bounce bottom>
                <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto space-y-7 lg:space-y-0 lg:space-x-9">
                  <div className="flex flex-col border-dotted	border-[#ce7b04] border-2 p-5">
                    {choooseOrderConentOne.map(
                      ({ title, price, Dotet, dec }) => (
                        <>
                          <div
                            className="flex items-center font-extrabold text-[22px] lg:text-[23px] hover:text-[#ce7b04] transition-all duration-500 cursor-pointer"
                            key={title}
                          >
                            {title}
                            <b>{Dotet}</b>
                            <span className="text-[#b86b01]">${price}</span>
                          </div>
                          <p className="text-[#737373] my-4">{dec}</p>
                        </>
                      )
                    )}
                  </div>

                  <div className="flex flex-col border-dotted	border-[#ce7b04] border-2 p-5">
                    {choooseOrderConentTow.map(
                      ({ title, price, Dotet, dec }) => (
                        <>
                          <div
                            className="flex items-center font-extrabold text-[22px] lg:text-[23px] hover:text-[#ce7b04] transition-all duration-500 cursor-pointer"
                            key={title}
                          >
                            {title}
                            <b>{Dotet}</b>
                            <span className="text-[#b86b01]">${price}</span>
                          </div>
                          <p className="text-[#737373] my-4">{dec}</p>
                        </>
                      )
                    )}
                  </div>
                </div>
              </Bounce>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ChooseOrder;

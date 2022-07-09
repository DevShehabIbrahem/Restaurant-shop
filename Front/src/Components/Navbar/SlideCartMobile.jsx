import React from "react";
import { BiCartAlt } from "react-icons/bi";
import { Fade } from "react-reveal";
import { words } from "../../words";

const SlideCartMobile = ({ mobileCart, SlideProduct, TotalCart, styles }) => {
  return (
    <>
      {mobileCart && (
        <Fade>
          <div className="absolute top-[4rem] rounded-[10px] right-5 bg-white p-5 md:hidden ">
            <div className="flex items-center space-x-7 lg:hidden">
              <div className="relative cursor-pointer" onClick={SlideProduct}>
                <b
                  onClick={SlideProduct}
                  className={
                    !styles
                      ? "absolute top-[-19px] border-2 border-[#000] rounded-[100px] flex items-center justify-center right-[10px] text-[#000]  w-[29px]"
                      : "absolute top-[-19px] border-2 border-[#000] rounded-[100px] flex items-center justify-center right-[10px] text-[#fbb403]  w-[29px]"
                  }
                >
                  {TotalCart?.length}
                </b>
                <BiCartAlt fontSize={35} className="text-black" />
              </div>

              <button className="bg-orangeColor p-4 rounded-[100px] text-black font-semibold">
                {words.button}
              </button>
            </div>
          </div>
        </Fade>
      )}
    </>
  );
};

export default SlideCartMobile;

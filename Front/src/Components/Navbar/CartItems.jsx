import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import { totalInCart } from "../../Redux/Slice/AddTocart";
import { words } from "../../words";

const CartItems = ({ SlideProduct, styles }) => {
  const TotalCast = localStorage.getItem("CartItems");
  const [itemss, setItemss] = useState(JSON.parse(TotalCast) || []);
  return (
    <div className=" hidden lg:flex items-center space-x-7  justify-center">
      <div className="relative cursor-pointer" onClick={SlideProduct}>
        <b
          onClick={SlideProduct}
          className={
            !styles
              ? "absolute top-[-19px] border-2 border-[#000] rounded-[100px] flex items-center justify-center right-[10px] text-[#000]  w-[29px]"
              : "absolute top-[-19px] border-2 border-[#000] rounded-[100px] flex items-center justify-center right-[10px] text-[#fbb403]  w-[29px]"
          }
        >
          {itemss.length}
        </b>

        <BiCartAlt
          fontSize={35}
          className={styles ? "text-black" : "text-white"}
        />
      </div>

      <button className="bg-orangeColor p-4 rounded-[100px] text-black font-semibold">
        {words.button}
      </button>
    </div>
  );
};

export default CartItems;

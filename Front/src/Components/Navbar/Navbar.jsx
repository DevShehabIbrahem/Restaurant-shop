import React, { useState, useEffect } from "react";
import { words } from "../../words";
import { BiCartAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Bounce from "react-reveal/Bounce";

import "../../css/Navbar/Navbar.css";
import { addcart } from "../../Redux/Slice/AddTocart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartitems = useSelector(addcart);

  const [styles, setStyles] = useState(false);
  const [show, setShow] = useState(false);
  const { li } = words;

  const Scroll = () => {
    if (window.scrollY >= 820) {
      setStyles(true);
    } else {
      setStyles(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", Scroll);

    return () => window.removeEventListener("scroll", Scroll);
  }, []);

  return (
    <nav>
      <div className="text-[16px]">
        <div
          className={
            styles
              ? "bg-white flex items-center justify-between lg:justify-around p-4 text-black duration-300 border-b-4 px-12"
              : "flex items-center justify-between lg:justify-around p-4 lg:p-6 mx-auto lg:bg-transparent text-black lg:text-white duration-300 "
          }
        >
          <div className="logo text-[30px] font-bold">Handout</div>

          <div className="navigate">
            <ul className="hidden lg:flex items-center space-x-6">
              {li.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer  capitalize font-bold	text-[18px] hover:text-[#fbb403] duration-300 "
                >
                  {item}
                </li>
              ))}
            </ul>
            {/* start  Mobile-Menu*/}
            <Bounce left>
              <ul className={show ? "showMenu" : "hideMenu"}>
                {li.map((item) => (
                  <a href="##" key={item} className="text-[18px]">
                    <Bounce left cascade>
                      <li>{item}</li>
                    </Bounce>
                  </a>
                ))}
              </ul>
            </Bounce>
          </div>
          {/* End  Mobile-Menu*/}

          <div className="online-order hidden lg:flex items-center space-x-7">
            <div className="relative cursor-pointer">
              <b
                className={
                  !styles
                    ? "absolute top-[-19px] border-2 border-[#000] rounded-[100px] flex items-center justify-center right-[10px] text-[#fff]  w-[29px]"
                    : "absolute top-[-19px] border-2 border-[#000] rounded-[100px] flex items-center justify-center right-[10px] text-[#fbb403]  w-[29px]"
                }
              >
                {cartitems ? cartitems.length : 0}
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
          <div
            className="flex items-center space-x-7 cursor-pointer  lg:hidden"
            onClick={() => setShow(!show)}
          >
            <GiHamburgerMenu fontSize={35} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

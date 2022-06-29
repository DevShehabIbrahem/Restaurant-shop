import React, { useState } from "react";
import { words } from "../../words";
import { BiCartAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Bounce from "react-reveal/Bounce";
import "../../css/Navbar/Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { li } = words;

  return (
    <nav>
      <div className="container m-auto text-[16px]">
        <div className="bg-white content flex items-center justify-between p-4 lg:p-8 lg:bg-transparent">
          <div className="logo text-[30px] font-bold lg:text-white">
            Handout
          </div>
          <div className="navigate">
            <ul className="hidden lg:flex items-center space-x-6">
              {li.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer text-white capitalize font-bold	text-[18px] hover:text-[#fbb403] transition-all delay-200 "
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

          <div className="online-order hidden lg:flex items-center space-x-7 ">
            <div>
              <BiCartAlt fontSize={35} className="text-white" />
            </div>
            <button className="bg-orangeColor p-4 rounded-[100px]">
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

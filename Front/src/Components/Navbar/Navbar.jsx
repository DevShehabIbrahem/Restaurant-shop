import React, { useState, useEffect } from "react";
import { words } from "../../words";
import { BiCartAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Bounce from "react-reveal/Bounce";

import "../../css/Navbar/Navbar.css";
import { slideCartitems, totalInCart } from "../../Redux/Slice/AddTocart";
import { useDispatch, useSelector } from "react-redux";
import SlideCart from "../SkideCart/SlideCart";
import { Fade } from "react-reveal";
import MobileMenu from "./MobileMenu";
import SlideCartMobile from "./SlideCartMobile";
import CartItems from "./CartItems";

const Navbar = () => {
  const [styles, setStyles] = useState(false);
  const [show, setShow] = useState(false);
  const [mobileCart, setMobileCart] = useState(false);
  const [slide, setSlide] = useState(false);
  const dispatch = useDispatch();
  const TotalCart = useSelector(totalInCart);

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

  const SlideProduct = () => {
    dispatch(slideCartitems(true));
    setSlide(true);
  };

  const MobileCart = () => {
    setMobileCart(!mobileCart);
  };

  return (
    <>
      <nav>
        <div className="text-[16px]">
          <div
            className={
              styles
                ? "bg-white flex items-center justify-between  p-4 text-black duration-300 border-b-4 px-12"
                : "flex items-center justify-between  mx-auto p-4 lg:p-6  lg:bg-transparent text-black lg:text-white duration-300 "
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
              <MobileMenu li={li} show={show} />
              {/* End  Mobile-Menu*/}
            </div>

            {/*CartItems*/}
            <CartItems
              SlideProduct={SlideProduct}
              styles={styles}
              TotalCart={TotalCart}
            />
            {/*CartItems*/}

            <div className=" lg:hidden flex items-center space-x-5">
              <span
                className=" text-[35px] cursor-pointer"
                onClick={MobileCart}
              >
                ...
              </span>

              {/*Start-SlideCart-mobile*/}
              <SlideCartMobile
                mobileCart={mobileCart}
                SlideProduct={SlideProduct}
                TotalCart={TotalCart}
                styles={styles}
              />
              {/*End-SlideCart*/}

              {/*Icon-Menu*/}
              <div
                className="flex items-center space-x-7 cursor-pointer lg:hidden"
                onClick={() => setShow(!show)}
              >
                <GiHamburgerMenu fontSize={35} />
              </div>
              {/*Icon-Menu*/}
            </div>
          </div>
        </div>
      </nav>
      {slide && <SlideCart setSlide={setSlide} />}
    </>
  );
};

export default Navbar;

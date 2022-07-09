import React from "react";
import { Bounce } from "react-reveal";

const MobileMenu = ({ show, li }) => {
  return (
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
  );
};

export default MobileMenu;

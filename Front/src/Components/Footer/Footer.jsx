import React from "react";
import "../../css/Footer/Footer.css";
import { BiPhoneCall } from "react-icons/bi";
import { data } from "../../data/Data";

const Footer = () => {
  const { opening, footerItems } = data;
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-opening">
            <ul className="pt-5">
              {opening.map(({ title, hours }) => (
                <li className="flex items-center text-center  " key={title}>
                  <h1 className="flex-1 mb-5">{title}</h1>

                  <span className="flex-1  mb-5">{hours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-address">
            <h1 className="text-[30px]">Address</h1>
            <ul className="pt-5">
              {footerItems.map(({ title, id }) => (
                <li className="flex items-center space-x-3" key={id}>
                  <span>
                    <BiPhoneCall />
                  </span>

                  <p>{title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.4557531559876!2d-73.9546892284254!3d40.64188298376931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b48192c72f3%3A0x4beb237062fb3c90!2zODU1IE9jZWFuIEF2ZSwgQnJvb2tseW4sIE5ZIDExMjI22Iwg2KfZhNmI2YTYp9mK2KfYqiDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1657108525435!5m2!1sar!2seg"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

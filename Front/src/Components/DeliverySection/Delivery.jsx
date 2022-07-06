import React from "react";
import "../../css/DeliverySection/Delivery.css";
import deliveryImg from "../../Asset/delivery.png";
import { words } from "../../words";

const Delivery = () => {
  const {
    delivery,
    deliveryBlackButton,
    deliveryButton,
    deliveryTitle,
    deliverydec,
  } = words;

  return (
    <div className="delivery-wrraper">
      <div className="delivery-content">
        <div className=" delivery-info">
          <span>{delivery}</span>
          <h1>{deliveryTitle}</h1>
          <p>{deliverydec}</p>
          <div className="delivery-button">
            <button>{deliveryButton}</button>
            <button>{deliveryBlackButton}</button>
          </div>
        </div>
        <div className="delivery-image">
          <img src={deliveryImg} alt="delivery" />
        </div>
      </div>
    </div>
  );
};

export default Delivery;

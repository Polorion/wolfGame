import * as React from "react";
import S from "./Basket.module.scss";
import RB from "../../../img/basket/basket-RB.png";
import LT from "../../../img/basket/basket-LT.png";
import LB from "../../../img/basket/basket-LB.png";
import RT from "../../../img/basket/basket-RT.png";

const Basket = (props) => {
  const changeImg = () => {
    switch (props.position) {
      case "1":
        return { img: LB, top: 140, left: -90 };
      case "2":
        return { img: RB, top: 140, left: 140 };
      case "3":
        return { img: LT, top: 30, left: -90 };
      case "4":
        return { img: RT, top: 30, left: 140 };
      default:
        return { img: LB, top: 70, left: -25 };
    }
  };

  return (
    <div
      className={S.bodyBasket}
      style={{ top: `${changeImg().top}px`, left: `${changeImg().left}px` }}
    >
      <img src={changeImg().img} alt="" />
    </div>
  );
};

export default Basket;

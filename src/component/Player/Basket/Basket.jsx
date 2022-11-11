import * as React from "react";
import S from "./Basket.module.scss";
import RB from "../../../img/basket/basket-RB.png";
import LT from "../../../img/basket/basket-LT.png";
import LB from "../../../img/basket/basket-LB.png";
import RT from "../../../img/basket/basket-RT.png";

const Basket = (props) => {
  const basketActive = () => {
    if (props.position === "1") {
      return {
        rt: false,
        rb: false,
        lt: false,
        lb: true,
      };
    }
    if (props.position === "2") {
      return {
        rt: false,
        rb: true,
        lt: false,
        lb: false,
      };
    }
    if (props.position === "3") {
      return {
        rt: false,
        rb: false,
        lt: true,
        lb: false,
      };
    }
    if (props.position === "4") {
      return {
        rt: true,
        rb: false,
        lt: false,
        lb: false,
      };
    }
  };
  const basketLeft = [
    { img: LB, top: 50, left: -70, active: basketActive().lb },
    { img: LT, top: 20, left: -70, active: basketActive().lt },
  ];
  const basketRight = [
    { img: RB, top: 50, left: 70, active: basketActive().rb },
    { img: RT, top: 10, left: 70, active: basketActive().rt },
  ];

  return (
    <div>
      {props.positionBasket === "2" &&
        basketRight.map((el) => {
          return (
            <div
              key={el.img}
              className={`${S.bodyBasket} ${el.active && S.active}`}
              style={{ top: `${el.top}%`, left: `${el.left}%` }}
            >
              <img src={el.img} alt="" />
            </div>
          );
        })}
      {props.positionBasket === "1" &&
        basketLeft.map((el) => {
          return (
            <div
              key={el.img}
              className={`${S.bodyBasket} ${el.active && S.active}`}
              style={{ top: `${el.top}%`, left: `${el.left}%` }}
            >
              <img src={el.img} alt="" />
            </div>
          );
        })}
    </div>
  );
};

export default Basket;

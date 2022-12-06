import * as React from "react";
import S from "./Basket.module.scss";
import RB from "../../../img/player/bag.png";
import LT from "../../../img/player/bag.png";
import LB from "../../../img/player/bag.png";
import RT from "../../../img/player/bag.png";

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
    { img: LB, top: 30, left: -35, active: basketActive().lb },
    { img: LT, top: 30, left: -35, active: basketActive().lt },
  ];
  const basketRight = [
    { img: RB, top: 32, left: 85, active: basketActive().rb },
    { img: RT, top: 32, left: 85, active: basketActive().rt },
  ];

  return (
    <div>
      {props.positionBasket === "2" &&
        basketRight.map((el, i) => {
          return (
            <div
              key={i}
              className={`${S.bodyBasket} ${el.active && S.active}`}
              style={{ top: `${el.top}%`, left: `${el.left}%` }}
            >
              <img style={{ transform: "rotate(30deg)" }} src={el.img} alt="" />
            </div>
          );
        })}
      {props.positionBasket === "1" &&
        basketLeft.map((el, i) => {
          return (
            <div
              key={i}
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

import * as React from "react";
import S from "./Player.module.scss";
import wolfL from "../../img/wolf/wolf-left.png";
import wolfR from "../../img/wolf/wolf-right.png";
import Basket from "./Basket/Basket";

const Player = (props) => {
  return (
    <div className={S.player} style={{ left: `${props.left}%` }}>
      <img
        src={props.position === "3" || props.position === "1" ? wolfL : wolfR}
        alt=""
      />
      <Basket position={props.position} />
    </div>
  );
};

export default Player;

import * as React from "react";
import S from "./Eggs.module.scss";
import egg from "../../../../../img/egg/egg.png";

const Eggs = (props) => {
  return (
    <div
      className={`${S.eggBody} ${props.active && S.active}`}
      style={{
        position: "absolute",
        left: `${props.position}px`,
        top: `${props.position}px`,
        transform: `rotate(${props.position + 20}deg)  `,
      }}
    >
      <img src={egg} alt="" />
    </div>
  );
};

export default Eggs;

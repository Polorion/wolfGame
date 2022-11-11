import * as React from "react";
import S from "./Eggs.module.scss";
import egg from "../../../../../img/egg/egg.png";

const Eggs = (props) => {
  return (
    <div
      className={`${S.eggBody} ${props.active && S.active}`}
      style={{
        position: "relative",
        // left: `${-props.position + 20}%`,
        top: `${props.position + 90}%`,
        transform: `rotate(${
          props.left ? props.position + 20 : props.position - 20
        }deg)  `,
      }}
    >
      <img src={egg} alt="" />
    </div>
  );
};

export default Eggs;

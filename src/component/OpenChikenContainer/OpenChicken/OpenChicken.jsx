import * as React from "react";
import S from "./OpenChicken.module.scss";
import egg from "../../../img/egg/egg.png";

const OpenChicken = (props) => {
  return (
    <div
      className={`${S.openBody} ${props.right && S.right}`}
      style={{
        bottom: `${props.coordinates?.bottom}px`,
        left: `${props.coordinates?.left}px`,
        right: `${props.coordinates?.right}px`,
      }}
    >
      {props.open.map((el, i) => {
        return (
          <div
            key={el.id}
            className={`${S.chicken} ${
              props.openChickenPosition.includes(props.open[i].id) && S.active
            }`}
          >
            <img src={egg} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default OpenChicken;

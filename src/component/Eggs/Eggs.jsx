import * as React from "react";
import S from "./Eggs.module.scss";

const Eggs = (props) => {
  return (
    <div
      className={`${props.active && S.active} ${S.eggs}`}
      style={{ top: `${props.top}px`, left: `${props.left}px` }}
    ></div>
  );
};

export default Eggs;

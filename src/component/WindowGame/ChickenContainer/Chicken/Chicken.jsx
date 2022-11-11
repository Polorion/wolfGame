import * as React from "react";
import S from "./Chicken.module.scss";
import Eggs from "./Eggs/Eggs";

const Chicken = (props) => {
  return (
    <div
      className={S.chickenBody}
      style={{
        top: `${props.coordinates?.top}px`,
        left: `${props.coordinates?.left}px`,
        right: `${props.coordinates?.right}px`,
      }}
    >
      <div className={`${S.eggsBody} ${!props.left && S.right}`}>
        {props.eggs.map((el, i) => (
          <Eggs
            key={el.id}
            position={el.id * 20}
            active={props.activeEggs.includes(props.eggs[i].id)}
            number={el.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Chicken;

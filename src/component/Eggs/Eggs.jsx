import * as React from "react";
import S from "./Eggs.module.scss";
import eggs from "../../img/egg/egg.png";
import { useDispatch } from "react-redux";
import { moveEggs } from "../../store/reducers/RootReduser";
import { useEffect } from "react";

const Eggs = ({ positionY, positionX, id, position }) => {
  return (
    <div
      className={`${S.eggsBody}`}
      style={{
        transform: `translate(${positionX}px, ${positionY}px) rotate(${positionX}deg)`,
      }}
    >
      {id}
      <img src={eggs} alt="" />
    </div>
  );
};

export default Eggs;

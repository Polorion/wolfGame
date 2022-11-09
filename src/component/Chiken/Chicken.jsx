import * as React from "react";
import S from "./Chicken.module.scss";
import { useDispatch, useSelector } from "react-redux";
import EggsContainer from "../Eggs/EggsContainer";
import { upScore } from "../../store/reducers/RootReduser";

const Chicken = (props) => {
  return (
    <div className={S.chicken}>
      {props.eggs.map((el) => {
        return (
          <EggsContainer
            key={el.id}
            position={el.position}
            id={el.id}
            deleteEggs={props.deleteEggs}
            wolfPosition={props.wolfPosition}
            upScore={props.upScore}
          />
        );
      })}
    </div>
  );
};

export default Chicken;

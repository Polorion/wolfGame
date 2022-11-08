import * as React from "react";
import S from "./Chiken.module.scss";
import Eggs from "../Eggs/Eggs";
import { useDispatch, useSelector } from "react-redux";
import { stopTop, upActiveAggs } from "../../store/reducers/RootReduser";

const Chiken = () => {
  const eggs = useSelector((state) => state.MainPage.eggs);
  const eggsActive = useSelector((state) => state.MainPage.activeEggs);
  const start = useSelector((state) => state.MainPage.start);
  const position = useSelector((state) => state.MainPage.position);
  const dispatch = useDispatch();
  const move = () => {
    dispatch(upActiveAggs());
  };

  if (start) {
    setTimeout(() => {
      if (eggsActive === 6) {
        dispatch(stopTop());
      }
      move();
    }, 1000);
  }

  return (
    <div className={S.chiken}>
      {eggs.map((el) => {
        return (
          <Eggs
            key={el.id}
            top={el.top}
            left={el.left}
            active={el.id === eggsActive && true}
          />
        );
      })}

      <button
        onClick={() => {
          dispatch(stopTop());
        }}
      >
        dsadsa
      </button>
    </div>
  );
};

export default Chiken;

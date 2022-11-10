import * as React from "react";
import S from "./WindowGame.module.scss";

import MoveButton from "../MoveButton/MoveButton";
import PlayerContainer from "../Player/PlayerContainer";
import { useDispatch, useSelector } from "react-redux";

import { movePositionPlayer } from "../../store/reducers/WolfReducer";
import ChickenContainer from "./ChickenContainer/ChickenContainer";
import OpenChickenContainer from "../OpenChikenContainer/OpenChickenContainer";
import { aggEgg } from "../../store/reducers/ChickenReducer";

const WindowGame = () => {
  const dispatch = useDispatch();
  const BTN = [
    {
      position: "3",
    },
    {
      position: "4",
    },
    {
      position: "1",
    },
    {
      position: "2",
    },
  ];

  setInterval(() => {
    dispatch(aggEgg());
    console.log("addEgs");
  }, 3000);

  const changePosition = (pos) => {
    dispatch(movePositionPlayer(pos));
  };

  return (
    <div className={S.gameWindow}>
      {/*<div>{score}</div>*/}
      <div className={"container"}>
        <ChickenContainer />
        <OpenChickenContainer />
        <PlayerContainer />
        <div className={S.buttonBody}>
          {BTN.map((el) => (
            <MoveButton
              key={el.position}
              position={el.position}
              action={changePosition}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WindowGame;

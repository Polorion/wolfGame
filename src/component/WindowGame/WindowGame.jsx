import * as React from "react";
import S from "./WindowGame.module.scss";

import MoveButton from "../MoveButton/MoveButton";
import PlayerContainer from "../Player/PlayerContainer";
import { useDispatch, useSelector } from "react-redux";
import { AddEggsMore, movePosition } from "../../store/reducers/RootReduser";
import ChickenContainer from "../Chiken/ChickenContainer";
import { useEffect } from "react";
import { movePositionPlayer } from "../../store/reducers/WolfReducer";

const WindowGame = () => {
  const score = useSelector((state) => state.player.score);
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

  const changePosition = (pos) => {
    dispatch(movePositionPlayer(pos));
  };

  return (
    <div className={S.gameWindow}>
      <div>{score}</div>
      <div className={"container"}>
        {/*<ChickenContainer />*/}
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

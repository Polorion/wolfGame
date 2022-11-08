import * as React from "react";
import S from "./WindowGame.module.scss";
import Player from "../Player/Player";
import Chiken from "../Chiken/Chiken";
import MoveButton from "../MoveButton/MoveButton";
import PlayerContainer from "../Player/PlayerContainer";
import { useDispatch } from "react-redux";
import { movePosition } from "../../store/reducers/RootReduser";

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

  const changePosition = (pos) => {
    dispatch(movePosition(pos));
  };

  return (
    <div className={S.gameWindow}>
      <div className={"container"}>
        {/*<Chiken />*/}
        <PlayerContainer />
        <div className={S.buttonBody}>
          {BTN.map((el) => (
            <MoveButton position={el.position} action={changePosition} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WindowGame;

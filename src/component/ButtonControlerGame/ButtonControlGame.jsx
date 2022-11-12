import * as React from "react";
import S from "./ButtonControlGame.module.scss";

const ButtonControlGame = (props) => {
  return (
    <div>
      <button
        style={{ position: "relative", zIndex: "100000" }}
        onClick={props.changeOwner}
      >
        смена персонажа
      </button>{" "}
      <button
        style={{ position: "relative", zIndex: "100000" }}
        onClick={props.restart}
      >
        рестарт
      </button>{" "}
      <button
        style={{ position: "relative", zIndex: "100000" }}
        onClick={props.changeRunGame}
      >
        {props.gameIsRun ? "пауза" : "начать игру"}
      </button>
    </div>
  );
};

export default ButtonControlGame;

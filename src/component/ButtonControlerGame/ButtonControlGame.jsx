import * as React from "react";
import S from "./ButtonControlGame.module.scss";
import { useRef } from "react";
import jumpSound from "../../audio/drums.mp3";

const ButtonControlGame = (props) => {
  const audioRef = useRef();

  const playSound = () => {
    audioRef.current.play();
    audioRef.current.volume = 0.05;
  };
  const stopSound = () => {
    audioRef.current.pause();
  };

  return (
    <div>
      <audio loop="loop" ref={audioRef} src={jumpSound}></audio>
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
        onClick={() => {
          props.changeRunGame();
          props.gameIsRun ? stopSound() : playSound();
        }}
      >
        {props.gameIsRun ? "пауза" : "начать игру"}
      </button>
    </div>
  );
};

export default ButtonControlGame;

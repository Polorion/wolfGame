import * as React from "react";
import S from "./ButtonControlGame.module.scss";
import { useRef, useState } from "react";
import jumpSound from "../../audio/drums.mp3";

const ButtonControlGame = (props) => {
  const toggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const [move, setMove] = useState();
  const [spawn, setSpawn] = useState();

  const audioRef = useRef();

  const playSound = () => {
    audioRef.current.play();
    audioRef.current.volume = 0.05;
  };
  const stopSound = () => {
    audioRef.current.pause();
  };
  const stopRestart = () => {
    audioRef.current.fastSeek(0);
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
      <button
        style={{ position: "relative", zIndex: "100000" }}
        onClick={() => {
          props.typeGame(1000, 300);
        }}
      >
        игра А
      </button>{" "}
      <button
        style={{ position: "relative", zIndex: "100000" }}
        onClick={() => {
          props.typeGame(200, 100);
        }}
      >
        игра Б
      </button>{" "}
      <button
        style={{ position: "relative", zIndex: "100000" }}
        onClick={() => {
          toggle();
        }}
      >
        fullScreen
      </button>
      {/*<div style={{ position: "relative", zIndex: "99999" }}>*/}
      {/*  <input*/}
      {/*    value={spawn}*/}
      {/*    onInput={(e) => {*/}
      {/*      setSpawn((prevState) => e.target.value);*/}
      {/*    }}*/}
      {/*    type="text"*/}
      {/*    placeholder={"скорость движения"}*/}
      {/*  />*/}
      {/*  {" скорость движения сек"}*/}
      {/*  <input*/}
      {/*    value={move}*/}
      {/*    onInput={(e) => {*/}
      {/*      setMove((prevState) => e.target.value);*/}
      {/*    }}*/}
      {/*    type="text"*/}
      {/*    placeholder={"скорость появления "}*/}
      {/*  />*/}
      {/*  {"скорость появления сек "}*/}
      {/*  <button*/}
      {/*    onClick={() => {*/}
      {/*      props.typeGame(spawn * 1000, move * 1000);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    go*/}
      {/*  </button>*/}
      {/*</div>*/}
    </div>
  );
};

export default ButtonControlGame;

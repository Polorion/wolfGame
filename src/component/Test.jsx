import * as React from "react";
import WindowGame from "./WindowGame/WindowGame";
import StartWindow from "./StartWindow/StartWindow";
import { useSelector } from "react-redux";
import prevNG from "../audio/NG.mp3";
import { useEffect, useRef } from "react";

const Test = () => {
  const isStarted = useSelector((state) => state.player.gameIsStart);
  const audioRef = useRef();
  const playSound = () => {
    audioRef.current.play();
    audioRef.current.volume = 0.05;
  };
  const stopSound = () => {
    audioRef.current.pause();
  };

  return (
    <>
      <audio
        loop="loop"
        autoPlay="autoplay"
        ref={audioRef}
        src={prevNG}
      ></audio>

      <div className={"test"}>
        <WindowGame />
        {/*{!isStarted ? <StartWindow playSound={playSound} /> : <WindowGame />}*/}
      </div>
    </>
  );
};

export default Test;

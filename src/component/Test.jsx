import * as React from "react";
import WindowGame from "./WindowGame/WindowGame";
import StartWindow from "./StartWindow/StartWindow";
import { useSelector } from "react-redux";

const Test = () => {
  const isStarted = useSelector((state) => state.player.gameIsStart);
  return (
    <div className={"test"}>{isStarted ? <WindowGame /> : <StartWindow />}</div>
  );
};

export default Test;

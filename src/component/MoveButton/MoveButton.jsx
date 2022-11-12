import * as React from "react";
import S from "./MoveButton.module.scss";
import jumpSound from "../../audio/jump.mp3";
import { useRef } from "react";

const MoveButton = (props) => {
  const audioRef = useRef();

  const playSound = () => {
    audioRef.current.playbackRate = 3.0;
    audioRef.current.volume = 0.1;
    audioRef.current.play();
  };
  return (
    <div
      onClick={() => {
        props.action(props.position);
        playSound();
      }}
      className={`${S.btn} ${props.position}`}
    >
      <audio ref={audioRef} src={jumpSound}></audio>
    </div>
  );
};

export default MoveButton;

import * as React from "react";
import ButtonControlGame from "./ButtonControlGame";
import { connect, useSelector } from "react-redux";
import {
  choiceOwner,
  gameOver,
  resetAllScore,
  runGame,
  setSpeedMoveEgg,
  setSpeedSpawnEdd,
} from "../../store/reducers/PlayerReducer";
import { resetAllChicken } from "../../store/reducers/ChickenReducer";
import { restartAllEggs } from "../../store/reducers/OpenChickeReducer";
import { useEffect } from "react";

const ButtonControlGameContainer = (props) => {
  const gameover = useSelector((state) => state.player.missedEggs);
  useEffect(() => {
    if (gameover > 0) {
      props.runGame();
      props.gameOver();
    }
  }, [gameover]);
  const changeOwner = () => {
    props.choiceOwner(null);
  };
  const changeRunGame = () => {
    props.runGame();
  };
  const restart = () => {
    props.resetAllScore();
    props.resetAllChicken();
    props.restartAllEggs();
    props.choiceOwner(null);
    props.runGame();
  };
  const typeGame = (spawn, speed) => {
    props.setSpeedSpawnEdd(spawn);
    props.setSpeedMoveEgg(speed);
    restart();
  };
  return (
    <div
      style={{ position: "absolute", zIndex: "1000", top: "0%", left: "0%" }}
    >
      <ButtonControlGame
        onliFull={props.onliFull}
        changeOwner={changeOwner}
        changeRunGame={changeRunGame}
        restart={restart}
        gameIsRun={props.gameIsRun}
        typeGame={typeGame}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    owner: state.player.owner,
    gameIsRun: state.player.gameIsRun,
  };
};
export default connect(mapStateToProps, {
  choiceOwner,
  runGame,
  resetAllScore,
  resetAllChicken,
  restartAllEggs,
  setSpeedSpawnEdd,
  setSpeedMoveEgg,
  gameOver,
})(ButtonControlGameContainer);

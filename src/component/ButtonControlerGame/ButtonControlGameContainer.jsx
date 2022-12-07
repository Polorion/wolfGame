import * as React from "react";
import ButtonControlGame from "./ButtonControlGame";
import { connect } from "react-redux";
import {
  choiceOwner,
  resetAllScore,
  runGame,
  setSpeedMoveEgg,
  setSpeedSpawnEdd,
} from "../../store/reducers/PlayerReducer";
import { resetAllChicken } from "../../store/reducers/ChickenReducer";
import { restartAllEggs } from "../../store/reducers/OpenChickeReducer";

const ButtonControlGameContainer = (props) => {
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
  };
  const typeGame = (spawn, speed) => {
    props.setSpeedSpawnEdd(spawn);
    props.setSpeedMoveEgg(speed);
    restart();
  };
  return (
    <div style={{ position: "absolute", opacity: 0.5, zIndex: "1000" }}>
      <ButtonControlGame
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
})(ButtonControlGameContainer);

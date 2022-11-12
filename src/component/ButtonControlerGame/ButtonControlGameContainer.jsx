import * as React from "react";
import ButtonControlGame from "./ButtonControlGame";
import { connect } from "react-redux";
import {
  choiceOwner,
  resetAllScore,
  runGame,
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
  return (
    <div>
      <ButtonControlGame
        changeOwner={changeOwner}
        changeRunGame={changeRunGame}
        restart={restart}
        gameIsRun={props.gameIsRun}
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
})(ButtonControlGameContainer);

import * as React from "react";
import Chicken from "./Chicken/Chicken";
import { connect } from "react-redux";
import { aggEgg, moveEgg } from "../../../store/reducers/ChickenReducer";
import { useEffect, useMemo, useRef } from "react";
import { upScore } from "../../../store/reducers/WolfReducer";
import {
  moveOpenEgg,
  startOpenEgg,
} from "../../../store/reducers/OpenChickeReducer";

const ChickenContainer = (props) => {
  const refPosition = useRef(props.positionPlayer);
  refPosition.current = props.positionPlayer;
  const refEggs = useRef(props.activeEggs);
  refEggs.current = props.activeEggs;
  const eggMove = () => {
    props.moveEgg();
    if (refPosition.current === "3" && refEggs.current.includes(5)) {
      props.upScore();
      console.log("yes");
    }
    if (props.activeEggs.includes(5) && props.positionPlayer !== "1") {
    }
  };

  useEffect(() => {
    const t = setInterval(() => {
      eggMove();
      console.log("render!", refPosition.current);
    }, 1000);
    return () => {
      clearInterval(t);
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          eggMove();
        }}
      >
        move
      </button>{" "}
      <button
        onClick={() => {
          props.aggEgg();
        }}
      >
        aggegs
      </button>
      <Chicken
        eggs={props.chickenTopLeft}
        activeEggs={props.activeEggs}
        positionPlayer={props.positionPlayer}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    positionPlayer: state.player.positionPlayer,
    score: state.player.score,
    chickenTopLeft: state.chicken.chickenTopLeft,
    activeEggs: state.chicken.activeEggs,
  };
};
export default connect(mapStateToProps, {
  moveEgg,
  aggEgg,
  upScore,
  moveOpenEgg,
  startOpenEgg,
})(ChickenContainer);

import * as React from "react";
import Chicken from "./Chicken/Chicken";
import { connect, useSelector } from "react-redux";
import { aggEgg, moveEgg } from "../../../store/reducers/ChickenReducer";
import { useEffect, useMemo, useRef } from "react";
import { missedEggs, upScore } from "../../../store/reducers/WolfReducer";
import {
  moveOpenEgg,
  startOpenEgg,
} from "../../../store/reducers/OpenChickeReducer";

const ChickenContainer = (props) => {
  const score = useSelector((state) => state.player.score);
  const missedEggs = useSelector((state) => state.player.missedEggs);

  const refPosition = useRef(props.positionPlayer);
  refPosition.current = props.positionPlayer;

  const refEggsLT = useRef();
  refEggsLT.current = props.activeEggsTopLeft;

  const refEggsLB = useRef();
  refEggsLB.current = props.activeEggsBottomLeft;

  const refEggsRT = useRef();
  refEggsRT.current = props.activeEggsTopRight;

  const refEggsRB = useRef();
  refEggsRB.current = props.activeEggsBottomRight;

  const eggMove = () => {
    props.moveEgg();
    props.moveOpenEgg();
    if (refPosition.current === "3" && refEggsLT.current.includes(5)) {
      props.upScore();
    }
    if (refEggsLT.current.includes(5) && refPosition.current !== "3") {
      props.startOpenEgg("openChickenPositionLeft");
      props.missedEggs();
    }
    if (refPosition.current === "1" && refEggsLB.current.includes(5)) {
      props.upScore();
    }
    if (refEggsLB.current.includes(5) && refPosition.current !== "1") {
      props.startOpenEgg("openChickenPositionLeft");
      props.missedEggs();
    }

    if (refPosition.current === "4" && refEggsRT.current.includes(5)) {
      props.upScore();
    }
    if (refEggsRT.current.includes(5) && refPosition.current !== "4") {
      props.startOpenEgg("openChickenPositionRight");
      props.missedEggs();
    }
    if (refPosition.current === "2" && refEggsRB.current.includes(5)) {
      props.upScore();
    }
    if (refEggsRB.current.includes(5) && refPosition.current !== "2") {
      props.startOpenEgg("openChickenPositionRight");
      props.missedEggs();
    }
  };

  useEffect(() => {
    const t = setInterval(() => {
      eggMove();
    }, 500);
    return () => {
      clearInterval(t);
    };
  }, []);

  return (
    <div>
      <div> поймал {score}</div>
      <div> пропустил {missedEggs}</div>
      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    eggMove();*/}
      {/*  }}*/}
      {/*>*/}
      {/*  move*/}
      {/*</button>{" "}*/}
      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    props.aggEgg();*/}
      {/*  }}*/}
      {/*>*/}
      {/*  aggegs*/}
      {/*</button>*/}
      <Chicken
        coordinates={{ top: 50 }}
        eggs={props.chickenTopLeft}
        activeEggs={props.activeEggsTopLeft}
        positionPlayer={props.positionPlayer}
        left={true}
      />{" "}
      <Chicken
        coordinates={{ top: 60 }}
        eggs={props.chickenBottomLeft}
        activeEggs={props.activeEggsBottomLeft}
        positionPlayer={props.positionPlayer}
        left={true}
      />{" "}
      <Chicken
        coordinates={{ top: 50 }}
        eggs={props.chickenTopRight}
        activeEggs={props.activeEggsTopRight}
        positionPlayer={props.positionPlayer}
        left={false}
      />{" "}
      <Chicken
        coordinates={{ top: 60 }}
        eggs={props.chickenBottomRight}
        activeEggs={props.activeEggsBottomRight}
        positionPlayer={props.positionPlayer}
        left={false}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    positionPlayer: state.player.positionPlayer,
    score: state.player.score,
    missedEggs: state.player.missedEggs,
    chickenTopLeft: state.chicken.chickenTopLeft,
    chickenBottomLeft: state.chicken.chickenBottomLeft,
    chickenTopRight: state.chicken.chickenTopRight,
    chickenBottomRight: state.chicken.chickenBottomRight,

    activeEggsTopLeft: state.chicken.activeEggsTopLeft,
    activeEggsTopRight: state.chicken.activeEggsTopRight,
    activeEggsBottomRight: state.chicken.activeEggsBottomRight,
    activeEggsBottomLeft: state.chicken.activeEggsBottomLeft,
  };
};
export default connect(mapStateToProps, {
  moveEgg,
  aggEgg,
  upScore,
  moveOpenEgg,
  startOpenEgg,
  missedEggs,
})(ChickenContainer);

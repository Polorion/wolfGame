import * as React from "react";
import Player from "./Player";
import { connect, useSelector } from "react-redux";
import RabbitL from "../../img/player/left.png";
import rabbitR from "../../img/player/right.png";
import RabbitLRed from "../../img/player/leftRed.png";
import rabbitRRed from "../../img/player/rightRed.png";
import RabbitLBrown from "../../img/player/leftBrown.png";
import rabbitRBrown from "../../img/player/rightBrown.png";
import RabbitLBlue from "../../img/player/leftBlue.png";
import rabbitRBlue from "../../img/player/rightBlue.png";
import RabbitLYellow from "../../img/player/leftYellow.png";
import rabbitRYellow from "../../img/player/rightYellow.png";
import bruxx from "../../img/player/1.png";
import empty from "../../img/player/2.png";
import italy from "../../img/player/3.png";
import goose from "../../img/player/4.png";
import hitch from "../../img/player/5.png";

const PlayerContainer = (props) => {
  const whoOwner = useSelector((state) => state.player.owner);

  const player = () => {
    switch (whoOwner) {
      case "empty":
        return {
          playerL: RabbitL,
          playerR: rabbitR,
        };
      case "bruxx":
        return {
          playerL: RabbitLYellow,
          playerR: rabbitRYellow,
        };
      case "italy":
        return {
          playerL: RabbitLRed,
          playerR: rabbitRRed,
        };
      case "goose":
        return {
          playerL: RabbitLBrown,
          playerR: rabbitRBrown,
        };
      case "hitch":
        return {
          playerL: RabbitLBlue,
          playerR: rabbitRBlue,
        };
    }
    return {};
  };
  const setActive = () => {
    if (props.position === "1") {
      return {
        r: true,
        l: false,
      };
    }
    if (props.position === "3") {
      return {
        rr: true,
        l: false,
      };
    }
    if (props.position === "4") {
      return {
        r: false,
        l: true,
      };
    }
    if (props.position === "2") {
      return {
        r: false,
        ll: true,
      };
    }
  };

  return (
    <div>
      <Player
        left={39}
        position={props.position}
        img={player().playerL}
        active={setActive().rr}
        positionBasket={"1"}
      />{" "}
      <Player
        left={14}
        position={props.position}
        img={player().playerL}
        active={setActive().r}
        positionBasket={"1"}
      />
      <Player
        left={51}
        position={props.position}
        img={player().playerR}
        active={setActive().ll}
        positionBasket={"2"}
      />
      <Player
        left={76}
        position={props.position}
        img={player().playerR}
        active={setActive().l}
        positionBasket={"2"}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    position: state.player.positionPlayer,
  };
};
export default connect(mapStateToProps, {})(PlayerContainer);

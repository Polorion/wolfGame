import * as React from "react";
import Player from "./Player";
import { connect, useSelector } from "react-redux";
import RabbitL from "../../img/player/left.png";
import rabbitR from "../../img/player/right.png";
import wolfL from "../../img/wolf/wolf-left.png";
import wolfR from "../../img/wolf/wolf-right.png";

const PlayerContainer = (props) => {
  const whoOwner = useSelector((state) => state.player.owner);

  const player = () => {
    switch (whoOwner) {
      case "empty":
        return {
          playerL: RabbitL,
          playerR: rabbitR,
        };
      case "Wolf":
        return {
          playerL: wolfL,
          playerR: wolfR,
        };
    }
    return {};
  };
  console.log(props.position);
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

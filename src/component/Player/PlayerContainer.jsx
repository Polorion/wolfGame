import * as React from "react";
import Player from "./Player";
import { connect, useSelector } from "react-redux";
import RabbitL from "../../img/Rabbit/orig.png";
import rabbitR from "../../img/Rabbit/orig3.png";
import wolfL from "../../img/wolf/wolf-left.png";
import wolfR from "../../img/wolf/wolf-right.png";

const PlayerContainer = (props) => {
  const whoOwner = useSelector((state) => state.player.owner);

  const player = () => {
    switch (whoOwner) {
      case "Rabbit":
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
  const setActive = () => {
    if (props.position === "1" || props.position === "3") {
      return {
        r: true,
        l: false,
      };
    }
    if (props.position === "2" || props.position === "4") {
      return {
        r: false,
        l: true,
      };
    }
  };

  return (
    <div>
      <Player
        left={34}
        position={props.position}
        img={player().playerL}
        active={setActive().r}
        positionBasket={"1"}
      />
      <Player
        left={52}
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

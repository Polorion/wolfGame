import * as React from "react";
import Player from "./Player";
import { connect } from "react-redux";
import wolfL from "../../img/wolf/wolf-left.png";
import wolfR from "../../img/wolf/wolf-right.png";

const PlayerContainer = (props) => {
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
        left={30}
        position={props.position}
        img={wolfL}
        active={setActive().r}
        positionBasket={"1"}
      />
      <Player
        left={45}
        position={props.position}
        img={wolfR}
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

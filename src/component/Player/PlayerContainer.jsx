import * as React from "react";
import Player from "./Player";
import { connect } from "react-redux";

const PlayerContainer = (props) => {
  let left = 40;

  if (props.position === "1" || props.position === "3") {
    left = 33;
  }
  if (props.position === "2" || props.position === "4") {
    left = 48;
  }

  return <Player left={left} position={props.position} />;
};

const mapStateToProps = (state) => {
  return {
    position: state.MainPage.position,
  };
};
export default connect(mapStateToProps, {})(PlayerContainer);

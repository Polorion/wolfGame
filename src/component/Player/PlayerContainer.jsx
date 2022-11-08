import * as React from "react";
import Player from "./Player";
import { connect } from "react-redux";

const PlayerContainer = (props) => {
  let top = 50;
  let left = 40;

  if (props.position === "1" || props.position === "3") {
    top = 50;
    left = 40;
  }
  if (props.position === "2" || props.position === "4") {
    top = 50;
    left = 50;
  }

  return <Player top={top} left={left} position={props.position} />;
};

const mapStateToProps = (state) => {
  return {
    position: state.MainPage.position,
  };
};
export default connect(mapStateToProps, {})(PlayerContainer);

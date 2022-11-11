import * as React from "react";
import OpenChicken from "./OpenChicken/OpenChicken";
import { connect } from "react-redux";

const OpenChickenContainer = (props) => {
  return (
    <div>
      <OpenChicken
        open={props.openLeft}
        openChickenPosition={props.openChickenPositionLeft}
        coordinates={{ bottom: 30, left: 60 }}
        right={false}
      />{" "}
      <OpenChicken
        open={props.openLeft}
        openChickenPosition={props.openChickenPositionRight}
        coordinates={{ bottom: 30, right: 80 }}
        right={true}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    openLeft: state.openChicken.openChickenLeft,
    openChickenPositionLeft: state.openChicken.openChickenPositionLeft,
    openChickenPositionRight: state.openChicken.openChickenPositionRight,
  };
};
export default connect(mapStateToProps, {})(OpenChickenContainer);

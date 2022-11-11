import * as React from "react";
import OpenChicken from "./OpenChicken/OpenChicken";
import { connect } from "react-redux";

const OpenChickenContainer = (props) => {
  return (
    <div>
      <OpenChicken
        open={props.openLeft}
        openChickenPosition={props.openChickenPositionLeft}
        coordinates={{ bottom: 2, left: 10 }}
        right={false}
      />{" "}
      <OpenChicken
        open={props.openLeft}
        openChickenPosition={props.openChickenPositionRight}
        coordinates={{ bottom: 2, right: 10 }}
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

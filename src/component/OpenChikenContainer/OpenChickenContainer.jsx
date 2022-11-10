import * as React from "react";
import OpenChicken from "./OpenChicken/OpenChicken";
import { connect } from "react-redux";

const OpenChickenContainer = (props) => {
  return (
    <div>
      <OpenChicken
        open={props.openLeft}
        openChickenPosition={props.openChickenPosition}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    openLeft: state.openChicken.openChickenLeft,
    openChickenPosition: state.openChicken.openChickenPosition,
  };
};
export default connect(mapStateToProps, {})(OpenChickenContainer);

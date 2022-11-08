import * as React from "react";
import S from "./MoveButton.module.scss";

const MoveButton = (props) => {
  return (
    <div
      onClick={() => {
        props.action(props.position);
      }}
      className={`${S.btn} ${props.position}`}
    >
      press{" "}
    </div>
  );
};

export default MoveButton;

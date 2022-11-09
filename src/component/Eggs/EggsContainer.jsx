import * as React from "react";
import Eggs from "./Eggs";
import { useDispatch } from "react-redux";
import { upScore } from "../../store/reducers/RootReduser";

const EggsContainer = (props) => {
  if (props.wolfPosition === "1" && props.position === 5) {
    console.log("WOW");
    props.upScore();
    props.deleteEggs(props.id);
  }
  if (props.position > 5) {
    props.deleteEggs(props.id);
    console.log("crash");
  }
  const positionY = () => {
    switch (props.position) {
      case 1:
        return 10;
      case 2:
        return 20;
      case 3:
        return 30;
      case 4:
        return 40;
      case 5:
        return 50;
      case 6:
        return 201;
    }
  };
  const positionX = () => {
    switch (props.position) {
      case 1:
        return 10;
      case 2:
        return 20;
      case 3:
        return 30;
      case 4:
        return 40;
      case 5:
        return 50;
      case 6:
        return 20;
    }
  };

  return (
    <Eggs
      positionX={positionX()}
      positionY={positionY()}
      id={props.id}
      position={props.position}
    />
  );
};

export default EggsContainer;

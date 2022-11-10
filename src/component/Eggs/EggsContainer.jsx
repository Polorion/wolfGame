import * as React from "react";
import Eggs from "./Eggs";
import { useDispatch } from "react-redux";
import { moveOneEgg } from "../../store/reducers/RootReduser";
import { useEffect } from "react";

const EggsContainer = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(moveOneEgg(props.id, props.from));
      if (props.wolfPosition === "1" && props.position === 5) {
        props.upScore();
        props.deleteEggs(props.id, props.from);
      }
      if (props.position > 5) {
        props.deleteEggs(props.id, props.from);
      }
    }, 1000);
  }, [props.position]);

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
        return 20;
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
      from={props.from}
      position={props.position}
    />
  );
};

export default EggsContainer;

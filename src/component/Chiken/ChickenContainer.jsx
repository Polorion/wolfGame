import * as React from "react";
import Chicken from "./Chicken";
import { connect } from "react-redux";
import {
  AddEggsMore,
  changeInterval,
  deleteEgg,
  gameStartOrStop,
  MoveEggsAll,
  upScore,
} from "../../store/reducers/RootReduser";
import { useEffect, useMemo } from "react";

const ChickenContainer = (props) => {
  const interval = useMemo(() => {
    return setInterval(() => {
      props.AddEggsMore("leftTopEggs");
      props.AddEggsMore("leftBottomEggs");
    }, props.interval);
  }, [props.interval]);
  console.log(interval);

  const testinterval = (number) => {
    clearInterval(interval);
    props.changeInterval(number);
  };

  const addEggs = () => {
    props.AddEggsMore("leftTopEggs");
  };

  const deleteEggs = (id, from) => {
    props.deleteEgg(id, from);
  };
  const upScore = () => {
    props.upScore();
  };

  return (
    <div>
      <div>
        <button onClick={addEggs}>addEggs </button>
        <button
          onClick={() => {
            testinterval(4000);
          }}
        >
          addEdsdsggs{" "}
        </button>
      </div>
      <Chicken
        eggs={props.leftTopEggs}
        deleteEggs={deleteEggs}
        wolfPosition={props.wolfPosition}
        upScore={upScore}
        from={"leftTopEggs"}
      />
      {/*<Chicken*/}
      {/*  eggs={props.leftBottomEggs}*/}
      {/*  deleteEggs={deleteEggs}*/}
      {/*  wolfPosition={props.wolfPosition}*/}
      {/*  upScore={upScore}*/}
      {/*  from={"leftBottomEggs"}*/}
      {/*/>*/}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wolfPosition: state.MainPage.position,
    leftTopEggs: state.MainPage.leftTopEggs,
    leftBottomEggs: state.MainPage.leftBottomEggs,
    rightTopEggs: state.MainPage.rightTopEggs,
    rightBottomEggs: state.MainPage.rightBottomEggs,
    start: state.MainPage.start,
    interval: state.MainPage.interval,
  };
};
export default connect(mapStateToProps, {
  gameStartOrStop,
  upScore,
  MoveEggsAll,
  changeInterval,
  AddEggsMore,
  deleteEgg,
})(ChickenContainer);

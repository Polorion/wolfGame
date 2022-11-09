import * as React from "react";
import Chicken from "./Chicken";
import { connect } from "react-redux";
import {
  AddEggsMore,
  deleteEgg,
  gameStartOrStop,
  MoveEggsAll,
  upScore,
} from "../../store/reducers/RootReduser";
import { useEffect } from "react";

const ChickenContainer = (props) => {
  console.log(props.leftTopEggs);
  useEffect(() => {
    let timer;
    if (props.start === true) {
      timer = setInterval(() => {
        props.MoveEggsAll();
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [props.start]);

  const startOrStop = () => {
    props.gameStartOrStop();
  };
  const addEggs = () => {
    setTimeout(() => {
      props.AddEggsMore();
    }, 1000);
  };
  const moveEggs = () => {
    props.MoveEggsAll();
  };
  const deleteEggs = (id) => {
    props.deleteEgg(id);
  };
  const upScore = () => {
    props.upScore();
  };

  return (
    <div>
      <div>
        <button onClick={startOrStop}>startorgame </button>
        <button onClick={addEggs}>addEggs </button>
        <button
          onClick={() => {
            deleteEggs(1);
          }}
        >
          deleteone{" "}
        </button>
      </div>
      <Chicken
        eggs={props.leftTopEggs}
        deleteEggs={deleteEggs}
        wolfPosition={props.wolfPosition}
        upScore={upScore}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wolfPosition: state.MainPage.position,
    leftTopEggs: state.MainPage.leftTopEggs,
    start: state.MainPage.start,
  };
};
export default connect(mapStateToProps, {
  gameStartOrStop,
  upScore,
  MoveEggsAll,
  AddEggsMore,
  deleteEgg,
})(ChickenContainer);

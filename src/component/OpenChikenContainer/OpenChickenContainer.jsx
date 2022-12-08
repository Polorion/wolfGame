import * as React from "react";
import S from "./OpenChicken/OpenChicken.module.scss";
import { connect, useSelector } from "react-redux";
import mandariImg from "../../img/player/fruit.png";

const OpenChickenContainer = (props) => {
  const mandarin = useSelector((state) => state.openChicken.madarin);
  console.log(mandarin);
  return (
    <div>
      <div
        className={`${S.img} ${mandarin === 1 && S.active}`}
        style={{ bottom: "0%", left: "10%", position: "absolute" }}
      >
        <img src={mandariImg} alt="" />
      </div>
      )
      <div
        className={`${S.img} ${mandarin === 2 && S.active}`}
        style={{ bottom: "0%", left: "35%", position: "absolute" }}
      >
        <img src={mandariImg} alt="" />
      </div>
      <div
        className={`${S.img} ${mandarin === 3 && S.active}`}
        style={{ bottom: "0%", left: "60%", position: "absolute" }}
      >
        <img src={mandariImg} alt="" />
      </div>
      <div
        className={`${S.img} ${mandarin === 4 && S.active}`}
        style={{ bottom: "0%", left: "85%", position: "absolute" }}
      >
        <img src={mandariImg} alt="" />
      </div>
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

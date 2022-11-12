import * as React from "react";
import S from "./ChoicePlayer.module.scss";

const Persona = (props) => {
  return (
    <button
      className={S.persona}
      onClick={() => {
        props.action(props.name);
      }}
    >
      <img src={props.img} alt="" />
      <p className={S.name}> {props.name}</p>
    </button>
  );
};

export default Persona;

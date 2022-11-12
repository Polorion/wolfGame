import * as React from "react";
import S from "./ChoicePlayer.module.scss";
import wolf from "../../img/wolf/wolf-left.png";
import rabbit from "../../img/Rabbit/orig.png";
import Persona from "./Persona";
import { useDispatch } from "react-redux";
import { choiceOwner } from "../../store/reducers/PlayerReducer";

const img = [
  { img: wolf, name: "Wolf" },
  { img: rabbit, name: "Rabbit" },
];

const ChoicePlayer = (props) => {
  const dispatch = useDispatch();

  const changeOwner = (name) => {
    dispatch(choiceOwner(name));
  };
  return (
    <div className={`${S.bodyChoice} ${props.owner && S.open}`}>
      <div className={S.title}>ВЫБОР ПЕРСОНАЖА</div>
      <div className={S.choice}>
        {img.map((el) => {
          return (
            <Persona
              key={el.img}
              img={el.img}
              name={el.name}
              action={changeOwner}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChoicePlayer;

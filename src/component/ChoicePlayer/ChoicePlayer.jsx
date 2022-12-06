import * as React from "react";
import S from "./ChoicePlayer.module.scss";
import bruxx from "../../img/player/1.png";
import empty from "../../img/player/2.png";
import italy from "../../img/player/3.png";
import goose from "../../img/player/4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hitch from "../../img/player/5.png";
import Slider from "react-slick";

import Persona from "./Persona";
import { useDispatch } from "react-redux";
import { choiceOwner } from "../../store/reducers/PlayerReducer";
import { useRef } from "react";

const img = [
  { img: bruxx, name: "bruxx" },
  { img: empty, name: "empty" },
  { img: italy, name: "italy" },
  { img: goose, name: "goose" },
  { img: hitch, name: "hitch" },
];

const ChoicePlayer = (props) => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const changeOwner = (name) => {
    dispatch(choiceOwner(name));
  };
  var settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className={S.q}>
      <div className={S.t}>
        <Slider {...settings}>
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
        </Slider>
      </div>
    </div>
  );
};

export default ChoicePlayer;

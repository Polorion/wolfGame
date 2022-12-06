import * as React from "react";
import S from "./WindowGame.module.scss";

import MoveButton from "../MoveButton/MoveButton";
import PlayerContainer from "../Player/PlayerContainer";
import { useDispatch, useSelector } from "react-redux";

import { movePositionPlayer } from "../../store/reducers/PlayerReducer";
import ChickenContainer from "./ChickenContainer/ChickenContainer";
import OpenChickenContainer from "../OpenChikenContainer/OpenChickenContainer";
import { aggEgg } from "../../store/reducers/ChickenReducer";
import { fromEggs } from "../../Helper/CreateFromEggs";
import { useEffect, useRef, useState } from "react";
import ChoisePlayer from "../ChoicePlayer/ChoicePlayer";
import ButtonControlGameContainer from "../ButtonControlerGame/ButtonControlGameContainer";

const WindowGame = () => {
  const ref = useRef();
  const owner = useSelector((state) => state.player.owner);
  const runGame = useSelector((state) => state.player.gameIsRun);
  const speedEggSpawn = useSelector((state) => state.player.speedEggSpawn);

  const [h, setH] = useState(window.screen.availWidth);
  useEffect(() => {
    const test = document.querySelector(".test");
    setH(test.offsetHeight);
    const windowRaz = () => {
      const w = document.querySelector(".container").clientWidth;
      setH(test.offsetHeight);
    };
    window.addEventListener("resize", windowRaz);
    window.addEventListener("orientationchange", windowRaz);
    return () => {
      window.removeEventListener("resize", windowRaz);
      window.removeEventListener("orientationchange", windowRaz);
    };
  }, []);
  const dispatch = useDispatch();
  const BTN = [
    {
      position: "3",
    },
    {
      position: "4",
    },
    {
      position: "1",
    },
    {
      position: "2",
    },
  ];
  useEffect(() => {
    let t;
    if (runGame) {
      t = setInterval(() => {
        const from = fromEggs();
        dispatch(aggEgg(from));
      }, speedEggSpawn);
    }
    return () => {
      clearInterval(t);
    };
  }, [runGame, speedEggSpawn]);

  const changePosition = (pos) => {
    dispatch(movePositionPlayer(pos));
  };

  return (
    <div>
      {owner ? (
        <div className={S.gameWindow}>
          <div
            className={"container"}
            ref={ref}
            style={{
              height: `${h}px`,

              width: `100%`,
            }}
          >
            {owner && <ButtonControlGameContainer />}
            <ChickenContainer />
            <OpenChickenContainer />
            <PlayerContainer />
            <div className={S.buttonBody}>
              {BTN.map((el) => (
                <MoveButton
                  key={el.position}
                  position={el.position}
                  action={changePosition}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <ChoisePlayer owner={owner} />
      )}
    </div>
  );
};

export default WindowGame;

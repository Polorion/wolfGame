import * as React from "react";
import S from "./GameOver.module.scss";
import { ReactComponent as Box } from "../../img/box.svg";

const GameOver = () => {
  return (
    <div className={S.body}>
      <div className={S.score}> вы собрали 200 мандаринов</div>
      <form className={S.form}>
        <input placeholder={"Введите телефон"} type="tel" />
        <button> отправить</button>
      </form>
      <Box />
    </div>
  );
};

export default GameOver;

import * as React from "react";
import S from "./GameOver.module.scss";
import { ReactComponent as Box } from "../../img/gameover/boxes.svg";
import { ReactComponent as BoxOpen } from "../../img/gameover/openBox.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState, CSSProperties, useEffect } from "react";
import DotLoader from "react-spinners/SyncLoader";
import {
  choiceOwner,
  gameOver,
  resetAllScore,
  resetTimeGame,
  runGame,
  setClearBag,
} from "../../store/reducers/PlayerReducer";
import { resetAllChicken } from "../../store/reducers/ChickenReducer";
import {
  refreshOpenMandarin,
  restartAllEggs,
} from "../../store/reducers/OpenChickeReducer";

const GameOver = (props) => {
  const [choise, setChoise] = useState(false);
  useEffect(() => {
    setChoise(true);
  }, []);
  const override: CSSProperties = {
    display: "block",
    margin: "  auto",
    borderColor: "orange",
  };

  const [load, setLoad] = useState(false);
  const scorePlayer = useSelector((state) => state.player.score);

  const org_id = "03650000-6bec-ac1f-086e-08d99fc3c262";
  const [value, setValue] = useState(+79650604025);
  const inputHandler = (e) => {
    setValue((prevState) => e.target.value);
  };

  const handlerSubmit = async () => {
    setLoad(true);

    let tokenResponse;
    try {
      tokenResponse = await getToken();
    } catch (err) {
      setLoad(false);
      alert("проблемы на сервере");
    }
    if (tokenResponse.data.status < 250) {
      const token = tokenResponse.data.token;

      let userResponse;

      try {
        userResponse = await getUser(token);
      } catch (err) {
        setLoad(false);
        alert(
          " не смог получить юзера возможно вас нет в базе или проверьте правильность номера"
        );
      }
      const user = userResponse.data;
      const userID = userResponse.data.id;
      const userIDWalet = userResponse.data.walletBalances.find(
        (el) =>
          el.wallet.name ===
          "Бонусы Italy - Общая программа по накоплению и списанию бонусов"
      );

      const categoryResponse = await getCategory(token);
      const idCategory = categoryResponse.data.find(
        (el) => el.name === "WOLF_GAME_COMPLEATED"
      );

      const addCategoryResponse = await addCategory(
        token,
        idCategory.id,
        userID
      );

      if (addCategoryResponse.data === 200) {
        const addBonusResponse = await addBonus(
          token,
          userIDWalet.id,
          userID,
          scorePlayer
        );
      } else {
        alert("вы уже участвовали в игре");
      }
    } else {
      alert("ошибка сервера");
    }

    setLoad(false);
  };
  const getUser = (token) => {
    return axios.post(`http://95.143.179.211:2000/getuser`, {
      token: token,
      number: value,
      org_id: org_id,
    });
  };
  const getCategory = (token) => {
    return axios.post(`http://95.143.179.211:2000/getcategory`, {
      token: token,
      org_id: org_id,
    });
  };
  const addCategory = (token, idCategory, idUser) => {
    return axios.post(`http://95.143.179.211:2000/addcategory`, {
      token: token,
      org_id: org_id,
      idCategory: idCategory,
      idUser: idUser,
    });
  };
  const addBonus = (token, walletId, idUser, sum) => {
    return axios

      .post(`http://95.143.179.211:2000/down`, {
        token: token,
        organizationId: org_id,
        walletId: walletId,
        customerId: idUser,
        sum: sum,
      })
      .then((res) => console.log(res));
  };
  const getToken = () => {
    return axios.post(`http://95.143.179.211:2000/gettoken`);
  };
  const dispatch = useDispatch();
  const score = useSelector((state) => state.player.score);
  return (
    <div className={`${S.body} ${props.gameOver && S.gameOver}`}>
      {choise ? (
        <div className={`${S.choise} `}>
          <div className={S.box}>
            {choise ? (
              <Box />
            ) : (
              <div className={S.tops}>
                <BoxOpen />
              </div>
            )}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(resetAllScore());
              dispatch(resetAllChicken());
              dispatch(restartAllEggs());
              dispatch(gameOver(false));
              dispatch(refreshOpenMandarin());
              dispatch(choiceOwner(null));
              dispatch(runGame(false));
              dispatch(resetTimeGame());
              dispatch(setClearBag());
            }}
          >
            ИГРАТЬ СНОВА
          </button>{" "}
          <button
            onClick={() => {
              setChoise(false);
            }}
          >
            Забрать Подарок
          </button>
        </div>
      ) : (
        <div className={`${S.text} `}>
          <div className={S.info}>
            <h1>УРА ВЫ НАБРАЛИ</h1>
            <h2>{score}</h2>
            <h3>БАЛЛОВ</h3>
          </div>
          <div className={S.card}>
            <p>Ведите номер карты лояльности</p>
          </div>
          <form>
            <input value={value} onInput={inputHandler} type="tel" />
            {value && (
              <button
                className={S.send}
                onClick={(e) => {
                  e.preventDefault();
                  handlerSubmit();
                }}
              >
                ОТПРАВИТЬ
              </button>
            )}
          </form>
          <div className={S.loader}>
            <DotLoader
              color={"black"}
              loading={load}
              cssOverride={override}
              size={5}
              aria-label="barLoader"
              data-testid="loader"
            />
          </div>
        </div>
      )}
      )
    </div>
  );
};

export default GameOver;

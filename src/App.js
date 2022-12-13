import { Provider } from "react-redux";
import store from "./store/Store";
import Test from "./component/Test";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Zapros />
      </div>
    </Provider>
  );
}

export default App;
const Zapros = () => {
  let script = document.createElement("script");
  script.src = `http://another.com/weather.json?callback=gotWeather`;
  document.body.append(script);
  console.log(script);

  const getToken = (token, limit = 5, offset = 1) => {
    return axios.get(
      `https://iiko.biz:9900/api/0/auth/access_token?user_id=Bruxxspb&user_secret=Bruxxspb123`
    );
  };
  const org_id = "03650000-6bec-ac1f-086e-08d99fc3c262";

  const [token, setToken] = useState();
  const [idUser, setIdUser] = useState();
  const [idCategory, setIdCategory] = useState();
  const [walletId, setWalletId] = useState();
  const getCategories = (token) => {
    return axios.get(
      `https://iiko.biz:9900/api/0/organization/${org_id}/guest_categories?access_token=${token}`
    );
  };
  const findUser = () => {
    return axios.get(
      `https://iiko.biz:9900/api/0/customers/get_customer_by_phone?access_token=${token}&organization=${org_id}&phone=+79650604025`
    );
  };
  const addCategory = () => {
    return axios.post(
      `https://iiko.biz:9900/api/0/customers/${idUser}/add_category?access_token=${token}&organization=${org_id}&categoryId=${idCategory}`
    );
  };
  const addBonus = () => {
    return axios.post(
      `https://iiko.biz:9900/api/0/customers/withdraw_balance?access_token=${token}`,
      {
        customerId: "d7c92c93-782f-11ea-80f4-d8d38565926f",
        organizationId: "03650000-6bec-ac1f-086e-08d99fc3c262",
        walletId: "5f850000-90a3-0025-25c7-08d9875bb74f",
        sum: 1,
      }
    );
  };

  return (
    <>
      <button
        onClick={() => {
          getToken().then((res) => {
            console.log(res.data);
            setToken(res.data);
          });
        }}
      >
        pfghjc
      </button>
      <button
        onClick={() => {
          console.log(token);
          getCategories(token).then((res) => {
            console.log(res);
            const find = res.data.find(
              (el) => el.name === "WOLF_GAME_COMPLEATED"
            );
            setIdCategory(find.id);
          });
        }}
      >
        zapros categories
      </button>{" "}
      <button
        onClick={() => {
          findUser(token).then((res) => {
            setIdUser(res.data.id);
            setWalletId(res.data.walletBalances[1].wallet.id);
            console.log(res.data);
          });
        }}
      >
        findUzer
      </button>{" "}
      <button
        onClick={() => {
          addCategory(token).then((res) => {
            console.log(res);
          });
        }}
      >
        dobavitCategories
      </button>
      <button
        onClick={() => {
          // addCategory(token).then((res) => {
          //   console.log(res);
          // });
          addBonus();
        }}
      >
        addBonus
      </button>
    </>
  );
};

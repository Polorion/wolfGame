import WindowGame from "./component/WindowGame/WindowGame";
import { Provider } from "react-redux";
import store from "./store/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <WindowGame />
      </div>
    </Provider>
  );
}

export default App;

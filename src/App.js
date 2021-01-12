import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import Product from "./components/product";

function App() {
  return (
    <Provider store={store}>
      <div className="App"></div>
      <Product />
    </Provider>
  );
}

export default App;

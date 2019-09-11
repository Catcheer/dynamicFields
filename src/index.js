import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import AddProduct from "./components/add";

import Add from "./redux/index";

import "./styles.css";

function App() {
  let store = createStore(Add);
  return (
    <div className="App">
      <Provider store={store}>
        <h1>dynamicFields</h1>
        <AddProduct />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

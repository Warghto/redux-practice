import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

import App from "./App";

const initialState = { value: 0 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        value: state.value + 1,
      };
    case "DEC":
      return {
        ...state,
        value: state.value - 1,
      };
    case "RND":
      return {
        ...state,
        value: state.value * action.payload,
      };
    default:
      return state;
  }
};
const store = createStore(reducer);

const update = () => {
  document.getElementById("counter").textContent = store.getState().value;
};

store.subscribe(update);
const inc = () => ({ type: "INC" });
const dec = () => ({ type: "DEC" });
const rnd = () => ({ type: "RND", payload: value });

document.getElementById("inc").addEventListener("click", () => {
  store.dispatch(inc());
});
document.getElementById("dec").addEventListener("click", () => {
  store.dispatch(dec());
});
document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 5);
  store.dispatch(rnd(value));
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<StrictMode></StrictMode>);

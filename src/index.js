import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import reducer from "./reducer";
import { inc, dec, rnd } from "./actions";

// import App from "./App";

const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

const update = () => {
  document.getElementById("counter").textContent = getState().value;
};

subscribe(update);

const incDispatch = () => dispatch(inc());
const decDispatch = () => dispatch(dec());
const rndDispatch = (value) => dispatch(rnd(value));

document.getElementById("inc").addEventListener("click", () => {
  incDispatch();
});
document.getElementById("dec").addEventListener("click", () => {
  decDispatch();
});
document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 5);
  rndDispatch(value);
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<StrictMode></StrictMode>);

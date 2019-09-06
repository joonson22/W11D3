import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import { loginUser } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const store1 = configureStore();
  window.store = store1;
  window.getState = store1.getState;
  window.dispatch = store1.dispatch;
  window.loginUser = loginUser;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store1} />, root);
});
import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
// import { signup, login, logout } from './util/session_api_util'; //testing purposes
import configureStore from './store/store'
import {signup} from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.store = store;
  // testing ajax api util methods
  // window.login = login;
  window.signup = signup;
  // window.logout = logout;


  ReactDOM.render(<Root store={store} />, root);
});
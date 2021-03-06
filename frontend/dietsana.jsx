import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import {logout } from './util/session_api_util'; 
import configureStore from './store/store'
import {signup} from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const debounce = (fn) => {
    let frame;
    return (...params) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      frame = requestAnimationFrame(() => {
        fn(...params);
      });

    }
  };
  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  }
  document.addEventListener('scroll', debounce(storeScroll), { passive: true });
  storeScroll();


  // const store = createStore(preloadedState);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.store = store;
  
  // testing ajax api util methods
  // window.login = login;
  window.signup = signup;
  window.logout = logout;


  ReactDOM.render(<Root store={store} />, root);
});
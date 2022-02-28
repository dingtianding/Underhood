import React from 'react';
import ReactDOM from 'react-dom';
import { login } from './actions/session_action';
import Root from './components/root';
import createStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser){
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    }
  }
  const store = createStore(preloadedState);


  ReactDOM.render(<Root store={store} />, root);
});
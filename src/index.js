import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, StoreProvider } from 'easy-peasy'

let user = localStorage.getItem('user')

if(user != null){
  user = JSON.parse(user)
  console.log(user)
}

try { user.firstName = user.displayName.split(" ")[0] }
catch(e){  }


const store = createStore({
  user
});

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


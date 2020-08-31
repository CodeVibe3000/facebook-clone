import React from 'react';
import "./css/App.css"

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";
import { Login } from './components/Login';

import { useStoreState } from 'easy-peasy'

function App() {
  let user = useStoreState(store => store.user)
  console.log(user)

  return (
    <div className="app">
      {
        !user ? (
          <Login />
        ) : (
            <>
              <Header />
              <div className="app__body">
                <Sidebar />
                <Feed />
              </div>
            </>
          )
      }
    </div>
  );
}

export default App;

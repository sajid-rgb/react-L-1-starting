import React, { useState } from 'react';
import Home from './Components/Home/Home.js'
import { Header } from './Components/Header/Header.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const navBar = [{
    id: 1,
    nav: 'Home',
  },
  {
    id: 2,
    nav: 'About',
  },
  {
    id: 3,
    nav: 'Contact'
  },
  {
    id: 4,
    nav: 'Login'
  }]

  return (
    <div className="App">
      <ul className="navigation">
        {
          navBar.map(navigation => <Header navigation={navigation} key={navigation.id}> </Header>)
        }
      </ul>
      <Home />
    </div>
  );
}

export default App;

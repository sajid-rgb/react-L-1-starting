import React, { useState } from 'react';
import Home from './Components/Home/Home.js'
import About from './Components/About/About'
import { Header } from './Components/Header/Header.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login.js';
import { navBar } from './Components/data/navbar.js';
import SingleCountry from './Components/Home/Country/SingleCountry.js';



function App() {
  return (
    <div className="App">
      <Router>
        <ul className="navigation">
          {
            navBar.map(navigation => <Header navigation={navigation} key={navigation.id}> </Header>)
          }
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/country/:common">
            <SingleCountry />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <h4 className="text-danger text-center mt-5">404! page not found</h4>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

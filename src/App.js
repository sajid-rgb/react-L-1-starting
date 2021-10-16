import React, { createContext, useState } from 'react';
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
import PrivateRoute from './Components/Login/PrivateRoute.js';

export const LoginContext = createContext()


function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div>
      <LoginContext.Provider value={{ isLogin, setIsLogin }} >
        <Router>
          <ul className="navigation">
            {navBar.map(navigation => <Header navigation={navigation} key={navigation.id}> </Header>)}
          </ul>
          <Switch>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
            <PrivateRoute exact path="/country/:common">
              <SingleCountry />
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <h4 className="text-danger text-center mt-5">404! page not found</h4>
            </Route>
          </Switch>
        </Router>
      </LoginContext.Provider>
    </div>

  );
}

export default App;

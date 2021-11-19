import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../App'
import './Header.css'
import firebase from '../../firebase.config'
export const Header = (props) => {
  const { isLogin, setIsLogin } = useContext(LoginContext)
  const handleLogout = (path) => {
    if (path === '/login') {
      firebase.auth.signOut().then(() => {
        // Sign-out successful.
        setIsLogin(false);

      }).catch((error) => {
        // An error happened.
      });
    }
  }
  return (

    <Link to={props.navigation.pathName} className="link" onClick={() => handleLogout(props.navigation.pathName)}><li>{props.navigation.nav === 'Login' && isLogin === true ? 'Log out' : props.navigation.nav}</li> </Link>

  )
}
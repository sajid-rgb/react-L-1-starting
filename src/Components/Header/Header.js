import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../App'
import firebase from 'firebase'
import './Header.css'
import { firebaseConfig } from '../../firebase.config'
export const Header = (props) => {
  const { isLogin, setIsLogin } = useContext(LoginContext)

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleLogout = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      setIsLogin(false);

    }).catch((error) => {
      // An error happened.
    });
  }
  return (

    <Link to={props.navigation.pathName} className="link" onClick={handleLogout}><li>{props.navigation.nav === 'Login' && isLogin === true ? 'Log out' : props.navigation.nav}</li> </Link>

  )
}
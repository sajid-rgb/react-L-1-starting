import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../App'
import './Header.css'
export const Header = (props) => {
  const { isLogin, setIsLogin } = useContext(LoginContext)

  const handleLogout = () => {
    if (isLogin && props.navigation.pathName === 'Login') {
      setIsLogin(false)
    }
  }
  return (

    <Link to={props.navigation.pathName} className="link" onClick={handleLogout}><li>{props.navigation.nav === 'Login' && isLogin === true ? 'Log out' : props.navigation.nav}</li> </Link>

    // <ul className="navigation">
    //   <Link to="/" className="link"><li>Home</li></Link>
    //   <Link to="/about" className="link"><li>About</li> </Link>
    //   <Link to="/about" className="link"><li>Contact</li> </Link>
    //   <Link to="/login" className="link"><li>Login</li> </Link>
    // </ul>


  )
}
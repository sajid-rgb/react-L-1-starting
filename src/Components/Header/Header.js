import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export const Header = (props) => {
  return (

    <Link to={props.navigation.pathName} className="link"><li>{props.navigation.nav}</li> </Link>

    // <ul className="navigation">
    //   <Link to="/" className="link"><li>Home</li></Link>
    //   <Link to="/about" className="link"><li>About</li> </Link>
    //   <Link to="/about" className="link"><li>Contact</li> </Link>
    //   <Link to="/login" className="link"><li>Login</li> </Link>
    // </ul>


  )
}
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { LoginContext } from '../../App';
import AppButton from '../Home/ui/AppButton';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { isLogin, setIsLogin } = useContext(LoginContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleLogin = () => {
        if (email && password) {
            console.log(email, password)
            setIsLogin(true);
        }
        history.replace(from);
    }
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <input type="text" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter your password" className='mt-3' onChange={(e) => setPassword(e.target.value)} />
            <AppButton title={'Sign In'} buttonStyle={'tag-button'} handleClick={handleLogin} />
        </div>
    );
};

export default Login;
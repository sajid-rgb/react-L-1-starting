import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { LoginContext } from '../../App';
import AppButton from '../Home/ui/AppButton';
import firebase from "firebase";
import { Link } from 'react-router-dom';
import { firebaseConfig } from '../../firebase.config';
import Error from '../Home/ui/Error';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const { isLogin, setIsLogin } = useContext(LoginContext)

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleLogin = () => {

        if (email && password) {
            console.log(email, password)
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    console.log(user.email);
                    if (user.email) {
                        setIsLogin(true);
                        setErrorMessage('');
                    }
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });

        }

    }
    useEffect(() => {
        if (isLogin) {
            history.replace(from);
        }
    }, [isLogin])


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                console.log(token)
                var user = result.user;
                console.log(user.email);
                setIsLogin(true);
                history.replace(from)
                setErrorMessage('');
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                setErrorMessage(errorMessage);
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });




    }
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <input type="text" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter your password" className='mt-3' onChange={(e) => setPassword(e.target.value)} />
            <AppButton title={'Sign In'} buttonStyle={'tag-button'} handleClick={handleLogin} />
            <button onClick={handleGoogleSignIn} > Google Sign In </button>
            <Error errorMessage={errorMessage} />
            <Link to='/signup'>I have no account</Link>
        </div>
    );
};

export default Login;
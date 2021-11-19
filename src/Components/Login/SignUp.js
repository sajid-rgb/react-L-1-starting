import React, { useState } from 'react';
import AppButton from '../Home/ui/AppButton';
import Error from '../Home/ui/Error';
import firebase from '../../firebase.config';
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = () => {
        if (password === confirmPassword) {
            firebase.auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    console.log(user.email);
                    setErrorMessage('');
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage);
                    setErrorMessage(errorMessage);
                    // ..
                });
        } else {
            setErrorMessage("password doesn't match")
        }

    }
    return (
        <div>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <input type="text" placeholder="Enter your email address" onBlur={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Enter your password" className='mt-3' onBlur={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Enter your password" className='mt-3' onBlur={(e) => setConfirmPassword(e.target.value)} />
                <Error errorMessage={errorMessage} />
                <AppButton title={'Sign Up'} buttonStyle={'tag-button'} handleClick={handleSignUp} />
            </div>
        </div>
    );
};

export default SignUp;
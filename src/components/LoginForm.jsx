import React, { useState } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import './LoginForm.css';

const reqresUrl = 'https://reqres.in/api/login';
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const validateEmail = (email) => {
  return emailRegex.test(email);
};

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);

    const handleEmailChange = (e) => {
        let emailVal = e.target.value;
        setEmail(emailVal);
        setEmailError('')

        if (emailVal && !validateEmail(emailVal)) {
            setEmailError('Please enter a valid email')
            return
        }        
    };

    const handlePasswordChange = (e) => {
        let passwordVal = e.target.value;
        setPassword(passwordVal);
        setPasswordError('')
        

        if (passwordVal && passwordVal.length < 7) {
            setPasswordError('The password must be 8 character or longer')
            return
        }
    };

    const handleRememberMeChange = (e) => {
        console.log('Remember me checked -- not implemented');
    };

    const handleForgotPasswordClick = (e) => {
        e.preventDefault();
        console.log('Forgot password link clicked -- not implemented');
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        console.log('Register link clicked -- not implemented');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length === 0) {
            setEmailError('Please enter your email')
            return
        }

        if (password.length === 0) {
            setPasswordError('Please enter a password')
            return
        }

        if (emailError || passwordError) {
            return
        }

        let payload = {
            email: email,
            password: password
        }

        setLoginError('');
        setLoginSuccess('');

        fetch(reqresUrl, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.log('Error:', data.error);
                setLoginError(data.error);
            }

            else {
                console.log('Success:', data);
                setLoginSuccess(data.token)
            }
        })
        .catch(error => {
            console.log('Error:', error);
            setLoginError(error);
        });
    };

    return (
        <div className='wrapper' data-testid='login-form'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text'
                        placeholder='Email'
                        data-testid='email-input'
                        onChange={handleEmailChange} />
                    <FaUser className='icon' />
                </div>
                <div className='error-box'>
                    <p className='error'>{emailError}</p>
                </div>
                <div className='input-box'>
                    <input type='password'
                        placeholder='Password'
                        data-testid='password-input'
                        onChange={handlePasswordChange} />
                    <FaLock className='icon' />
                </div>
                <div className='error-box'>
                    <p className='error'>{passwordError}</p>
                </div>

                <div className='remember-me'>
                    <label>
                        <input type='checkbox' onChange={handleRememberMeChange}/>
                        Remember me
                    </label>
                    <a href='#' onClick={handleForgotPasswordClick}>Forgot password?</a>
                </div>

                <button type='submit' data-testid='login-button'>Login</button>

                <div className='register-link'>
                    <p>Don't have an account? <a href='#' onClick={handleRegisterClick}>Register</a></p>
                </div>
            </form>
            <div className='response-message'>
                {loginSuccess && <p className='success'>Login Successful -- Token: {loginSuccess}</p>}
                {loginError && <p className='error'>Login Error: {loginError}</p>}
            </div>
        </div>
    );
};

export default LoginForm;
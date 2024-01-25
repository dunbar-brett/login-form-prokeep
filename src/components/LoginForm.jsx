import React, { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import './LoginForm.css';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const validateEmail = (email) => {
  return emailRegex.test(email);
};

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (e) => {
        setEmailError("")
        if ("" === email) {
            setEmailError("Please enter your email")
            return
        }

        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email")
            return
        }

        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswordError("")
        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }

        if (password.length < 7) {
            setPasswordError("The password must be 8 characters or longer")
            return
        }
        setPassword(e.target.value);
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
        console.log(`Email: ${email} Password: ${password}`);
        
        // submit to api
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text"
                        placeholder='Email'
                        onChange={handleEmailChange}
                        required/>
                    <FaUser className='icon' />
                </div>
                <div>
                    <p className="error">{emailError}</p>
                </div>
                <div className='input-box'>
                    <input type="password"
                        placeholder='Password'
                        onChange={handlePasswordChange}
                        required/>
                    <FaLock className='icon' />
                </div>
                <div>
                    <p className="error">{passwordError}</p>
                </div>

                <div className="remember-me">
                    <label>
                        <input type="checkbox" onChange={handleRememberMeChange}/>
                        Remember me
                    </label>
                    <a href="#" onClick={handleForgotPasswordClick}>Forgot password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#" onClick={handleRegisterClick}>Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
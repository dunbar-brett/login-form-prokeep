import React, { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import './LoginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        // handle validation
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        // handle validation
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
        console.log(`Username: ${username} Password: ${password}`);
        // add logic
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text"
                        placeholder='Username'
                        onChange={handleUsernameChange}
                        required/>
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password"
                        placeholder='Password'
                        onChange={handlePasswordChange}
                        required/>
                    <FaLock className='icon' />
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
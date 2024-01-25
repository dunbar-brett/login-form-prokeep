import React from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required/>
                    <FaUser />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required/>
                    <FaLock />
                </div>

                <div className="remember-me">
                    <label>
                        <input type="checkbox" />
                        Remember me
                        <a href="#">Forgot password?</a>
                    </label>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
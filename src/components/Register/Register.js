import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const { handleEmail, handlePassword, handleName, emailPasswordSignUp, user, logout } = useAuth();
    return (
        <div className="register">
            {
                user.displayName ? <div>
                    <h2>Your account is Registered.</h2>
                    <button onClick={logout}>Log out to create new account</button>
                </div> :
                    <div>
                        <h2>Please register</h2>
                        <form onSubmit={emailPasswordSignUp}>
                            <input onBlur={handleName} type="text" placeholder="your full name" /> <br />
                            <input onBlur={handleEmail} type="email" placeholder="your email address" /> <br />
                            <input onBlur={handlePassword} type="password" placeholder="new password" /><br />
                            <input type="submit" value="Register" />
                        </form>
                        <Link to="/login">Already Registered?</Link>
                    </div>
            }
        </div>
    );
};

export default Register;
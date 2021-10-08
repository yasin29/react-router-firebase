import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn, githubSignIn, facebookSignIn, handleEmail, handlePassword, loginWithEmail, user } = useAuth();
    return (
        <div>
            {
                user.displayName ? <p>Successfully logged in</p> :
                    <div>
                        <h2>Login</h2>
                        <form onSubmit={loginWithEmail}>
                            <input onBlur={handleEmail} type="email" placeholder="your email address" /> <br />
                            <input onBlur={handlePassword} type="password" placeholder="new password" /><br />
                            <input type="submit" value="Log In" />
                        </form>
                        <p>Or use one of these options</p>
                        <button onClick={googleSignIn}>Google Sign in</button> <br />
                        <button onClick={githubSignIn}>Github Sign in</button> <br />
                        <button onClick={facebookSignIn}>Facebook Sign in</button>
                        <p>New user?</p>
                        <Link to="/register">Register Now</Link>
                    </div>
            }
        </div>
    );
};

export default Login;
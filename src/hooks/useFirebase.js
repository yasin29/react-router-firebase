import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const githubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const facebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const emailPasswordSignUp = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                handleUpdateName();
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const loginWithEmail = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleName = e => {
        setName(e.target.value);
    }

    const handleUpdateName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {

            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('inside state change', user);
                setUser(user);
            }
        });
    }, []);

    return {
        user,
        error,
        googleSignIn,
        logout,
        githubSignIn,
        facebookSignIn,
        emailPasswordSignUp,
        handleEmail,
        handlePassword,
        handleName,
        loginWithEmail

    }

}

export default useFirebase;
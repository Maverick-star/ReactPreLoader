import React, { useState, useEffect } from 'react';
import fire from './fire';
import Dashboard from './Dashboard';
import Login from './Login';

const Sing = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passworError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);


    const clearImputs = () => {
        setEmail('');
        setPassword('');
    }


    const clearErrors = () => {
        setEmailError('');
        setPasswordError    ('');
    }


    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .singInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case 'auth/invalid-email':
                    case 'auth/user-disable':
                    case 'auth/user-not-found':
                        setEmailError(err.message);
                        break;
                    case 'auth/wrong-password':
                        setPasswordError(err.message);
                        break;
                }
            });
    };


    const handleSingup = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case 'auth/email-already-in-use':
                    case 'auth/invalid-email':
                        setEmailError(err.message);
                        break;
                    case 'auth/weak-password':
                        setPasswordError(err.message);
                        break;
                }
            });
    };


    const handleLogout = () => {
        fire.auth().singOut();
    };


    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
                clearImputs();
                setUser(user);
            } else {
                setUser('');
            }
        });
    };


    useEffect(() => {
        authListener();
    }, []);



      return (
        <div className='App'>
          {user ? (
            <Dashboard handleLogout={handleLogout} />
          ) : (
            <Login
            email={email}
            setEmail={setEmail}
            password={setPassword}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSingup={handleSingup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passworError={passworError}
            />    
          )} 
        </div>
      );
  };

export default Sing;
import React from 'react';

const Login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSingup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;



return(
    <section className='login'>
        <div className='loginContainer'>
            <label>username</label>
            <input
            type='text'
            autoFocus
            required
            value={email}
            onChange={(e) => setPassword(e.target.value)}
            />
            <p className='errorMsg'>{emailError}</p>
            <label>password</label>
            <input
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <p className='errorMsg'>{passwordError}</p>
            <div className='btnContainer'>
                {hasAccount ? (
                    <>
                        <button onClick={handleLogin}>Sing in</button>
                        <p>
                            Don´t have an account ? 
                            <span onClick={() => setHasAccount(!hasAccount)}>Sing up</span>
                        </p> 
                    </>
                ) : (
                    <>
                        <button onClick={handleSingup}>Sing up</button>
                        <p>
                            Have an account ? 
                            <span onClick={() => setHasAccount (!hasAccount)}>Sing in</span>
                            </p>
                    </>
                )}
            </div>
        </div>
    </section>
    );
};
export default Login;

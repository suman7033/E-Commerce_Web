import React, { useState,useRef,useContext } from 'react'
import classes from './login.module.css'
import AuthContext from '../store/auth-context';
import { Navigate, useNavigate } from 'react-router-dom';
import Home from './Home';

const Login = () => {
    const [isLogin, setIsLogin]=useState(true);
    const [isLoading,setIsLoading]=useState(false);
    const authCtx=useContext(AuthContext);
    const navigate=useNavigate();
    console.log(authCtx.isLoggedIn);
    console.log(authCtx);

    const emailInputRef=useRef();
    const passwordInputRef=useRef();

    const switchAuthHandler=()=>{
        setIsLogin((prevState) => !prevState);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const enteredEmail=emailInputRef.current.value;
        const enteredPassword=passwordInputRef.current.value;
        setIsLoading(true);
        let url;
        if(isLogin){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBAwK4k_DJN45d8bjQFpZk-MsnTCfd2lUE'
        }else{
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBAwK4k_DJN45d8bjQFpZk-MsnTCfd2lUE'
        }
        fetch(url,{
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res)=>{
            setIsLoading(false);
            if(res.ok){
                console.log('sucessful');
                return res.json();
            }else{
               return res.json()
               .then((data)=>{
                let errorMessage='Authentication failed'
                  throw new Error(errorMessage);
               })
            }
        })
        .then((data)=>{
            authCtx.login(data.idToken);
            //console.log(data.idToken);
            //history.resplace('/')
            
            alert("Sucessfully Login");
            navigate('/store');
            
            
        })
        .catch(err=>{
            alert(err.message);
        })
    }

  return (
      <section className={classes.auth}>
        <h1>{isLogin ? 'Login' : 'Sign up'}</h1>
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='email'><b>Your Email</b></label>
                <input type='email' id='email' required ref={emailInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='password'><b>Your Password</b></label>
                <input type='password' id='password' required ref={passwordInputRef}></input>
            </div>
             <div className={classes.actions}>
                <button>{isLogin ? 'login': 'create new login'}</button>
                <button type='button'className={classes.toggle} onClick={switchAuthHandler}>Create new account</button>
            </div>
        </form>
      </section>
  )
}

export default Login;

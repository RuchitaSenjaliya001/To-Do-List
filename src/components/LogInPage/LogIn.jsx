import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../store/auth-context';

export default function LogIn() {
    const ctx = useContext(AuthContext);
    const [enteredEmail, setEnteredEmail] = useState("")
    const [enteredPassword, setEnteredPassword] = useState("");

    const [emailIsValid, setEmailIsValid] = useState()
    const [passwordIsValid, setPasswordIsValid] = useState()
    const [formIsValid, setFormIsValid] = useState(false)

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
        setFormIsValid(
            event.target.value.includes('@') && enteredPassword.trim().length >= 8
        );
    }
    const pwdChangeHandler = (event) => {
        setEnteredPassword(event.target.value)
        setFormIsValid(
            event.target.value.trim().length >= 8 && enteredEmail.includes('@')
        );
    }

    const validEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'))
    }
    const validPasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length >= 8)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(formIsValid){
            ctx.onLogin(enteredEmail, enteredPassword);
        }
    }

    return (
        <>
            <div className="flex justify-around">
                <form action="#" className="min-w-[35%] bg-blue-100 flex my-20 flex-col p-5 py-10 rounded-md shadow-xl" onSubmit={submitHandler}>
                    <h1 className="font-bold text-4xl text-blue-900 text-center">Sign in to clever</h1>
                    <p className="text-center text-gray-500">Or do via email</p>
                    <label htmlFor="email" className="text-xl py-1 mt-5">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        placeholder="@mail.com"
                        className={`p-2 rounded ${emailIsValid===false ? 'border-2 border-red-500' : ""}`}
                        onChange={emailChangeHandler}
                        onBlur={validEmailHandler} />
                    {emailIsValid=== false ? <p className='text-sm'>Please enter valid email</p> : ''}

                    <label htmlFor="password" className="text-xl py-1 mt-5">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        placeholder="Password"
                        className={`p-2 rounded ${passwordIsValid===false ? 'border-2 border-red-500' : ''}`}
                        onChange={pwdChangeHandler}
                        onBlur={validPasswordHandler} />
                    {passwordIsValid=== false ? <p className='text-sm'>Must be 8 character at least</p> : ''}
                   

                    <div className="row mt-5 flex justify-between">
                        <div className="left">
                            <input type="checkbox" name="Remember" id="Remember" className="" />
                            <label htmlFor="remember" className="">Remember Me</label>
                        </div>
                        <div className="right">

                            <a href="#" className="font-bold text-blue-900 hover:text-blue-700">Forgot Password?</a>
                        </div>
                    </div>
                
                    <button type="submit" className={`bg-[#645CBB] px-5 py-2 my-3 rounded-lg text-white hover:bg-[#4e46aa] duration-300 ${!formIsValid && 'disabled:opacity-50'}`}>Sign in</button>
                    
                </form>
            </div>
        </>
    )
}

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../public/icons/logo-icon.png';
import erin from '../public/images/erin.png'

function Register(props) {
    const [user, setUser] = useState({})
    const [message, setMessage] = useState('')
    const router = useRouter()
    const handleRegisterChange = (e) => {
        // Stores user input in the user state
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const handleRegisterButton = () => {
        // Some validation here but complete validation is done on server 
        if (user.username === '') {
            setMessage("You must enter a username")
        } else if (user.password === '') {
            setMessage("You must enter a password")
        } else {
            // Sends server the credentials that are to be added to the DB  
            //fetch('https://polar-dawn-36653.herokuapp.com/api/register', {
                fetch('http://127.0.0.1:8080/api/register',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(response => response.json())
                // Redirect to login page if server replies success === true 
                .then(result => {
                    if (result.success) {
                        router.push('/')
                    }
                    else {
                        console.log("test", result)
                        // Display error message from server if success != true
                        setMessage(result.message)
                    }
                })
        }
    };

    // Clears error message from screen
    const remove = function () {
        setMessage("")
    };

    return (
        <div className='login register column'>
           <h1 className='login-title'>ARE YOU SMARTER THAN ERIN</h1>
            <div className="login-header">
                
                <div className="logo">
                <Image  src={logo} alt="Logo"  />
                </div>
                <div className="erin">
                <Image  src={erin} alt="Logo"  />
                </div>
            </div>
            <h2 className='m-0'>REGISTER</h2>
            <div className="login-Container column">
                <input className="log-RegText" type="text" name="username" onChange={handleRegisterChange} placeholder="User name" />
                <input className="log-RegText" type="password" name="password" onChange={handleRegisterChange} placeholder="Password" />
                {message && <div id="message" className="message">
                    <p className="message-text">{message}</p>
                    <Image className='m-img' src={erin} layout='responsive'  priority/>
                    <button className="message-btn" onClick={remove}>Ok</button>
                </div>}
                <a className="log-btn reg-btn" onClick={handleRegisterButton}>Register</a>
                <a href="/" className="log-btn reg-btn">Back To Login</a>
            </div>
        </div>
    )
};

export default Register
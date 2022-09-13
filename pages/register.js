import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

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
            fetch('https://polar-dawn-36653.herokuapp.com/api/register', {
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
        // Render Display
        <div className='login register column'>
            <div className="login-title">
                <Image className="logo" src="/images/logo-full.png" alt="Logo" height={110} width={250} priority='true' />
            </div>
            <h2>REGISTER</h2>
            <div className="login-Container column">
                <input className="log-RegText" type="text" name="username" onChange={handleRegisterChange} placeholder="User name" />
                <input className="log-RegText" type="password" name="password" onChange={handleRegisterChange} placeholder="Password" />
                {message && <div id="message" className="message register-message">
                    <p  >{message}</p>
                    <Image className='m-img' src='/images/warning-wiz.png' alt="Wizrd" layout='responsive' height={100} width={80} />
                    <button onClick={remove}>Ok</button>
                </div>}
                <a className="btn log-btn register-btn" onClick={handleRegisterButton}>Register</a>
                <a href="/" className="btn log-btn">Back To Login</a>
            </div>
        </div>
    )
};

export default Register
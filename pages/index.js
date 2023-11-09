import React, { useState } from 'react';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import logo from '../public/images/logo.svg';
import erin from '../public/images/erin.svg';

function Login() {
    const [credentials, setCredentials] = useState({});
    const [message, setMessage] = useState('');
    const router = useRouter();
    const handleLoginChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };
    const handleLoginButton = () => {
        if (credentials.username === '') {
            setMessage("You must enter a username")
        } else if (credentials.password === '') {
            setMessage("You must enter a password")
        } else {
            fetch('https://polar-dawn-36653.herokuapp.com/api/login', {
                method: 'POST',
                origin: '*',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            }).then(response => response.json())
                .then(result => {
                    if (result.success == true) {
                        const token = result.token;
                        localStorage.setItem('jsonwebtoken', token)
                        localStorage.setItem('user_Id', result.user_id)
                        localStorage.setItem('name', result.name)
                        localStorage.setItem('high_score', result.high_score)
                        router.push('profile')
                    }
                    else {
                        setMessage(result.message)
                    }
                })
        }
    };

    const handleGuestLogin =async () => {
        setCredentials({
            username: "guest",
            password: "password"
          })
        handleLoginButton()
    }

    return (
        <div className='login'>
            <div className="erin">
                <Image src={logo} alt="Logo" />
            </div>
            <div className="login-Container">
                <input className="credentials" type="text" name="username" onChange={handleLoginChange} placeholder="User name" />
                <input className="credentials" type="password" name="password" onChange={handleLoginChange} placeholder="Password" />
                {message &&
                    <div className="message">
                        <div>
                            {message}
                        </div>
                        <Image src={erin} layout='responsive' priority={true} />
                        <button className="log-btn message-btn" onClick={() => setMessage("")}>
                            Ok
                        </button>
                    </div>
                }
                <div className='log-btn-box'>
                    <div className="log-btn" onClick={handleLoginButton}>
                        LOGIN
                    </div>
                    <a href="/register" className="log-btn">
                        REGISTER
                    </a>
                </div>
            </div>
            {/* <div className="" onClick={handleGuestLogin}>
                        Login as guest
                    </div> */}
            <div className="icon-container">
                <a id="google-btn" className="passport-btn" href="https://polar-dawn-36653.herokuapp.com/auth/google">
                    <Image src='/icons/google.webp' alt="Login With Google" height={40} width={40} />
                    <div className=''>
                        Login With Google
                    </div>
                </a>
                <a id="facebook-btn" className="passport-btn" href="https://polar-dawn-36653.herokuapp.com/auth/facebook">
                    <Image src='/icons/facebook.webp' alt="Login With Facebook" height={40} width={40} />
                    <div className=''>
                        Login With Facebook
                    </div>
                </a>
            </div>
        </div>
    )
};

export default Login
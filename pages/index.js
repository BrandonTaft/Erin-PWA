import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../public/images/newlogo.webp';
import dynamic from 'next/dynamic';

const Alert = dynamic(() =>
    import('../src/components/Alert'), {
    ssr: false,
});


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
                        localStorage.setItem('jsonwebtoken', result.token)
                        localStorage.setItem('user_Id', result.user_id)
                        localStorage.setItem('name', result.name)
                        localStorage.setItem('high_score', result.high_score)
                        router.push('welcome')
                    }
                    else {
                        setMessage(result.message)
                    }
                })
        }
    };

    const handleGuestLogin = async () => {
        fetch('https://polar-dawn-36653.herokuapp.com/api/login', {
            method: 'POST',
            origin: '*',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: "Guest",
                password: "password"
            })
        }).then(response => response.json())
            .then(result => {
                if (result.success == true) {
                    localStorage.setItem('jsonwebtoken', result.token)
                    localStorage.setItem('user_Id', result.user_id)
                    localStorage.setItem('name', result.name)
                    localStorage.setItem('high_score', result.high_score)
                    router.push('welcome')
                }
                else {
                    setMessage(result.message)
                }
            })
    }

    return (
        <div className='login-page'>
            <div className="erin">
            <Image src={logo} alt="are you smarter than erin Logo"
                    style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        inset: 0,
                        color: 'transparent',
                        backgroundColor:'transparent'
                    }}
                    priority={true}
                />
            </div>
            <div className="login-Container">
                <input className="credentials" type="text" name="username" onChange={handleLoginChange} placeholder="User name" />
                <input className="credentials" type="password" name="password" onChange={handleLoginChange} placeholder="Password" />
                {message &&
                    <Alert
                        message={message}
                        setMessage={setMessage}
                    />
                }
                <div className='log-btn-box'>
                    <div className="log-btn" onClick={handleLoginButton}>
                        LOGIN
                    </div>
                    <a href="/register">
                    <div className="log-btn">
                        REGISTER
                    </div>
                    </a>
                </div>
            </div>
            <div className="guest-btn" onClick={handleGuestLogin}>
                Login as guest
            </div>
            <div className="icon-container">
                <a className="google passport-btn" href="https://polar-dawn-36653.herokuapp.com/auth/google">
                    <Image src='/icons/google.webp' alt="Google logo" height={40} width={40} />
                    <div>
                        Login With Google
                    </div>
                </a>
                <a className="facebook passport-btn" href="https://polar-dawn-36653.herokuapp.com/auth/facebook">
                    <Image src='/icons/facebook.webp' alt="Facebook logo" height={40} width={40} />
                    <div>
                        Login With Facebook
                    </div>
                </a>
            </div>
        </div>
    )
};

export default Login
import React, { useState } from 'react';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import logo from '../public/images/newlogo.svg';
import dynamic from 'next/dynamic';

const Alert = dynamic(() =>
    import('../src/components/Alert'), {
    ssr: false,
});

function Register() {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [message, setMessage] = useState('');

    const handleRegisterChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const handleRegisterButton = () => {
        if (user.username === '') {
            setMessage("You must enter a username")
        } else if (user.password === '') {
            setMessage("You must enter a password")
        } else {
            fetch('https://polar-dawn-36653.herokuapp.com/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(response => response.json())
                .then(result => {
                    if (result.success) {
                        router.push('/')
                    }
                    else {
                        setMessage(result.message)
                    }
                })
        }
    };

    return (
        <div className='login-page'>
            <div className="erin">
                <Image src={logo} alt="are you smarter than erin Logo" priority={true} />
            </div>
            <h2>REGISTER</h2>
            <div className="login-Container">
                <input className="credentials" type="text" name="username" onChange={handleRegisterChange} placeholder="User name" />
                <input className="credentials" type="password" name="password" onChange={handleRegisterChange} placeholder="Password" />
                {message &&
                    <Alert
                        message={message}
                        setMessage={setMessage}
                    />
                }
                <div className="log-btn reg-btn" onClick={handleRegisterButton}>
                    Register
                </div>
                <a href="/" className="log-btn reg-btn">
                    Back To Login
                </a>
            </div>
        </div>
    )
};

export default Register
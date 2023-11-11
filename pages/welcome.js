import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from 'next/legacy/image';
import { inter, roboto } from '../src/components/Layout'
import erin from '../public/images/erin.svg'
import globe from '../public/images/globe.svg';
import Link from 'next/link';

function Profile() {
    const [myScore, setMyScore] = useState(null);
    const [wizardName, setwizardName] = useState("");
    const [message, setMessage] = useState("");
    const [deleteUser, setDeleteUser] = useState(false);
    const router = useRouter();

    useEffect(() => {
        let name = localStorage.getItem('name')
        if (name != null) {
            setwizardName(name)
            getuserscore(name)
        } else {
            if (!router.isReady) return;
            const query = router.query;
            let passportName = query.name;
            localStorage.setItem('name', passportName)
            setwizardName(passportName)
            getuserscore(passportName)
        }
    }, [router.isReady, router.query]);

    function getuserscore(wizardName) {
        fetch(`https://polar-dawn-36653.herokuapp.com/api/userscore?username=${wizardName}`)
            .then(response => response.json())
            .then(myScore => {
                if (myScore.score != null) {
                    setMyScore(myScore.score)
                } else {
                    setMyScore(0)
                }
            })
    };

    function handleDeleteUser() {
        console.log(wizardName)
        fetch('https://polar-dawn-36653.herokuapp.com/api/deleteuser', {
            method: 'POST',
            origin: '*',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userName: wizardName})
        }).then(response => response.json())
            .then(result => {
                if (result.success == true) {
                    router.push('/')
                }
                else {
                    setMessage(result.message)
                }
            })
    }

    function deleteMe() {
        handleDeleteUser()
        setDeleteUser(false)   
    }
    return (
        <div className="profile-page">
            {message &&
                    <div className="message">
                        <div>
                            {message}
                        </div>
                        <Image src={erin} alt="cartoon erin" layout='responsive' priority />
                        <button className="log-btn message-btn" onClick={() => setMessage("")}>
                            Ok
                        </button>
                    </div>
                }
             {deleteUser &&
                    <div className="message">
                        <div>
                            Are you sure you want to delete your profile?
                        </div>
                        <Image src={erin} alt="cartoon erin" layout='responsive' priority />
                        <button className="log-btn err message-btn" onClick={deleteMe}>
                            Yes
                        </button>
                        <button className="log-btn message-btn" onClick={() => setDeleteUser(false)}>
                            No
                        </button>
                    </div>
                }
            <div style={{ textAlign: 'center' }}>
                <div className={`${roboto.className} ${'welcome'}`} >
                    <div className='profile-name'>
                        HELLO {wizardName.toUpperCase()}
                    </div>
                    <div className='profile-name'>
                        YOUR HIGH SCORE IS {myScore}
                    </div>
                    <div className='divider'></div>
                    <span className={inter.className}>
                        Welcome to the hottest trivia app in the world. Rack up as many points
                        as you can to place on the leaderboard.
                    </span>
                </div>
                
                <Link className="profile-btn z-2" href="/home">
                    <span className={inter.className}>READY</span>
                </Link>

                <div className="profile-btn z-2" onClick={() => setDeleteUser(true)}>
                    <span className={inter.className}>DELETE</span>
                </div>

            </div>
            <div className="fill z-2">
                <Image
                    alt="cartoon erin"
                    src={erin}
                    layout='fill'
                    objectFit='scale-down'
                    priority={true}
                />
                <Image src={globe} alt="cartoon draing of earth" style={{ zIndex: -1 }} />
            </div>
        </div>
    )
}

export default Profile
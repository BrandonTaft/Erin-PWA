import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from 'next/legacy/image';
import { inter, roboto } from '../src/components/Layout';
import erin from '../public/images/erin.svg';
import globe from '../public/images/globe.svg';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';

const Alert = dynamic(() =>
    import('../src/components/Alert'), {
    ssr: false,
});

function Profile() {
    const [myScore, setMyScore] = useState(0);
    const [wizardName, setwizardName] = useState("");
    const [message, setMessage] = useState("");
    const [deleteUser, setDeleteUser] = useState(false);
    const router = useRouter();

    useEffect(() => {
        let name = localStorage.getItem('name');
        let score = localStorage.getItem('high_score');
        if (name !== null) {
            setwizardName(name)
            if (score !== null) {
                setMyScore(score)
            }
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
            body: JSON.stringify({ username: wizardName })
        }).then(response => response.json())
            .then(result => {
                if (result.success == true) {
                    router.push('/')
                }
                else {
                    setMessage(result.message)
                }
            })
    };

    function deleteMe() {
        handleDeleteUser()
        setDeleteUser(false)
    };
    return (
        <div className="profile-page">
            {message &&
                    <Alert
                        message={message}
                        setMessage={setMessage}
                    />
                }
            {deleteUser &&
                <div className="message">
                    <div>
                        Are you sure you want to delete your profile?
                    </div>
                    <Image src={erin} alt="cartoon erin" layout='responsive' />
                    <button className="log-btn err message-btn" onClick={deleteMe}>
                        Yes
                    </button>
                    <button className="log-btn message-btn" onClick={() => setDeleteUser(false)}>
                        No
                    </button>
                </div>
            }
            <div style={{ textAlign: 'center', marginTop:'auto' }}>
                <div className={`${roboto.className} ${'welcome'}`} >
                    <div className='profile-name'>
                        HELLO {wizardName.toUpperCase()}
                    </div>
                    <div className='profile-name bottom'>
                        YOUR HIGH SCORE IS {myScore}
                    </div>
                    <div className='divider'></div>
                    <span className={inter.className}>
                        Welcome to the hottest insurance tracking trivia app in the world. Rack up as many points
                        as you can to place on the leaderboard.
                    </span>
                </div>
            <div className='pro-btn-container'>
                <Link className="profile-btn z-2" href="/home">
                    <PlayCircleFilledRoundedIcon />
                    <span className={inter.className}>PLAY</span>
                </Link>

                <div className="profile-btn z-2" onClick={() => setDeleteUser(true)}>
                    <PersonRoundedIcon />
                    <span className={inter.className}>DELETE</span>
                </div>
                </div>
            </div>
            <div className="fill z-2">
                <Image
                    alt="cartoon erin"
                    src={erin}
                    layout='fill'
                    objectFit='scale-down'  
                />
                <Image src={globe} alt="cartoon drawing of earth" style={{ zIndex: -1 }} priority />
            </div>
        </div>
    )
}

export default Profile
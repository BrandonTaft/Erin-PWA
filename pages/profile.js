import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import erin from '../public/images/erin.svg'
import globe from '../public/images/globe.svg';

function Profile() {
    const [myScore, setMyScore] = useState(null)
    const [wizardName, setwizardName] = useState("")
    const router = useRouter();

    useEffect(() => {
        let name = localStorage.getItem('name')
        if (name != null) {
            setwizardName(name.toUpperCase())
            getuserscore(name)
        } else {
            if (!router.isReady) return;
            const query = router.query;
            let passportName = query.name;
            localStorage.setItem('name', passportName)
            setwizardName(passportName.toUpperCase())
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
    return (
        <div className="profile-page">
            <div style={{ textAlign: 'center' }}>
                <div className="welcome" >
                    <div className='profile-name'>
                        HELLO {wizardName.toUpperCase()}
                    </div>
                    <div className='profile-name'>
                        YOUR HIGH SCORE IS {myScore}
                    </div>
                    <div className='divider'></div>
                    Welcome to the&nbsp;hottest trivia app in the world. Rack up as many points
                    as you can to place on the leaderboard.
                </div>
                <a className="profile-btn z-2" href="/home">
                    <span>READY</span>
                </a>
            </div>
            <div className="fill z-2">
                <Image
                    alt="wizard"
                    src={erin}
                    layout='fill'
                    objectFit='scale-down'
                    priority={true}
                />
                <Image src={globe} alt="Logo" style={{ zIndex: -1 }} />
            </div>
        </div>
    )
}

export default Profile
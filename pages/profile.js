import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import erin from '../public/images/erin.png'
import globe from '../public/images/globe.png';

function Profile(props) {
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

    //  Used to retrieve the users high score from database & sets it in myScore state
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
            <div style={{textAlign:'center'}}>
                <h2 className='profile-name'>
                    
                        HELLO <span className='profile-score'>{wizardName.toUpperCase()}</span><br></br>
                        YOUR HIGH SCORE IS <span className='profile-score'>{myScore}</span>
                    
                </h2>
                <div className="welcome" >
                   
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
               
                <Image src={globe} alt="Logo" style={{zIndex:-1}}/>
              
            </div>
        </div>
    )
}

export default Profile
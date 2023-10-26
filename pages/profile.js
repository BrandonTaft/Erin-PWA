import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import erin from '../public/images/erin.png'

function Profile(props) {
    const [myScore, setMyScore] = useState(null)
    const [wizardName, setwizardName] = useState("")
    const router = useRouter();

    useEffect(() => {
        let name = localStorage.getItem('name')
        if(name != null) {
            setwizardName(name.toUpperCase())
            getuserscore(name)
        } else {
            if(!router.isReady) return;
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
        // fetch(`http://127.0.0.1:8080/api/userscore?username=${wizardName}`)
            .then(response => response.json())
            .then(myScore => {
                if(myScore.score != null){
                setMyScore(myScore.score)
                }else{
                    setMyScore(0)
                }
            })
    };
    return (
        <div className="profile-page">
            <div className='profile'>
                <div className='profile-name yellow'>
                    <p>
                        HELLO <span className='done-score'>{wizardName.toUpperCase()}</span><br></br>
                        YOUR HIGH SCORE IS <span className='done-score'>{myScore}</span>
                    </p>
                </div>
                <div className='line done-score'></div>
                <div className="welcome" >
                    <p>
                        Welcome to the&nbsp;hottest trivia app in the world. Rack up as many points
                         as you can to place on the leaderboard and prove that you have what it takes.
                    </p>
                </div>
            </div>
            <a className="profile-btn z-2 done-score" href="/home">
                <span>READY</span>
            </a>
            <div className="fill z-2">
                    <Image
                        
                        alt="wizard"
                        src={erin}
                        layout='fill'
                        objectFit='scale-down'
                        priority={true}
                    />
                    <div className='ss-profile'>
                <div className='world-profile'></div>
                </div>
                </div>
        </div>
    )
}

export default Profile
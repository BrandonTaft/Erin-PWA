import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import Background from '../src/components/Background';

function Profile(props) {
    const [myScore, setMyScore] = useState(null)
    const [wizardName, setwizardName] = useState("")
    const router = useRouter();

    // On first render retrieves username from local storage  & sets it to wizardName state
    // Then calls function to retrieve user high score and passes in the username
    // useEffect(() => {
    //     let name =searchParams.get("name")
    //     // let name = localStorage.getItem('name')
    //     // let name = query.name;
    //      console.log("name",name)

    //     // setwizardName(name.toUpperCase())
    //     // getuserscore(name)
    // }, []);

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
            .then(response => response.json())
            .then(myScore => {
                setMyScore(myScore.score)
            })
    };
    return (
        <div className="profile-page">
            <Background />
            <div className='profile p-8 pb-0 z-2 resize'>
                <div className='profile-name yellow'>
                    <p>
                        HELLO <span className='done-score'>{wizardName.toUpperCase()}</span><br></br>
                        YOUR HIGH SCORE IS <span className='done-score'>{myScore}</span>
                    </p>
                </div>
                <div className='line'></div>
                <div className="welcome p-10" >
                    <p className="grey">
                        Welcome to the&nbsp;hottest trivia app in all 9&nbsp;realms. Rack up as many points
                         as you can to place on the leaderboard and prove that you&nbsp;are&nbsp;a&nbsp;wizard
                    </p>
                </div>
            </div>
            <a className="profile-btn z-2" href="/home">
                <span>READY</span>
            </a>
            <div className="fill z-2">
                    <Image
                        className='wiz-img'
                        alt="wizard"
                        src="/images/flying.png"
                        layout='fill'
                        objectFit='scale-down'
                        priority={true}
                    />
                </div>
        </div>
    )
}

export default Profile
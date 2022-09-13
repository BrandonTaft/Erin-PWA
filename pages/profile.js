import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function Profile(props) {
    const [myScore, setMyScore] = useState(null)
    const [wizardName, setwizardName] = useState("")
    // On first render retrieves username from local storage  & sets it to wizardName state
    // Then calls function to retrieve user high score and passes in the username
    useEffect(() => {
        let name = localStorage.getItem('name')
        setwizardName(name.toUpperCase())
        getuserscore(name)
    }, []);
    //  Used to retrieve the users high score from database & sets it in myScore state
    function getuserscore(wizardName) {
        fetch(`https://polar-dawn-36653.herokuapp.com/api/userscore?username=${wizardName}`)
            .then(response => response.json())
            .then(myScore => {
                setMyScore(myScore.score)
            })
    };
    return (
        // Render Display
        <div className="profile-page">
            <div className='p-8 resize'>
                <div className='profile-name yellow'>
                    <p>
                        Hello {wizardName}<br></br>
                        Your  high score is <span className='score'>{myScore}</span>
                    </p>
                </div>
                <div className="welcome p-10" >
                    <p className="grey">
                        Welcome to QuizWiz! The hottest trivia app in all 9&nbsp;realms. Now it's time to
                        select a topic and rack up as many correct answers as you can to place on
                        the leaderboard. You must prove to everyone that you are now a wizard <span className="yellow">{wizardName}</span>!
                    </p>
                </div>
            </div>
            <a className="btn profile-btn" href="/home">Ready</a>
            <div className="my-score" >
                <Image className='rotate' src="/images/qw-gold.png" alt="logo" layout='fill' priority={true} />
            </div>
        </div>
    )
}

export default Profile
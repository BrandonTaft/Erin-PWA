import React, { useState, useEffect } from 'react';

function ScoreCard() {
    const [myScore, setMyScore] = useState(null)
    const [wizardName, setwizardName] = useState("")

    useEffect(() => {
        let name = localStorage.getItem('name')
        setwizardName(name.toUpperCase())
        getuserscore(name)
    }, []);

    function getuserscore(wizardName) {
        fetch(`https://polar-dawn-36653.herokuapp.com/api/userscore?username=${wizardName}`)
        .then(response => response.json())
        .then(myScore => {
            setMyScore(myScore.score)
        })
    };

    return (
        <div className="scorecard">
            <div>YOUR HIGH SCORE</div>
            <div className="card-score">      
                    {myScore}
            </div>
        </div>
    )
}

export default ScoreCard
import React, { useState, useEffect } from 'react';
import ScoreCard from '../src/components/Scorecard';
import Background from '../src/components/Background';

function Leaderboard(props) {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        fetch('https://polar-dawn-36653.herokuapp.com/api/highscore')
            .then(response => response.json())
            .then(result => {
                setLeaderboard(result)
            });
    }, []);

    return (
        <div className='leaderboard-page '>
            <Background />
            <ScoreCard />
            <div className='table-title'><span className='tt'>LEADERBOARD</span></div>
           {leaderboard.length ?
            <div className='table'>
                {leaderboard.map((score, index) => (
                    <div className='row' key={index}>
                        <div className='front-row'>
                            <div className='place'>{index + 1}.</div>
                            <div className="name">{score.username}</div>
                        </div>
                        <div className='numbers'>
                            {score.score}
                        </div>
                    </div>
                ))}
            </div>
            : 
            <div className='row loader'>
                <h1>LOADING...</h1>
            </div>
            }
        </div>
    )
};
export default Leaderboard
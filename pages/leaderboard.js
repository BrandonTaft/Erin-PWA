import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ScoreCard from '../src/components/Scorecard';
import Background from '../src/components/Background';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';

function Leaderboard(props) {
    const [leaderboard, setLeaderboard] = useState([])
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
            <div className='table-title'>LEADERBOARD</div>
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
        </div>
    )
};
export default Leaderboard
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
            <div className="lead-container">
                <div className='flex-table-top'>
                    <div className="table-column">
                        <div className='table-title w-50 ma-auto'>Wizard</div>
                        {leaderboard.map((score, index) => (
                            <div className='left-column' key={index}>
                                
                                <div className='board-score place number'>{index + 1}</div>
                                
                                <h3 className="name">{score.username}</h3>
                                
                            </div>
                        ))}
                    </div>
                    <div className="table-column">
                        <div className='table-title w-50 ma-auto'>High Score</div>
                        {leaderboard.map((score, index) => (
                            <div className='right-column' key={index}>
                                <h3 className=" board-score" >{score.score}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className='ss fill'>
                <Image
                    className='wiz-img'
                    alt="wizard"
                    src="/icons/logo-icon.png"
                    layout='fill'
                    objectFit='scale-down'
                    priority={true}
                />
            </div> */}
        </div>
    )
};
export default Leaderboard
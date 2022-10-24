import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ScoreCard from '../src/components/Scorecard';
import Background from '../src/components/Background';

function Leaderboard(props) {
    const [leaderboard, setLeaderboard] = useState([])
    useEffect(() => {
        getLeaderboard()
    }, []);
    // Fetch top 100 high scores
    const getLeaderboard = () => {
        fetch('https://polar-dawn-36653.herokuapp.com/api/highscore')
            .then(response => response.json())
            .then(result => {
                setLeaderboard(result)
            });
    };
    // Display top 100 scores in table element
    const leaderboardList = leaderboard.map((score, index) => {
        return (
            <tr key={index}>
                <td className="left-column"><Image className="prize" src="/icons/trophy.webp" alt="leaderboard icon" width={30} height={35} /></td>
                <td className="middle-column"><span className='board-score'>{index + 1}.</span>&nbsp;{score.username}</td>
                <td className="right-column board-score" >{score.score}</td>
            </tr>
        )
    });
    return (
        <div className='leaderboard-page '>
            <Background />
            <ScoreCard />
            <div className="wrap">
                <div className='flex table-top'>
                    <div className='table-title w-50 ma-auto'>Wizard</div>
                    <div className='table-title w-50 ma-auto'>High Score</div>
                </div>
                <div className="lead-container">
                    <table>
                        <tbody>
                            {leaderboardList}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='ss fill'>
                {/* <div className='world'></div> */}
                <Image
                        className='wiz-img floating'
                        alt="wizard"
                        src="/images/gold.webp"
                        layout='fill'
                        objectFit='scale-down'
                        priority={true}
                    />
            </div>
        </div>
    )
};
export default Leaderboard
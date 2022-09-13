import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ScoreCard from '../src/components/Scorecard';
import Background from '../src/components/Background';

function Leaderboard(props) {
    const [leaderboard, setLeaderboard] = useState([])
    useEffect(() => {
        getLeaderboard()
    }, []);

    const getLeaderboard = () => {
        fetch('https://polar-dawn-36653.herokuapp.com/api/highscore')
            .then(response => response.json())
            .then(result => {
                setLeaderboard(result)
            });
    };

    const leaderboardList = leaderboard.map((score, index) => {
        return (
            <tr key={index}>
                <td className="left-column"><Image className="prize" src="/icons/trophy.png" alt="leaderboard icon" width={30} height={35} /></td>
                <td className="middle-column">{index + 1}.&nbsp;{score.username}</td>
                <td className="right-column" >{score.score}</td>
            </tr>
        )
    });
    return (
        <div className='leaderboard-page '>
            <Background />

            <ScoreCard />
            <div className="wrap">
                <div className='flex'>
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
            <div className='ss'><div className='world'></div></div>
        </div>
    )
};
export default Leaderboard
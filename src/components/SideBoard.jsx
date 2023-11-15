
export const SideBoard = ({ leaderboard }) => {
    return (
        <div className='leaders'>
            <h1>
                TOP 10
            </h1>
            {leaderboard.slice(0, 10).map((score, index) => (
                <li className='side-board' key={index}>
                    <div className='home-place'>{index + 1}.</div>
                    <div className="home-name">{score.username}</div>
                    <div className="home-score">{score.score}</div>
                </li>
            )
            )}
        </div>
    )
}
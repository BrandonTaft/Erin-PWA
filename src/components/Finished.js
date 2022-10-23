import Link from 'next/link';

export function Finished({ finalScore }) {
    return(
        <div className="done-container">
        <div className="done">
          <h1>Your score is <span className="done-score">{finalScore}</span></h1>
          <Link href='/leaderboard'>
            <a><span className="final-btn done-score">LEADERBOARD</span></a>
          </Link>
        </div>

      </div>
    )
}
import Link from 'next/link';

export function Finished({ finalScore }) {
    return(
        <div className="done-container">
        <div className="done">
          <h1 >Congratulations</h1>
          <h2>Your score is <span className="done-score">{finalScore}</span></h2>
          <Link href='/leaderboard'>
            <a><span className="final-btn">LEADERBOARD</span></a>
          </Link>
        </div>

      </div>
    )
}
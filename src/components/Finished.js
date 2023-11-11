import Link from 'next/link';
import Image from 'next/legacy/image';
import trophy from '../../public/images/trophy.svg';

export function Finished({ finalScore }) {
  return (

    <div className="done-container">
      <h1>
        YOUR SCORE IS <span className="done-score">{finalScore}</span>
      </h1>
      <Link className="final-btn" href='/leaderboard'>
            LEADERBOARD
      </Link>
      <div className="finished-img">
        <Image src={trophy} alt="are you smarter than erin logo" priority={true} />
      </div>

    </div>
  )
}
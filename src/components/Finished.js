import Link from 'next/link';
import Image from 'next/image';
import trophy from '../../public/images/trophy.svg';

export function Finished({ finalScore }) {
  return (

    <div className="done-container">
      <h1>
        YOUR SCORE IS <span className="done-score">{finalScore}</span>
      </h1>
      <Link className="final-btn" href='/leaderboard'>
        <a className="final-btn">
            LEADERBOARD
        </a>
      </Link>
      <div className="finished-img">
        <Image src={trophy} alt="Logo" priority={true} />
      </div>

    </div>
  )
}
import Link from 'next/link';
import Image from 'next/legacy/image';
import trophy from '../../public/images/trophy.svg';

export function Finished({ finalScore, wizardName }) {
  return (

    <div className="done-container">

      <h2 className='done-name'>
        {wizardName.toUpperCase()} YOUR SCORE IS
      </h2>
      <h2 className='done-score-container'>
        <span className="done-score">{finalScore}</span>
      </h2>

      <Link className="final-btn" href='/leaderboard'>
        LEADERBOARD
      </Link>
      <div className="finished-img">
        <Image src={trophy} alt="are you smarter than erin logo" priority={true} />
      </div>

    </div>
  )
}
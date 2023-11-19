import Link from 'next/link';
import Image from 'next/legacy/image';
import trophy from '../../public/images/trophy.svg';

 function Finished({ finalScore, wizardName }) {
  return (

    <div className="done-container">

      <h1 className='done-name'>
        YOUR SCORE IS
      </h1>
      <h1 className='done-score-container'>
        <span className="done-score">{finalScore}</span>
      </h1>

      <Link className="final-btn" href='/leaderboard'>
        LEADERBOARD
      </Link>
      <div className="finished-img">
        <Image src={trophy} alt="are you smarter than erin logo" priority />
      </div>

    </div>
  )
}

export default Finished;
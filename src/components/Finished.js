import Link from 'next/link';
import Image from 'next/image';
import trophy from '../../public/images/trophy.png';

export function Finished({ finalScore }) {
  return (
    
      <div className="done-container">

        <h1>Your score is <span className="done-score">{finalScore}</span></h1>
        <Link className="final-btn" href='/leaderboard'>
          <a className="final-btn"><span >LEADERBOARD</span></a>
        </Link>
      
      <div id="wizard" className="trophy-fill">
        <Image src={trophy} alt="Logo" objectFit="scale-down" layout="fill" priority={true} />
      </div>
      </div>
   
  )
}
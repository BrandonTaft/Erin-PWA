import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import erin from '../public/images/erin.svg'
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import FaceIcon from '@mui/icons-material/Face';
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';
import StormIcon from '@mui/icons-material/Storm';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import WarningIcon from '@mui/icons-material/Warning';
import AttractionsIcon from '@mui/icons-material/Attractions';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InfiniteScroll from "../src/components/InfiniteScroll";

function SelectionPage() {
    const [leaderboard, setLeaderboard] = useState([]);
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('https://polar-dawn-36653.herokuapp.com/api/highscore')
            .then(response => response.json())
            .then(result => {
                setLeaderboard(result)
            });
    })

    return (
        <>
        {error &&
                    <div className="err message">
                        <div className='err-message'>
                            We are still working on that!
                        </div>
                        <Image src={erin} layout='responsive' priority={true} />
                        <button className="log-btn err message-btn" onClick={() => setError(false)}>
                            Ok
                        </button>
                    </div>
                }
            <InfiniteScroll >
                <div className="grid-item bouncing five">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: 'ERIN' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            <div>ERIN</div>
                            <FaceIcon />
                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing" onClick={() => setError(true)} >
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '9' },
                        }}
                    >
                        <div className="item-icon m-auto">
                        <div>BENEFITS</div>
                            <MedicalInformationIcon />
                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing" onClick={() => setError(true)}>
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '11' },
                        }}
                    >
                        <div className="item-icon m-auto">
                           
                            <div>FLOOD</div>
                            <WaterIcon />

                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing" onClick={() => setError(true)}>
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '22' },
                        }}
                    >
                        <div className="item-icon m-auto">
                           
                            <div>WIND</div>
                            <AirIcon />

                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing" onClick={() => setError(true)}>
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '10' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            
                            <div>HURRICANE</div>
                            <StormIcon />

                        </div>
                    </Link>
                </div>

                <div className="grid-item bouncing" onClick={() => setError(true)}>
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '12' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            
                            <div>CONDO</div>
                            <div>MASTER</div>
                            <ApartmentIcon />

                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing" onClick={() => setError(true)}>
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '14' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            
                            <div>GREETING</div>
                            <EmojiPeopleIcon />

                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing" onClick={() => setError(true)}>
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '29' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            
                            <div>VERIFY</div>
                            <ContactEmergencyIcon />

                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing" onClick={() => setError(true)}>
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '20' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            
                            <div>LPI</div>
                            <WarningIcon />

                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing" onClick={() => setError(true)}>
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '21' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            
                            <div>PERKS</div>
                            <AttractionsIcon />
                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing" onClick={() => setError(true)}>
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '17' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            
                            <div>HAZARD</div>
                            <LocalFireDepartmentIcon />
                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing" onClick={() => setError(true)}>
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '27' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            
                            <div>PAYMENTS</div>
                            <CreditCardIcon />

                        </div>
                    </Link>
                </div>
            </InfiniteScroll>
            <div className='leader-img'>
                <Image

                    alt="wizard"
                    src={erin}
                    width={360}
                    height={360}
                    priority={true}
                />
            </div>
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
        </>
    )
}

export default SelectionPage

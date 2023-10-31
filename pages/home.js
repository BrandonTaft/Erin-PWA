import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import erin from '../public/images/erin.png'
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
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        window.addEventListener("load", function () {
            setTimeout(function () {
                // This hides the address bar:
                window.scrollTo(0, 1);
            }, 0);
        });

        fetch('https://polar-dawn-36653.herokuapp.com/api/highscore')
            .then(response => response.json())
            .then(result => {
                setLeaderboard(result)
            });
    })

    return (
        <>
            <InfiniteScroll >
            <div className="grid-item bouncing five">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: 'ERIN' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            <FaceIcon />
                            <div>ERIN</div>
                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing" >
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '9' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            <MedicalInformationIcon />
                            <div>BENEFITS</div>
                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '11' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            <WaterIcon />
                            <div>FLOOD</div>
                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing three">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '22' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            <AirIcon />
                            <div>WIND</div>
                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing four">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '10' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            <StormIcon />
                            <div>HURRICANE</div>
                        </div>
                    </Link>
                </div>
               
                <div className="grid-item bouncing six">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '12' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            <ApartmentIcon />
                            <div>CONDO</div>
                            <div>MASTER</div>
                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing seven">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '14' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            <EmojiPeopleIcon />
                            <div>GREETING</div>
                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing six">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '29' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            <ContactEmergencyIcon />
                            <div>VERIFY</div>
                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing five">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '20' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            <WarningIcon />
                            <div>LPI</div>
                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing four">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '21' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            <AttractionsIcon />
                            <div>PERKS</div>
                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing three">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '17' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            <LocalFireDepartmentIcon />
                            <div>HAZARD</div>
                        </div>
                    </Link>
                </div>
                <div className="grid-item bouncing two" id="bottom-element">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '27' },
                        }}
                    >
                        <div className="item-icon m-auto">
                            <CreditCardIcon />
                            <div>PAYMENTS</div>
                        </div>
                    </Link>
                </div>
            </InfiniteScroll>
            <div className='leader-img'>
                <Image

                    alt="wizard"
                    src={erin}
                    width={340}
                    height={340}
                    priority={true}
                />
                </div>
            <div className='leaders'>
               
                <h1 className='board-score'>
                    TOP 10
                </h1>
                {leaderboard.slice(0, 10).map((score, index) => (

                    <div className='side-board' key={index}>
                        <div className=""><span className='board-score'>{index + 1}</span></div>
                        <div className="name">{score.username}</div>
                        <div className="board-score">{score.score}</div>
                    </div>
                )
                )}
            </div>
        </>
    )
}

export default SelectionPage

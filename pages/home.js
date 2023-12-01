import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import erin from '../public/images/erin.webp';
import icon from '../public/images/logo-icon.webp';
import FaceIcon from '@mui/icons-material/Face';
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import WarningIcon from '@mui/icons-material/Warning';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InfiniteScroll from "../src/components/InfiniteScroll";

function Home() {
    const [leaderboard, setLeaderboard] = useState([]);
    const [error, setError] = useState(false);
    const [bgColor, setBgColor] = useState("#ec9e10");

    useEffect(() => {
        fetch('https://polar-dawn-36653.herokuapp.com/api/highscore')
            .then(response => response.json())
            .then(result => {
                setLeaderboard(result)
            });
    }, []);

    return (
        <>
            {error &&
                <div className="err message">
                    <div className='err-message'>
                        I am still working on that!
                    </div>
                    <Image src={erin} alt="Cartoon Erin"
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: 0,
                            color: 'transparent'
                        }}
                        onLoad={(img) => setBgColor("#fff")}
                        priority={true}
                    />
                    <button className="log-btn err message-btn" onClick={() => setError(false)}>
                        Ok
                    </button>
                </div>
            }
            <InfiniteScroll >
                <div
                    className="grid-item bouncing"
                    style={{ backgroundColor: bgColor }}
                >
                    <Image

                        src={icon}
                        alt="Assurant logo"
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: 0,
                            color: 'transparent'
                        }}
                        onLoad={(img) => setBgColor("#fff")}
                        priority={true}
                    />
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: 'ERIN' },
                        }}
                    >
                        <div className="item-icon">
                            <div>ERIN</div>
                            <FaceIcon />
                        </div>
                    </Link>
                </div>
                <div
                    className="grid-item bouncing"
                    style={{ backgroundColor: bgColor }}
                    onClick={() => setError(true)}
                >
                    <Image
                        src={icon}
                        alt="Assurant logo"
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: 0,
                            color: 'transparent'
                        }}
                        onLoad={(img) => setBgColor("#fff")}
                        priority={true}
                    />
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '11' },
                        }}
                    >
                        <div className="item-icon">

                            <div>FLOOD</div>
                            <WaterIcon />

                        </div>
                    </Link>
                </div>
                <div
                    className="grid-item bouncing"
                    style={{ backgroundColor: bgColor }}
                    onClick={() => setError(true)}
                >
                    <Image
                        src={icon}
                        alt="Assurant logo"
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: 0,
                            color: 'transparent'
                        }}
                        onLoad={(img) => setBgColor("#fff")}
                        priority={true}
                    />
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '22' },
                        }}
                    >
                        <div className="item-icon">

                            <div>WIND</div>
                            <AirIcon />

                        </div>
                    </Link>
                </div>
                <div
                    className="grid-item bouncing"
                    style={{ backgroundColor: bgColor }}
                    onClick={() => setError(true)}
                >
                    <Image
                        src={icon}
                        alt="Assurant logo"
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: 0,
                            color: 'transparent'
                        }}
                        onLoad={(img) => setBgColor("#fff")}
                        priority={true}
                    />
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '12' },
                        }}
                    >
                        <div className="item-icon">

                            <div>CONDO</div>
                            <ApartmentIcon />

                        </div>
                    </Link>
                </div>
                <div
                    className="grid-item bouncing"
                    style={{ backgroundColor: bgColor }}
                    onClick={() => setError(true)}
                >
                    <Image
                        src={icon}
                        alt="Assurant logo"
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: 0,
                            color: 'transparent'
                        }}
                        onLoad={(img) => setBgColor("#fff")}
                        priority={true}
                    />
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '29' },
                        }}
                    >
                        <div className="item-icon">

                            <div>VERIFY</div>
                            <ContactEmergencyIcon />

                        </div>
                    </Link>
                </div>
                <div
                    className="grid-item bouncing"
                    style={{ backgroundColor: bgColor }}
                    onClick={() => setError(true)}
                >
                    <Image
                        src={icon}
                        alt="Assurant logo"
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: 0,
                            color: 'transparent'
                        }}
                        onLoad={(img) => setBgColor("#fff")}
                        priority={true}
                    />
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '20' },
                        }}
                    >
                        <div className="item-icon">

                            <div>LPI</div>
                            <WarningIcon />

                        </div>
                    </Link>
                </div>
                <div
                    className="grid-item bouncing"
                    style={{ backgroundColor: bgColor }}
                    onClick={() => setError(true)}
                >
                    <Image
                        src={icon}
                        alt="Assurant logo"
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: 0,
                            color: 'transparent'
                        }}
                        onLoad={(img) => setBgColor("#fff")}
                        priority={true}
                    />
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '17' },
                        }}
                    >
                        <div className="item-icon">

                            <div>HAZARD</div>
                            <LocalFireDepartmentIcon />
                        </div>
                    </Link>
                </div>
                <div
                    className="grid-item bouncing"
                    style={{ backgroundColor: bgColor }}
                    onClick={() => setError(true)}
                >
                    <Image
                        src={icon}
                        alt="Assurant logo"
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: 0,
                            color: 'transparent'
                        }}
                        onLoad={(img) => setBgColor("#fff")}
                        priority={true}
                    />
                    <Link
                        href={{
                            // pathname: '/quiz',
                            query: { cat: '27' },
                        }}
                    >
                        <div className="item-icon">

                            <div>PAYMENTS</div>
                            <CreditCardIcon />

                        </div>
                    </Link>
                </div>
            </InfiniteScroll>
            <div className='leader-img'>
                <Image
                    alt="cartoon erin"
                    src={erin}
                    width={360}
                    height={360}
                    priority={true}
                />
            </div>

            <div className='leaders'>
                {leaderboard.length ?
                    <>
                        <h2>
                            TOP 10
                        </h2>
                        {leaderboard.slice(0, 10).map((score, index) => (
                            <li className='side-board' key={index}>
                                <div className='home-place'>{index + 1}.</div>
                                <div className="home-name">{score.username}</div>
                                <div className="home-score">{score.score}</div>
                            </li>
                        )
                        )}
                    </>
                    :
                    <div className='leaderboard-loader'>
                        <div className="side-loader loader"></div>
                    </div>
                }

            </div>

        </>
    )
}

export default Home

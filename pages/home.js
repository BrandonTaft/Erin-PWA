import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MovieIcon from '@mui/icons-material/Movie';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import BalanceIcon from '@mui/icons-material/Balance';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import LanguageIcon from '@mui/icons-material/Language';
import BoltIcon from '@mui/icons-material/Bolt';
import PetsIcon from '@mui/icons-material/Pets';
import ScienceIcon from '@mui/icons-material/Science';
import zIndex from '@mui/material/styles/zIndex';

function SelectionPage() {
    const [isInMiddle, setISInMiddle] = useState();
    const [count, setCount] = useState(0);

    useEffect(() => {
        var z = document.getElementById("option")
        // var middle = window.innerHeight / 2;
        var middle = z.clientHeight / 2;
        console.log("middle window", middle)
        var myDiv = document.getElementById("myDiv");
        var myDivLocation = myDiv.getBoundingClientRect()
        console.log("myDiv location", myDivLocation)
        if(myDivLocation.top > middle && myDivLocation.top < (middle+myDivLocation.height - 75)){
            myDiv.classList.add("grow")
        } else (
            myDiv.classList.remove("grow")
        )
        const onScroll = () => setCount(count + 1);
        // clean up code
        z.removeEventListener('scroll', onScroll);
        z.addEventListener('scroll', onScroll, { passive: true });
        
        return () => z.removeEventListener('scroll', onScroll);
        
    }, [count]);

    // useEffect(() => {
    // //     var y = window.innerHeight / 2;
    // var z = document.getElementById("option")
    // // console.log("Y", z)
    // if(isInViewport(z)){
    //     setISInMiddle(true)
    // } else {
    //     setISInMiddle(false)
    // }
    // console.log(isInMiddle)
    
    // }, [isInMiddle])
    // function isInViewport(element) {
    //     const rect = element.getBoundingClientRect();
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // }

    //     function scrollMe() {
    //         var z = document.getElementById("option")
    //         console.log("hey",isInViewport(z))
    //     }

        return(
            <div className="home column" id="option">
            <div className="top-fade"></div>
            
                            <Box  className="grid-item fading" >
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '9' },
                                    }}
                                >
                                    <div className="yellow m-auto">
                                        <PsychologyIcon />
                                        <div>GENERAL</div>
                                    </div>
                                </Link>
                            </Box>
                        
                       
                            <Box className="grid-item fading">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '11' },
                                    }}
                                >
                                    <div className="yellow m-auto">
                                        <MovieIcon />
                                        <div>MOVIES</div>
                                    </div>
                                </Link>
                            </Box>
                        
                       
                            <Box className="grid-item fading">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '22' },
                                    }}
                                >
                                    <div className="yellow m-auto">
                                        <LanguageIcon />
                                        <div>GEOGRAPHY</div>
                                    </div>
                                </Link>
                            </Box>
                        
                       
                            <Box className="grid-item fading" id="myDiv">
                                <div className="yellow m-auto">
                                    <Link
                                        href={{
                                            pathname: '/quiz',
                                            query: { cat: '10' },
                                        }}
                                    >
                                        <div className="yellow m-auto">
                                            <AutoStoriesIcon />
                                            <div>BOOKS</div>
                                        </div>
                                    </Link>

                                </div>
                            </Box>
                        
                       
                            <Box className="grid-item fading">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '15' },
                                    }}
                                >
                                    <div className="yellow m-auto">
                                        <SportsEsportsIcon />
                                        <div>VIDEO GAMES</div>
                                    </div>
                                </Link>
                            </Box>
                        
                       
                            <Box className="grid-item fading">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '12' },
                                    }}
                                >
                                    <div className="yellow m-auto">
                                        <MusicNoteIcon />
                                        <div>MUSIC</div>
                                    </div>
                                </Link>
                            </Box>
                        
                       
                            <Box className="grid-item fading">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '14' },
                                    }}
                                >
                                    <div className="yellow m-auto">
                                        <LiveTvIcon />
                                        <div>TV</div>
                                    </div>
                                </Link>
                            </Box>
                        
                       
                            <Box className="grid-item fading">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '29' },
                                    }}
                                >
                                    <div className="yellow m-auto">
                                        <BoltIcon />
                                        <div>COMICS</div>
                                    </div>
                                </Link>
                            </Box>
                        
                       
                            <Box className="grid-item fading">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '20' },
                                    }}
                                >
                                    <div className="yellow m-auto">
                                        <BalanceIcon />
                                        <div>MYTHOLOGY</div>
                                    </div>
                                </Link>
                            </Box>
                        
                       
                            <Box className="grid-item fading">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '21' },
                                    }}
                                >
                                    <div className="yellow m-auto">
                                        <SportsFootballIcon />
                                        <div>SPORTS</div>
                                    </div>
                                </Link>
                            </Box>
                        
                       
                            <Box className="grid-item fading">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '17' },
                                    }}
                                >
                                    <div className="yellow m-auto">
                                        <ScienceIcon />
                                        <div>SCIENCE</div>
                                    </div>
                                </Link>
                            </Box>
                        
                       
                            <Box className="grid-item fading">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '27' },
                                    }}
                                >
                                    <div className="yellow m-auto">
                                        <PetsIcon />
                                        <div>ANIMALS</div>
                                    </div>
                                </Link>
                            </Box>
                            <div className="bottom-fade"></div>
            </div>
       )
}

export default SelectionPage

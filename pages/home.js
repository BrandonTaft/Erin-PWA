import React, { useEffect, useState, useRef, useLayoutEffect, useCallback,forwardRef, createRef } from 'react';
import Link from 'next/link';
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
import InfiniteScroll from "../src/components/InfiniteScroll";

function SelectionPage() {
    useEffect(() => {
    window.addEventListener("load",function() {
        setTimeout(function(){
            // This hides the address bar:
            window.scrollTo(0, 1);
        }, 0);
    });
})
    return (
        <InfiniteScroll >
            <div className="loop"
                id="selection-container"
            >
                <Box className="grid-item bouncing" >
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '9' },
                        }}
                    >
                        <div className="purple m-auto">
                            <PsychologyIcon />
                            <div>GENERAL</div>
                        </div>
                    </Link>
                </Box>
                <Box className="grid-item bouncing">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '11' },
                        }}
                    >
                        <div className="purple m-auto">
                            <MovieIcon />
                            <div>MOVIES</div>
                        </div>
                    </Link>
                </Box>
                <Box className="grid-item bouncing three">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '22' },
                        }}
                    >
                        <div className="purple m-auto">
                            <LanguageIcon />
                            <div>GEOGRAPHY</div>
                        </div>
                    </Link>
                </Box>
                <Box className="grid-item bouncing four">
                    <div className="purple m-auto">
                        <Link
                            href={{
                                pathname: '/quiz',
                                query: { cat: '10' },
                            }}
                        >
                            <div className="purple m-auto">
                                <AutoStoriesIcon />
                                <div>BOOKS</div>
                            </div>
                        </Link>
                    </div>
                </Box>
                <Box className="grid-item bouncing five">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '15' },
                        }}
                    >
                        <div className="purple m-auto">
                            <SportsEsportsIcon />
                            <div>VIDEO GAMES</div>
                        </div>
                    </Link>
                </Box>
                <Box className="grid-item bouncing six">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '12' },
                        }}
                    >
                        <div className="purple m-auto">
                            <MusicNoteIcon />
                            <div>MUSIC</div>
                        </div>
                    </Link>
                </Box>
                <Box className="grid-item bouncing seven">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '14' },
                        }}
                    >
                        <div className="purple m-auto">
                            <LiveTvIcon />
                            <div>TV</div>
                        </div>
                    </Link>
                </Box>
                <Box className="grid-item bouncing six">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '29' },
                        }}
                    >
                        <div className="purple m-auto">
                            <BoltIcon />
                            <div>COMICS</div>
                        </div>
                    </Link>
                </Box>
                <Box className="grid-item bouncing five">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '20' },
                        }}
                    >
                        <div className="purple m-auto">
                            <BalanceIcon />
                            <div>MYTHOLOGY</div>
                        </div>
                    </Link>
                </Box>
                <Box className="grid-item bouncing four">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '21' },
                        }}
                    >
                        <div className="purple m-auto">
                            <SportsFootballIcon />
                            <div>SPORTS</div>
                        </div>
                    </Link>
                </Box>
                <Box className="grid-item bouncing three">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '17' },
                        }}
                    >
                        <div className="purple m-auto">
                            <ScienceIcon />
                            <div>SCIENCE</div>
                        </div>
                    </Link>
                </Box>
                <Box className="grid-item bouncing two" id="bottom-element">
                    <Link
                        href={{
                            pathname: '/quiz',
                            query: { cat: '27' },
                        }}
                    >
                        <div className="purple m-auto">
                            <PetsIcon />
                            <div>ANIMALS</div>
                        </div>
                    </Link>
                </Box>
            </div>
        </InfiniteScroll>
    )
}

export default SelectionPage

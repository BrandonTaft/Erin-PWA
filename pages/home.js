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
import InfiniteScrollLoop from "../src/components/InfiniteScrollLoop";

function SelectionPage() {
    // const [isInMiddle, setISInMiddle] = useState();
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     const selectionContainer = document.getElementById("selection-container");
    //     const myContainer = selectionContainer.getBoundingClientRect();
    //     //const topOfContainer = myContainer.y;
    //     // const middleOfContainer = myContainer.height / 2;
    //     const bottomOfContainer = myContainer.height;
    //     const bottom = document.getElementById("bottom-element");
    //     const bottomElement = bottom.getBoundingClientRect();

    //     console.log(bottomElement.top, bottomOfContainer)
    //     if(Math.ceil(bottomElement.top) == Math.ceil(bottomOfContainer)) {
    //         const selections = selectionContainer.innerHTML;
    //         selectionContainer.insertAdjacentHTML("afterbegin", selections);
    //         selectionContainer.insertAdjacentHTML("beforeend", selections);
    //         console.log("it did")
    //     }
        
    //     const onScroll = () => setCount(count + 1);
    //     selectionContainer.removeEventListener('scroll', onScroll);
    //     selectionContainer.addEventListener('scroll', onScroll, { passive: true });
    //     return () => selectionContainer.removeEventListener('scroll', onScroll);
        // var middle = window.innerHeight / 2;
        // var middle = selectionContainer.clientHeight / 2;
        // console.log("middle window", myContainer)


        // var myDiv = document.getElementById("myDiv");
        // var myDivLocation = myDiv.getBoundingClientRect()
        // console.log("myDiv location", myDivLocation)
        // if(myDivLocation.top > middle && myDivLocation.top < (middle+myDivLocation.height)){
        //     myDiv.classList.add("grow")
        // } else (
        //     myDiv.classList.remove("grow")
        // )
        //
        // // clean up code
        // 
//         var doc = window.document,
//   context = doc.querySelector('.js-loop'),
//   clones = context.querySelectorAll('.is-clone'),
//   disableScroll = false,
//   scrollHeight = 0,
//   scrollPos = 0,
//   clonesHeight = 0,
//   i = 0;

// function getScrollPos () {
//   return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0);
// }

// function setScrollPos (pos) {
//   context.scrollTop = pos;
// }

// function getClonesHeight () {
//   clonesHeight = 0;

//   for (i = 0; i < clones.length; i += 1) {
//     clonesHeight = clonesHeight + clones[i].offsetHeight;
//   }

//   return clonesHeight;
// }

// function reCalc () {
//   scrollPos = getScrollPos();
//   scrollHeight = context.scrollHeight;
//   clonesHeight = getClonesHeight();

//   if (scrollPos <= 0) {
//     setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
//   }
// }

// function scrollUpdate () {
//   if (!disableScroll) {
//     scrollPos = getScrollPos();

//     if (clonesHeight + scrollPos >= scrollHeight) {
//       // Scroll to the top when you’ve reached the bottom
//       setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
//       disableScroll = true;
//     } else if (scrollPos <= 0) {
//       // Scroll to the bottom when you reach the top
//       setScrollPos(scrollHeight - clonesHeight);
//       disableScroll = true;
//     }
//   }

//   if (disableScroll) {
//     // Disable scroll-jumping for a short time to avoid flickering
//     window.setTimeout(function () {
//       disableScroll = false;
//     }, 40);
//   }
// }

// function init () {
//   reCalc();
  
//   context.addEventListener('scroll', function () {
//     window.requestAnimationFrame(scrollUpdate);
//   }, false);

//   window.addEventListener('resize', function () {
//     window.requestAnimationFrame(reCalc);
//   }, false);
// }

// if (document.readyState !== 'loading') {
//   init()
// } else {
//   doc.addEventListener('DOMContentLoaded', init, false)
// }

        
   // }, [count]);

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
            <InfiniteScrollLoop>
            <div className="home column Loop js-loop" id="selection-container">
            <div className="top-fade"></div>
            
                            <Box  className="grid-item fading one" >
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
                        
                       
                            <Box className="grid-item fading two">
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
                        
                       
                            <Box className="grid-item fading three">
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
                        
                       
                            <Box className="grid-item fading four" id="myDiv">
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
                        
                       
                            <Box className="grid-item fading five">
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
                        
                       
                            <Box className="grid-item fading six">
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
                        
                       
                            <Box className="grid-item fading seven">
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
                        
                       
                            <Box className="grid-item fading six">
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
                        
                       
                            <Box className="grid-item fading five">
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
                        
                       
                            <Box className="grid-item fading four">
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
                        
                       
                            <Box className="grid-item fading three">
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
                        
                       
                            <Box className="grid-item fading two" id="bottom-element">
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
            </InfiniteScrollLoop>
       )
}

export default SelectionPage

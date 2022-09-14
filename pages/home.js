import Link from 'next/link';
import Image from 'next/image';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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

function SelectionPage() {
    // Defines the custom break points to be used
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                rs: 500,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    return (
        // Render Display
        <ThemeProvider theme={theme}>
            <div className="fill-top">
                    <Image
                        className='wiz-img'
                        alt="wizard"
                        src="/images/logo-full.png"
                        layout='fill'
                        objectFit='scale-down'
                        priority={true}
                    />
                </div>
            <div className="home container row column " >
            
                <Box className='grid-box'>
                    <Grid className="grid-container" container spacing={{ xs: 1, sm: 2.5, md: 3 }} columns={{ xs: 2, rs: 3 }}>
                        <Grid className='ma-auto' item xs={1} >
                            <Box className="grid-item">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '9' },
                                    }}
                                >
                                    <div className="yellow">
                                        <PsychologyIcon />
                                        <div>GENERAL INFO</div>
                                    </div>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid className='ma-auto' item xs={1}>
                            <Box className="grid-item">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '11' },
                                    }}
                                >
                                    <div className="yellow">
                                        <MovieIcon />
                                        <div>MOVIES</div>
                                    </div>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid className='ma-auto' item xs={1}>
                            <Box className="grid-item">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '22' },
                                    }}
                                >
                                    <div className="yellow">
                                        <LanguageIcon />
                                        <div>GEOGRAPHY</div>
                                    </div>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid className='ma-auto' item xs={1}>
                            <Box className="grid-item">
                                <div className="yellow">
                                    <Link
                                        href={{
                                            pathname: '/quiz',
                                            query: { cat: '10' },
                                        }}
                                    >
                                        <div className="yellow">
                                            <AutoStoriesIcon />
                                            <div>BOOKS</div>
                                        </div>
                                    </Link>

                                </div>
                            </Box>
                        </Grid>
                        <Grid className='ma-auto' item xs={1}>
                            <Box className="grid-item">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '15' },
                                    }}
                                >
                                    <div className="yellow">
                                        <SportsEsportsIcon />
                                        <div>VIDEO GAMES</div>
                                    </div>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid className='ma-auto' item xs={1}>
                            <Box className="grid-item">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '12' },
                                    }}
                                >
                                    <div className="yellow">
                                        <MusicNoteIcon />
                                        <div>MUSIC</div>
                                    </div>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid className='ma-auto' item xs={1}>
                            <Box className="grid-item">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '14' },
                                    }}
                                >
                                    <div className="yellow">
                                        <LiveTvIcon />
                                        <div>TV</div>
                                    </div>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid className='ma-auto' item xs={1}>
                            <Box className="grid-item">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '29' },
                                    }}
                                >
                                    <div className="yellow">
                                        <BoltIcon />
                                        <div>COMICS</div>
                                    </div>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid className='ma-auto' item xs={1}>
                            <Box className="grid-item">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '20' },
                                    }}
                                >
                                    <div className="yellow">
                                        <BalanceIcon />
                                        <div>MYTHOLOGY</div>
                                    </div>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid className='ma-auto' item xs={1}>
                            <Box className="grid-item">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '21' },
                                    }}
                                >
                                    <div className="yellow">
                                        <SportsFootballIcon />
                                        <div>SPORTS</div>
                                    </div>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid className='ma-auto' item xs={1}>
                            <Box className="grid-item">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '17' },
                                    }}
                                >
                                    <div className="yellow">
                                        <ScienceIcon />
                                        <div>SCIENCE</div>
                                    </div>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid className='ma-auto' item xs={1}>
                            <Box className="grid-item">
                                <Link
                                    href={{
                                        pathname: '/quiz',
                                        query: { cat: '27' },
                                    }}
                                >
                                    <div className="yellow">
                                        <PetsIcon />
                                        <div>ANIMALS</div>
                                    </div>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </ThemeProvider>
    )
}

export default SelectionPage

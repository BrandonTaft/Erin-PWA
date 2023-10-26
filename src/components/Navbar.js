import {  useEffect } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

function Navbar() {
    const router = useRouter()
    useEffect(() => {
        let name = localStorage.getItem('name')
        if (name === null) {
            if (!router.isReady) return;
            const query = router.query;
            let passportName = query.name;
            localStorage.setItem('name', passportName)
        }
    }, [router.isReady, router.query]);

    function logOut() {
        localStorage.clear()
        router.push('/')
    };

    return (
        <div className="iconBar">
            <Link href="/home">
                <HomeTwoToneIcon />
            </Link>
            <Link  href="/leaderboard">
                <EmojiEventsTwoToneIcon />
            </Link>
            <Link  href="/profile">
                <AccountCircleTwoToneIcon />
            </Link>
            <ExitToAppTwoToneIcon onClick={logOut} />
        </div>
    )
};

export default Navbar
import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from 'next/router';
import useOnOutsideClick from "./useOnOutsideClick";
import Link from 'next/link';
import CancelIcon from '@mui/icons-material/Cancel';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

function Navbar() {
    const router = useRouter();
    const menuRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false);
    const onOutsideClick = useCallback(() => {
        setIsOpen(false)
      }, []);

    useOnOutsideClick(menuRef, onOutsideClick, false);
    
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
        setIsOpen(!isOpen)
        localStorage.clear()
        router.push('/')
    };

    return (
        <div className="iconBar">
            <div className={isOpen ? "burger active ignore" : "burger ignore"} onClick={() => setIsOpen(!isOpen)} >
                <div className={isOpen ? "patty active ignore" : "patty"}></div>
                <div className={isOpen ? "patty active ignore" : "patty"}></div>
                <div className={isOpen ? "patty active ignore" : "patty"}></div>
            </div>
            {isOpen &&
                <div className="menu" ref={menuRef}>
                    <div className="menu-item cancel" onClick={() => setIsOpen(!isOpen)}>
                        <CancelIcon />
                    </div>
                    <Link href="/home" >
                        <div className="menu-item" onClick={() => setIsOpen(false)}>
                        <HomeTwoToneIcon />
                        <div>Home</div>
                        </div>
                    </Link>
                    <Link href="/leaderboard">
                        <div className="menu-item" onClick={() => setIsOpen(false)}>
                        <EmojiEventsTwoToneIcon />
                        <div>Leaderboard</div>
                        </div>
                    </Link>
                    <Link href="/welcome">
                        <div className="menu-item" onClick={() => setIsOpen(false)}>
                        <AccountCircleTwoToneIcon />
                        <div>Profile</div>
                        </div>
                    </Link>
                    <div className="menu-item" onClick={logOut} >
                    <ExitToAppTwoToneIcon />
                    <div>Log Out</div>
                    </div>
                </div>
            }
        </div>
    )
};

export default Navbar
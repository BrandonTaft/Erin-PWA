import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('./Navbar'));
import { useRouter } from 'next/router';

function Layout({ children }) {
    const router = useRouter();
    let path = router.pathname;
    return (
        <div className={path === '/' || path === '/register' ? "light-layout" : "layout"} >
            {path === '/' || path === '/register' ? "" : <Navbar path={path} />}
            {children}
        </div>
    )
}
export default Layout
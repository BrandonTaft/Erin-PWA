import  Navbar from "./Navbar";
import { useRouter } from 'next/router';

function Layout({ children }) {
    const router = useRouter();
    let path = router.pathname;
    return (
        <div className="layout" >
            {path === '/' || path === '/register' ? "" : <Navbar path={path} />}
            {children}
        </div>
    )
}
export default Layout
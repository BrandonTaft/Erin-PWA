import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('./Navbar'));
import { useRouter } from 'next/router';
import { Roboto } from 'next/font/google';

const inter = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700', '900'],
    display: 'swap',
  })

function Layout({ children }) {
    const router = useRouter();
    let path = router.pathname;
    return (
        <main className={inter.className}>
        <div className="layout" >
            {path === '/' || path === '/register' ? null : <Navbar path={path} />}
            {children}
        </div>
        </main>
    )
}
export default Layout
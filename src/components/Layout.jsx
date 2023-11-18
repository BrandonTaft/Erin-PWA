import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('./Navbar'));
import { useRouter } from 'next/router';
import { Roboto_Serif, Roboto, Inter, Lato, Work_Sans, Source_Sans_3 } from 'next/font/google';

export const roboto = Roboto_Serif({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    display: 'swap',
  })

  export const source = Source_Sans_3({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    display: 'swap',
  })

  export const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
  })

  export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
  })

  export const work = Work_Sans({
    subsets: ['latin'],
    weight: ['400','500','600', '700'],
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
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRef, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  const [navOption, setNavOption] = useState('home');
  const router = useRouter();
  const updateNavOption = (option: string) => setNavOption(option);

  useEffect(() => { 
    const homeOptions = ['home', 'philosophy', 'services', 'contact']
    if (router.asPath !== '/' && homeOptions.includes(navOption)) {
      router.push('/')
    }
  },[navOption])

  const openOrCloseMenu = () => setMenuOpen(prev => !prev)

  useEffect(() => { 
    const changeScreenSize = () => {
      if (window.innerWidth <= 800) {
        setSmallScreen(true)
      } else {
        setSmallScreen(false)
      }
    }

    changeScreenSize()
    window.addEventListener('resize', changeScreenSize)

    console.log(
      '%cWebsite created and maintained by LGG Web Services.\n\n' +
      '💻 Looking for a skilled web developer? Let\'s chat!\n\n' +
      '🌐 Explore my portfolio: https://www.lauragarciaguerra.com',
      'font-size: 14px; line-height: 1.5;'
    );
    
    return () => window.removeEventListener('resize', changeScreenSize)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [smallScreen])


  return (
    <Component
      {...pageProps}
      smallScreen={smallScreen}
      menuOpen={menuOpen}
      openOrCloseMenu={openOrCloseMenu}
      navOption={navOption}
      updateNavOption={updateNavOption}
    />
  )
}

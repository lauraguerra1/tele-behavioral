import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import { useRef, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [navOption, setNavOption] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false)

  const openOrCloseMenu = () => setMenuOpen(prev => !prev)
  
  const updateNavOption = (option: string) => setNavOption(option);
  const sectionRefs = {
    home: useRef(null),
    philosophy: useRef(null),
    services: useRef(null), 
    contact: useRef(null)
  };

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

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setNavOption(entry.target.id);
        }
      });
    }, {threshold: 0.5});

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <Component
      {...pageProps}
      smallScreen={smallScreen}
      menuOpen={menuOpen}
      navOption={navOption}
      sectionRefs={sectionRefs}
      openOrCloseMenu={openOrCloseMenu}
      updateNavOption={updateNavOption}
    />
  )
}

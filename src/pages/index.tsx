import { Inter } from 'next/font/google'
import Form from '@/components/Form'
import ContactCard from '@/components/ContactCard'
import NavBar from '@/components/NavBar'
import { useEffect, useRef, useState } from 'react';
import Philosophy from '@/components/Philosophy';
import Services from '@/components/Services';
import Image from 'next/image';
import menuBtn from '../images/menu.png';
import closeBtn from '../images/close.png';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
    <main className='flex flex-col'>
      <header id='nav' className='w-screen bg-white sticky top-0 z-50 border-b-4 border-great-gray p-5'>
        <div className='flex justify-between items-center'>
          <h1 className={`flex-1 text-5xl ${smallScreen ? '' : 'text-center'} text-blackish-gray`}>ROXANNE FLAHERTY</h1>
          {smallScreen && <button onClick={openOrCloseMenu} id='menuBtn' className='ml-2'><Image src={menuOpen ? closeBtn : menuBtn} alt={`${menuOpen? 'close' : 'open'} menu button`}/></button>}
        </div>
        {(!smallScreen || menuOpen) && <NavBar updateNavOption={updateNavOption} navOption={navOption}/>}
      </header>
      <section ref={sectionRefs.home} id='home' className='w-87vw self-center bg-cover min-h-650px mb-5 flex flex-col items-center justify-around py-20'>
        <p id='openingText' className='text-7xl text-center'>PUT YOUR <br />MIND + BODY + SPIRIT<br /> IN GOOD HANDS</p>
        <p className='text-center italic playfair'>CREATIVE EMPOWERMENT THROUGH <br/>LOVE, SUPPORT, AND EDUCATION</p>
      </section>
      <section ref={sectionRefs.philosophy} id='philosophy' className='w-screen self-center bg-white mb-10 p-20 flex justify-center items-center'>
        <Philosophy />
      </section>
      <section ref={sectionRefs.services} id='services' className='w-screen bg-white mb-10 grid grid-cols-2 p-5 px-40 relative'>
        <Services />
        <div id='serviceSpacer' className='flex items-center justify-center absolute inset-0'>
          <div className='bg-white h-20 w-20 rounded-full z-20'></div>
        </div>
      </section>
      <section ref={sectionRefs.contact}  id='contact' className='relative w-screen bg-cover flex justify-around p-10 mb-10'>
        <ContactCard />
        <Form/>
        <a id='linkedInMobile' className='hidden bg-sandy text-gray-700 px-4 my-4 py-2 self-start' href='https://www.linkedin.com/in/roxanne-flaherty-881908298/' target='_blank'>Visit LinkedIn</a>
      </section>
      <section id='footer' className='font-extralight text-blackish-gray  w-screen h-60 p-5 flex flex-col justify-around'>
        <h2 className='text-5xl text-center'>Roxanne Flaherty</h2>
        <h3 className='text-4xl text-center'>Board Certified Family & Psychiatric Nurse Practitioner</h3>
        <p className='text-xl text-center'>DNP, PMHNP-BC, FNP-C</p>
      </section>
    </main>
  )
}

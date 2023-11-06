import { Inter } from 'next/font/google'
import Form from '@/components/Form'
import ContactCard from '@/components/ContactCard'
import NavBar from '@/components/NavBar'
import { useEffect, useRef, useState } from 'react';
import roxanne from '../images/roxanne.png';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [navOption, setNavOption] = useState('home');
  const updateNavOption = (option: string) => setNavOption(option);
  const sectionRefs = {
    home: useRef(null),
    philosophy: useRef(null),
    services: useRef(null), 
    contact: useRef(null)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setNavOption(entry.target.id);
        }
      });
    }, {threshold: 0.6});

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
      <section id='nav' className='w-screen bg-white sticky top-0 z-20 border-b-4 border-great-gray p-5'>
        <h1 className='text-5xl text-center text-blackish-gray'>TELE BEHAVIORAL HEALTH</h1>
        <NavBar updateNavOption={updateNavOption} navOption={navOption} />
      </section>
      <section ref={sectionRefs.home} id='home' className='w-87vw self-center bg-cover h-650px mb-5 flex flex-col items-center justify-around py-20'>
        <p className='text-7xl text-center'>PUT YOUR <br/>MIND + BODY + SPIRIT<br/> IN GOOD HANDS</p>
        <p className='text-center italic playfair'>CREATIVE EMPOWERMENT THROUGH <br/>LOVE, SUPPORT, AND EDUCATION</p>
      </section>
      <section ref={sectionRefs.philosophy} id='philosophy' className='w-screen self-center bg-white mb-10 p-20 flex justify-center items-center h-650px'>
        <div className='flex justify-center'>
          <div className='w-1/4 flex flex-col justify-between mr-10'>
            <h2 className='text-4xl mb-10'>INTEGRATIVE MEDICINE</h2>
            <Image src={roxanne} alt='profile photo of Roxanne Flaherty' className='rounded-full h-40 w-40 mb-20' />
          </div>
          <div className='w-1/2 ml-10'>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. <br /> <br /> This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
            <p className='italic mt-20 playfair'>"When you touch one thing with deep awareness,
 you touch everything."</p>
            <p className='playfair'>- Lao Tzu</p>
          </div>
        </div>
      </section>
      <section ref={sectionRefs.services} id='services' className='w-screen bg-white h-80 mb-10'>
        <p>services will go here</p>
      </section>
      <section ref={sectionRefs.contact}  id='contact' className='relative w-screen bg-cover flex justify-around p-10 mb-10'>
        <ContactCard />
        <Form/>
      </section>
      <section id='footer' className='font-extralight text-blackish-gray  w-screen h-60 p-5 flex flex-col justify-around'>
        <h2 className='text-5xl text-center'>Roxanne Flaherty</h2>
        <h3 className='text-4xl text-center'>Board Certified Family & Psychiatric Nurse Practitioner</h3>
      </section>
    </main>
  )
}

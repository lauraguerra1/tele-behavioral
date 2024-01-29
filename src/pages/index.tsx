import Form from '@/components/Form';
import ContactCard from '@/components/ContactCard';
import Philosophy from '@/components/Philosophy';
import Services from '@/components/Services';
import { AppProps } from '@/types';
import Header from '@/components/Header';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import NavBar from '@/components/NavBar';
import { scrollTo } from "@/utils/helpers";

export default function Home({ smallScreen, menuOpen, openOrCloseMenu, navOption, updateNavOption}: AppProps) {
  useEffect(() => { 
    console.log('useEffect')
    scrollTo(navOption)
  }, [])

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
          updateNavOption(entry.target.id);
        }
      });
    }, {threshold: 0.4});

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
    <Layout
        smallScreen={smallScreen}
        menuOpen={menuOpen}
        openOrCloseMenu={openOrCloseMenu}
        updateNavOption={updateNavOption}
        navOption={navOption}
      >

      <section ref={sectionRefs.home} id='home' className='w-87vw self-center bg-cover min-h-650px mb-5 flex flex-col items-center justify-around p-1 py-20'>
        <p id='openingText' className='text-7xl text-center '>PUT YOUR <br />MIND + BODY + SPIRIT<br /> IN GOOD HANDS</p>
        <p className='text-center italic playfair'>CREATIVE EMPOWERMENT THROUGH <br/>LOVE, SUPPORT, AND EDUCATION</p>
      </section>
      <section ref={sectionRefs.philosophy} id='philosophy' className='w-screen self-center bg-white mb-10 px-5 md:px-20 p-20 flex justify-center items-center'>
        <Philosophy />
      </section>
      <section ref={sectionRefs.services} id='services' className='w-screen bg-white mb-10 pt-5 relative'>
        <h2 className='w-full text-slate-600 text-2xl font-semibold text-center'>SERVICES</h2>
        <div id='servicesWrapper' className='grid grid-cols-3 gap-5 px-20 p-5 text-center'>
          <Services />
        </div>
      </section>
      <div className='w-screen self-center bg-white bg-opacity-70 mb-10 py-20 px-5 flex items-center justify-center'>
        <article className='border-l-2 pl-5 border-black'>
          <p className='italic playfair text-xl'>&quot;When you touch one thing with deep awareness,<br />you touch everything.&quot;</p>
          <p className='playfair text-lg'>- Lao Tzu</p>   
        </article>
      </div>
      <section ref={sectionRefs.contact}  id='contact' className='relative w-screen bg-cover grid grid-cols-2 p-10 mb-10'>
        <ContactCard />
        <Form/>
        <div className='col-span-2 flex flex-col md:flex-row justify-around py-5'>
          <iframe className='w-full h-64 rounded-md max-w-screen' loading="lazy" width="600" height="450" src="https://maps.google.com/maps?q=11400%20West%20Olympic%20Boulevard%20Los%20Angeles%2C%20CA%2091404&t=m&z=8&output=embed&iwloc=near" allowFullScreen />
        </div>
      </section>
      <section id='footer' className='font-extralight text-blackish-gray  w-screen h-60 p-5 flex flex-col justify-around'>
        <h2 className='text-5xl text-center'>Roxanne Flaherty</h2>
        <h3 className='text-4xl text-center'>Board Certified Family & Psychiatric Nurse Practitioner</h3>
        <p className='text-xl text-center'>DNP, PMHNP-BC, FNP-C</p>
      </section>
    </Layout>

  )
}

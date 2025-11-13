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
import { scrollTo } from '@/utils/helpers';

export default function Home({ smallScreen, menuOpen, openOrCloseMenu, navOption, updateNavOption }: AppProps) {
  useEffect(() => {
    scrollTo(navOption);
  }, []);

  const sectionRefs = {
    home: useRef(null),
    philosophy: useRef(null),
    services: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateNavOption(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout smallScreen={smallScreen} menuOpen={menuOpen} openOrCloseMenu={openOrCloseMenu} updateNavOption={updateNavOption} navOption={navOption}>
      <section ref={sectionRefs.home} id='home' className='w-87vw self-center bg-cover min-h-650px mb-5 flex flex-col items-center justify-around p-1 py-20'>
        <p id='openingText' className='text-7xl text-center '>
          PUT YOUR <br />
          MIND + BODY + SPIRIT
          <br /> IN GOOD HANDS
        </p>
        <p className='text-center italic playfair'>
          CREATIVE EMPOWERMENT THROUGH <br />
          LOVE, SUPPORT, AND EDUCATION
        </p>
      </section>
      <section ref={sectionRefs.philosophy} id='philosophy' className='w-screen self-center bg-white mb-10 px-5 lg:px-20 py-10 flex justify-center items-center'>
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
          <p className='italic playfair text-xl'>
            &quot;When you touch one thing with deep awareness,
            <br />
            you touch everything.&quot;
          </p>
          <p className='playfair text-lg'>- Lao Tzu</p>
        </article>
      </div>
      <section ref={sectionRefs.contact} id='contact' className='relative w-screen bg-cover grid grid-cols-2 p-10 mb-10'>
        <ContactCard />
        <Form />
        <div className='col-span-2 flex flex-col md:flex-row justify-around py-5'>
          <iframe className='w-full h-64 rounded-md max-w-screen' loading='lazy' width='600' height='450' src='https://maps.google.com/maps?q=11400%20West%20Olympic%20Boulevard%20Los%20Angeles%2C%20CA%2091404&t=m&z=8&output=embed&iwloc=near' allowFullScreen />
        </div>
      </section>
      <section id='footer' className='font-extralight text-blackish-gray  w-screen p-5 flex flex-col justify-around p-[20px]'>
        <h2 className='text-5xl'>Roxanne Flaherty</h2>
        <h3 className='text-4xl'>Board Certified Family & Psychiatric Nurse Practitioner</h3>
        <p className='text-xl pb-1'>DNP, PMHNP-BC, FNP-C</p>
        <p className='text-sm'>Roxanne Flaherty, DNP, is a licensed Nurse Practitioner in multiple states. In California, “Dr.” denotes her doctoral degree, not physician status.</p>
        <div className='footer-bottom flex flex-col md:grid md:grid-cols-4 lg:grid-cols-5 pt-2'>
          <div className='md:col-span-3 lg:col-span-4'>
            <div className='border-b-1 border-solid border-black pb-2 mb-2 md:border-0 md:p-0 md:m-0'>
              <p id='copyright'>
                Copyright © 2024 Roxanne Flaherty{' '}
                <span>
                  | Powered by{' '}
                  <Link className='underline' href='https://www.lauragarciaguerra.com' target='_blank'>
                    LGG Web Services
                  </Link>
                </span>
              </p>
              <p id='poweredBy'>
                Powered by{' '}
                <Link className='underline' href='https://www.lauragarciaguerra.com' target='_blank'>
                  LGG Web Services
                </Link>
              </p>
            </div>
            <Link className='underline col-span-2' href='/disclaimers'>
              Disclaimers & Copyright Info
            </Link>
          </div>
          <div className='flex flex-col'>
            <Link className='underline w-[300px]' href='https://us.fullscript.com/welcome/rflaherty1683823369/store-start' target='_blank'>
              Supplements / Fullscripts
            </Link>
            <div className='flex w-[300px]'>
              <Link className='underline' href='https://www.linkedin.com/in/roxanne-flaherty-881908298/' target='_blank'>
                LinkedIn
              </Link>
              <p className='mx-2'>|</p>
              <Link className='underline' href='https://secure.helloalma.com/providers/roxanne-flaherty/' target='_blank'>
                Alma
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

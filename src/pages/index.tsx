import { Inter } from 'next/font/google'
import Form from '@/components/Form'
import ContactCard from '@/components/ContactCard'
import NavBar from '@/components/NavBar'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [navOption, setNavOption] = useState('home');
  const updateNavOption = (option: string) => setNavOption(option)
  
  return (
    <main className='flex flex-col'>
      <section id='nav' className='w-screen bg-white sticky top-0 z-20 border-b-4 border-great-gray p-5'>
        <h1 className='text-5xl text-center text-blackish-gray'>TELE BEHAVIORAL HEALTH</h1>
        <NavBar updateNavOption={updateNavOption} navOption={navOption} />
      </section>
      <section id='home' className='w-87vw self-center bg-cover h-650px mb-5 flex flex-col items-center justify-around py-20'>
        <p className='text-7xl text-center'>PUT YOUR <br/>MIND + BODY + SPIRIT<br/> IN GOOD HANDS</p>
        <p className='text-center italic playfair'>CREATIVE EMPOWERMENT THROUGH <br/>LOVE, SUPPORT, AND EDUCATION</p>
      </section>
      <section id='philosophy' className='w-screen self-center bg-white h-80 mb-10'>
        <p>philosophy will go here</p>
      </section>
      <section id='services' className='w-screen bg-white h-80 mb-10'>
        <p>services will go here</p>
      </section>
      <section id='contact' className='relative w-screen bg-cover flex justify-around p-10 mb-10'>
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

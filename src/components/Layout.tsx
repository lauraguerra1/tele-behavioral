import Head from 'next/head';
import React, { ReactNode } from "react";
import Header, { HeaderProps } from './Header';
type LayoutProps = HeaderProps & {
  children: ReactNode
}

const Layout = ({ smallScreen, openOrCloseMenu, menuOpen, updateNavOption, navOption, children }: LayoutProps) => {
  return (
    <>   
    <Head>
      <title>Roxanne Flaherty</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <meta name='description' content='Roxanne Flaherty is a Board Certified Family and Psychiatric Nurse Practitioner, offering a wide range of mental health services.' />
    </Head>
    <main className='flex flex-col'>
      <Header
        smallScreen={smallScreen}
        menuOpen={menuOpen}
        openOrCloseMenu={openOrCloseMenu}
        updateNavOption={updateNavOption}
        navOption={navOption}
      />
      {children}
      <section id='footer' className='font-extralight text-blackish-gray  w-screen h-60 p-5 flex flex-col justify-around'>
        <h2 className='text-5xl text-center'>Roxanne Flaherty</h2>
        <h3 className='text-4xl text-center'>Board Certified Family & Psychiatric Nurse Practitioner</h3>
        <p className='text-xl text-center'>DNP, PMHNP-BC, FNP-C</p>
      </section>
    </main>
    </>
  )
}

export default Layout
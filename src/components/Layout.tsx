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
    <main className='flex flex-col md:max-w-full md:overflow-x-hidden'>
      <Header
        smallScreen={smallScreen}
        menuOpen={menuOpen}
        openOrCloseMenu={openOrCloseMenu}
        updateNavOption={updateNavOption}
        navOption={navOption}
      />
      {children}
    </main>
    </>
  )
}

export default Layout
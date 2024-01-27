import Layout from '@/components/Layout'
import React, { useEffect } from 'react';
import { AppProps } from '@/types';
import Link from 'next/link';

export default function Supplementation({ smallScreen, menuOpen, openOrCloseMenu, updateNavOption, navOption}: AppProps) {
  useEffect(() => {
    const prevNavOption = navOption
    updateNavOption('supplementation')

    return () => updateNavOption(prevNavOption)
  }, [])

  useEffect(() => {
    console.log('render')
  })
  return (
    <Layout
      smallScreen={smallScreen}
      menuOpen={menuOpen}
      openOrCloseMenu={openOrCloseMenu}
      updateNavOption={updateNavOption}
      navOption={navOption}
    >
    <div className='fade-in'>
      <article className='bg-white bg-opacity-50 lg:bg-white'>
          <div className='bg-white flex flex-col pt-[20vh] items-center h-[90vh]'>
            <p className='p-5 text-lg p-0 text-center'>Service description coming soon!</p>
            <p className='p-5 text-lg p-0 text-center'>For now, please browse our other services!</p>
            <Link className='text-center cursor-pointer hover:scale-105 bg-slate-400 px-10 py-5 m-5 text-white text-xl' href='/' onClick={() => updateNavOption('services')}>SELL ALL SERVICES</Link>
          </div>
      </article>
    </div>
    </Layout>
  )
}
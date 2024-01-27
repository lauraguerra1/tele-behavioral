import Layout from '@/components/Layout'
import React, { ReactNode, useEffect,  } from 'react';
import { AppProps } from '@/types';
import Image, { StaticImageData } from 'next/image';
type ServiceImage = { src: StaticImageData, alt: string }

type ServicePageLayoutProps = AppProps & {
  children?: ReactNode, 
  images: { bg: ServiceImage, icon: ServiceImage, article: ServiceImage }, 
  copy: {
    title: string,
    startQuote: string, 
    first: string, 
    second: string, 
    personal: string
  },
  colorOverride?: string
}

export default function ServicePageLayout({ smallScreen, menuOpen, openOrCloseMenu, updateNavOption, navOption, children, images, copy, colorOverride}: ServicePageLayoutProps) {
  useEffect(() => {
    const prevNavOption = navOption
    updateNavOption(copy.title)

    return () => updateNavOption(prevNavOption)
  }, [])
  return (
    <Layout
      smallScreen={smallScreen}
      menuOpen={menuOpen}
      openOrCloseMenu={openOrCloseMenu}
      updateNavOption={updateNavOption}
      navOption={navOption}
    >
    <div className='fade-in'>
      <div className='relative flex justify-center items-center w-screen h-48 bg-white bg-opacity-50'>
        <Image src={images.bg.src} className='w-screen  h-48 max-w-[1300px] object-cover' alt={images.bg.alt} /> 
          <h2 className='absolute text-center text-3xl md:text-5xl font-bold text-white'>{copy.title}</h2>
      </div>
      <article className='bg-white bg-opacity-50 lg:bg-white'>
        <div className='flex flex-col lg:grid grid-cols-2'>
          <div className='bg-white h-full flex flex-col justify-center'>
            <h3 className='p-5 text-xl text-center font-extrabold'>{copy.startQuote}</h3>
            <p className='p-5 text-lg'>{copy.first}</p>
          </div>
          <div className='bg-white hidden lg:flex flex-col justify-center items-center p-5'>
              <div className={`${colorOverride ?? 'bg-slate-100'} w-full h-full m-10 p-5 rounded-md flex items-center justify-center`}> 
              <Image className='h-48 w-auto' src={images.icon.src} alt={images.icon.alt}/>
            </div>
          </div>
          <div className='bg-white flex justify-center items-center p-5'>
            <Image src={images.article.src} alt={images.article.alt} className='rounded-md w-screen h-auto sm:h-72 sm:w-full object-cover' />
            </div>
            <div className='bg-white h-full flex flex-col justify-center'>
              <p className='p-5 text-lg bg-white'>{copy.second}</p>
            </div>
          </div>
          {children ? children : ''}
          <div className='bg-slate-100 bg-opacity-50 lg:hidden w-screen h-auto flex flex-col justify-center items-center p-5'>
            <Image className='h-48 w-auto' src={images.icon.src} alt={images.icon.alt} />
          </div>
          <div className='flex flex-col p-2 bg-white p-5'>
            <p className='italic text-lg p-5 pb-2'>&quot;{copy.personal}&quot;</p>
            <p className='text-2xl p-5 pb-0'>ROXANNE FLAHERTY</p>
            <p className='text-xl p-5 pt-0'>DNP, PMHNP-BC, FNP-C</p>
          </div>
      </article>
    </div>
    </Layout>
  )
}

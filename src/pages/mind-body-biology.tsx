import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react';
import { AppProps } from '@/types';
import waves from '../images/waves.gif';
import biology from '../images/biology.png'
import Image from 'next/image';
import meditating from '../images/meditating.png';

export default function MindBody({ smallScreen, menuOpen, openOrCloseMenu, updateNavOption, navOption}: AppProps) {
  useEffect(() => {
    const prevNavOption = navOption
    updateNavOption('sprituality')

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
        <Image src={waves} className='w-screen  h-48 max-w-[1300px] object-cover' alt='video of sunrays in a forest' /> 
        <h2 className='absolute text-center text-5xl font-bold text-white'>MIND, BODY & BIOLOGY</h2>
      </div>
      <article className='bg-white bg-opacity-50 lg:bg-white'>
        <div className='flex flex-col lg:grid grid-cols-2'>
          <div className='bg-white'>
            <h3 className='p-5 text-xl text-center font-extrabold'>The connection between mind, body and biology  has been a topic of extensive study in the field of science.</h3>
            <p className='p-5 text-lg'>Scientists have found that the mind and body are intricately interconnected, with each having a profound influence on the other. The mind, which encompasses thoughts, emotions, and consciousness, plays a crucial role in shaping an individual's well-being and overall health. Moreover, research has shown that biological factors, such as genetics and neurochemical processes, can significantly impact mental processes and emotions. This bidirectional relationship between the mind and body forms the basis of understanding the connection between mind, body, and biology.</p>
          </div>
          <div className='bg-white hidden lg:flex flex-col justify-center items-center p-5'>
            <div className='bg-cyan-900 bg-opacity-10 w-full h-full m-10 p-5 rounded-md flex items-center justify-center'> 
              <Image className='h-48 w-auto' src={biology} alt='icon of a person meditating' />
            </div>
          </div>
          <div className='bg-white flex justify-center items-center p-5'>
            <Image src={meditating} alt='woman meditating with a view of palm trees' className='rounded-md w-screen h-auto sm:h-72 sm:w-full object-cover' />
          </div>
          <p className='p-5 text-lg bg-white'>Numerous studies have demonstrated the influence of the mind on the body's physical health. Positive thoughts, meditating, and relaxation techniques have been found to promote well-being and enhance the body's ability to heal itself. Conversely, negative emotions and stress can have detrimental effects on the body, leading to increased susceptibility to illnesses and a weakened immune system. Furthermore, the mind's perception of pain has been proven to affect the body's response to pain signals, with psychological factors influencing pain tolerance and pain management.</p>
          </div>
          <p className='p-5 text-lg bg-white'>On the other hand, the field of biology provides insights into how the body's biological processes impact mental states and cognitive function. Neurotransmitters, hormones, and other biochemical substances play a crucial role in regulating mood, emotions, and behaviors. Imbalances in these biochemical processes have been linked to mental health disorders such as depression and anxiety. Additionally, genetic factors have been shown to contribute to the risk of developing certain mental illnesses, further highlighting the biological basis of the mind-body connection.</p>
          <div className='bg-slate-100 bg-opacity-50 lg:hidden w-screen h-auto flex flex-col justify-center items-center p-5'>
            <Image className='h-48 w-auto' src={biology} alt='icon of a person meditating' />
          </div>
          <div className='flex flex-col p-2 bg-white p-5'>
            <p className='italic text-lg p-5 pb-2'>&quot;The integration of psychological and biological perspectives can lead to more effective treatments for mental health disorders and overall well-being. By recognizing the profound influence of the mind on the body and vice versa, in collaboration with my patients, together we can make informed choices to optimize both your mental and physical health. Understanding the interplay between biological factors such as genetics and neurochemistry, as well as psychological factors such as thoughts, emotions, and behaviors, allows for a comprehensive approach to treatment. By addressing both the physical and mental aspects of health, we can work towards achieving long-term well-being and improved quality of life.&quot;</p>
            <p className='text-2xl p-5 pb-0'>ROXANNE FLAHERTY</p>
            <p className='text-xl p-5 pt-0'>DNP, PMHNP-BC, FNP-C</p>
          </div>

      </article>
    </div>
    </Layout>
  )
}
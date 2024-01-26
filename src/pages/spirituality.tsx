import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react';
import { AppProps } from '@/types';
import spirituality from '../images/spirituality.gif';
import spritualityImg from '../images/spirituality.png'
import Image from 'next/image';
import meditation from '../images/meditation.png';

export default function Spirtuality({ smallScreen, menuOpen, openOrCloseMenu, updateNavOption, navOption}: AppProps) {
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
        <Image src={spirituality} className='w-screen  h-48 max-w-[1300px] object-cover' alt='video of a woman practicing yoga on a mountain top' /> 
        <h2 className='absolute text-center text-5xl font-bold text-white'>SPIRITUALITY</h2>
      </div>
      <article className='bg-white bg-opacity-50 lg:bg-white'>
        <div className='flex flex-col lg:grid grid-cols-2'>
          <div className='bg-white'>
            <h3 className='p-5 text-xl text-center font-extrabold'>Is spirituality important to mental health? </h3>
            <p className='p-5 text-lg'>Spirituality refers to an individual's personal belief system and connection to something greater than themselves. It is a concept that is often associated with religion, but it can also exist outside of organized religious practices. Spirituality can encompass a variety of beliefs and practices, such as meditation, prayer, and mindfulness. For many people, spirituality provides a sense of purpose, meaning, and connection to the world around them. It can offer a way to find inner peace, reflect on one's values and beliefs, and seek guidance. Some people may find spirituality through engagement with nature, while others may find it through religious teachings or spiritual communities. Ultimately, spirituality is a deeply personal and individual journey that can have profound effects on one's well-being and sense of fulfillment.</p>
          </div>
          <div className='bg-white hidden lg:flex flex-col justify-center items-center p-5'>
            <div className='bg-slate-100 w-full h-full m-10 p-5 rounded-md flex items-center justify-center'> 
              <Image className='h-48 w-auto' src={spritualityImg} alt='icon of a person meditating' />
            </div>
          </div>
          <div className='bg-white flex justify-center items-center p-5'>
            <Image src={meditation} alt='woman sitting on a bench and looking at the sunset over the horizon of the mountain tops' className='rounded-md w-screen h-auto sm:h-72 sm:w-full object-cover' />
          </div>
          <p className='p-5 text-lg bg-white'>Whether someone is coping with cancer or clinical depression, spiritual exercises help them increase acceptance, decrease negative emotions, find meaning, and deepen their relationships with others. Spirituality can help address issues such as poor self-esteem, low confidence, lack of self-control, and fear of daily tasks and challenges. For this reason, it can be a helpful extension to mental health treatment plans. It can also simply be a way of keeping mental health strong. Even people who do not practice a religion can take comfort in spirituality, given it is a prevalent concept among secular communities (people who have rejected religion as a guide for living and who believe in science, reason and a moral code). Individuals who have never learned to draw upon spiritual resources can learn to do so quite easily.</p>
          </div>
          <div className='bg-slate-100 bg-opacity-50 lg:hidden w-screen h-auto flex flex-col justify-center items-center p-5'>
            <Image className='h-48 w-auto' src={spritualityImg} alt='icon of a person meditating' />
          </div>
          <div className='flex flex-col p-2 bg-white p-5'>
            <p className='italic text-lg p-5 pb-2'>&quot;In this passage, I want to highlight the significance of respecting patients' choices and circumstances, including their religious and political beliefs. I strongly believe that healthcare professionals should not impose their personal agendas regarding religion and should refrain from passing judgment. Throughout my career, I have never encountered any conflicts with patients based on religion. These choices and circumstances are deeply personal and subjective, and it is not my place to make any judgments about them. I am more than willing to explore and discuss your personal beliefs, lack of beliefs, and/or the importance that your beliefs hold in your life. My main objective is to always prioritize the well-being and needs of my patients.&quot;</p>
            <p className='text-2xl p-5 pb-0'>ROXANNE FLAHERTY</p>
            <p className='text-xl p-5 pt-0'>DNP, PMHNP-BC, FNP-C</p>
          </div>

      </article>
    </div>
    </Layout>
  )
}

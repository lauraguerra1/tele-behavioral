import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react';
import { AppProps } from '@/types';
import spirituality from '../images/spirituality.gif';
import Image from 'next/image';

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
      <div className='relative flex justify-center items-center w-screen h-48 bg-slate-400 bg-opacity-20'>
        <Image src={spirituality} className='w-screen  h-48 max-w-[1200px] object-cover' alt='video of sunrays in a forest' /> 
        <h2 className='absolute text-center text-3xl font-bold text-white'>SPIRITUALITY</h2>
      </div>
      <article className='bg-white'>
        <p className='m-5 text-lg'>Is spirituality important to mental health? Spirituality refers to an individual's personal belief system and connection to something greater than themselves. It is a concept that is often associated with religion, but it can also exist outside of organized religious practices. Spirituality can encompass a variety of beliefs and practices, such as meditation, prayer, and mindfulness. For many people, spirituality provides a sense of purpose, meaning, and connection to the world around them. It can offer a way to find inner peace, reflect on one's values and beliefs, and seek guidance. Some people may find spirituality through engagement with nature, while others may find it through religious teachings or spiritual communities. Ultimately, spirituality is a deeply personal and individual journey that can have profound effects on one's well-being and sense of fulfillment.</p>
        <p className='m-5 text-lg'>Whether someone is coping with cancer or clinical depression, spiritual exercises help them increase acceptance, decrease negative emotions, find meaning, and deepen their relationships with others. Spirituality can help address issues such as poor self-esteem, low confidence, lack of self-control, and fear of daily tasks and challenges. For this reason, it can be a helpful extension to mental health treatment plans. It can also simply be a way of keeping mental health strong. Even people who do not practice a religion can take comfort in spirituality, given it is a prevalent concept among secular communities (people who have rejected religion as a guide for living and who believe in science, reason and a moral code). Individuals who have never learned to draw upon spiritual resources can learn to do so quite easily.</p>
        <p className='italic m-5 mt-10 playfair'>In this passage, I want to highlight the significance of respecting patients' choices and circumstances, including their religious and political beliefs. I strongly believe that healthcare professionals should not impose their personal agendas regarding religion and should refrain from passing judgment. Throughout my career, I have never encountered any conflicts with patients based on religion. These choices and circumstances are deeply personal and subjective, and it is not my place to make any judgments about them. I am more than willing to explore and discuss your personal beliefs, lack of beliefs, and/or the importance that your beliefs hold in your life. My main objective is to always prioritize the well-being and needs of my patients, without allowing my own biases to interfere with the care I provide.</p>
      </article>
    </Layout>
  )
}

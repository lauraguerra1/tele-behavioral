import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react';
import { AppProps } from '@/types';
import Header from '@/components/Header';

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
      <p>spirituality</p>
    </Layout>
  )
}

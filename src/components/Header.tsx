import { AppProps } from "@/types";
import NavBar, { NavBarProps } from "./NavBar";
import Image from "next/image";
import menuBtn from '../images/icons/menu.png';
import closeBtn from '../images/icons/close.png';
import { ReactNode } from "react";

export type HeaderProps = AppProps & NavBarProps
const Header = ({ smallScreen, openOrCloseMenu, menuOpen, updateNavOption, navOption }: HeaderProps) => {
  return (
    <header id='nav' className='w-screen bg-white sticky top-0 z-50 border-b-4 border-great-gray p-5'>
        <div className='flex justify-between items-center'>
          <h1 className={`flex-1 text-5xl ${smallScreen ? '' : 'text-center'} text-blackish-gray`}>ROXANNE FLAHERTY</h1>
          {smallScreen && <button onClick={openOrCloseMenu} id='menuBtn' className='ml-2'><Image src={menuOpen ? closeBtn : menuBtn} alt={`${menuOpen? 'close' : 'open'} menu button`}/></button>}
        </div>
        {(!smallScreen || menuOpen) && <NavBar updateNavOption={updateNavOption} navOption={navOption} />}
      </header>
  )
}

export default Header
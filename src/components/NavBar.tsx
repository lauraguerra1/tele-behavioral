import Link from "next/link"
import { useState } from "react"

const NavBar = ({navOption, updateNavOption}: {navOption: string, updateNavOption: (option: string) => void }) => {
  
  const scrollTo = (option: string) => {
    const itemToScroll = document.querySelector(`#${option}`)
    const scrollPosition = itemToScroll!.getBoundingClientRect().top - 150;
    window.scrollBy({
      top: scrollPosition,
      left: 0,
      behavior: 'smooth'
    })
    updateNavOption(option)
  }
  const navEls = ['home', 'philosophy', 'services', 'contact'].map(option => {
    return <button className={`${navOption === option ? 'text-gray-400' : 'text-black'} mx-5`}  key={`nav${option}`} onClick={() => scrollTo(option)}>{option.toUpperCase()}</button>
  })

  return (
    <nav id='navBar' className='flex justify-center mt-5 text-xs'>
      {navEls}
    </nav>
  )
}

export default NavBar
import { useRouter } from "next/router";
import { scrollTo } from "@/utils/helpers";

export type NavBarProps = {
  navOption: string,
  updateNavOption: (option: string) => void, 
}

const NavBar = ({navOption, updateNavOption}: NavBarProps) => {
  const router = useRouter();
  const navigate = (option: string) => {
    if (option === 'blog') {
      router.push('/blog')
    } else if (router.asPath === '/'){
      scrollTo(option)
    }
    updateNavOption(option)
  }

  const navEls = ['home', 'philosophy', 'services', 'contact', 'blog'].map(option => {
    return <button className={`${navOption === option ? 'text-gray-400' : 'text-black'} mx-5`} key={`nav${option}`} onClick={() => {navigate(option)}}>{option.toUpperCase()}</button>
  })

  return (
    <nav id='navBar' className={`flex justify-center mt-5 text-xs`}>
      {navEls}
    </nav>
  )
}

export default NavBar
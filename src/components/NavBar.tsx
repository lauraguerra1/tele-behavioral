import { useRouter } from "next/router";
import { scrollTo } from "@/utils/helpers";

export type NavBarProps = {
  navOption: string,
  updateNavOption: (option: string) => void, 
  shown: boolean
}

const NavBar = ({navOption, updateNavOption, shown}: NavBarProps) => {
  const router = useRouter();
  const navigate = (option: string) => {
    if (option === 'blog') {
      router.push('/blog')
    } else if (router.asPath === '/'){
      scrollTo(option)
    } else {
      updateNavOption(option)
    }
  }

  const navEls = ['home', 'philosophy', 'services', 'contact'].map(option => {
    return <button className={`${navOption === option ? 'text-gray-400' : 'text-black'} mx-5`} key={`nav${option}`} onClick={() => {navigate(option)}}>{option.toUpperCase()}</button>
  })

  return (
    <nav id='navBar' className={`justify-center mt-5 text-xs ${shown ? 'flex' : 'hidden'}`}>
      {navEls}
    </nav>
  )
}

export default NavBar
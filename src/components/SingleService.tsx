import Link from "next/link"
import mentalhealth from '../images/mentalhealth.png'
import Image from "next/image";
import supplements from '../images/supplements.png';
import integrative from '../images/integrative.png';
import lifestyle from '../images/lifestyle.png';
import biology from '../images/biology.png';
import spirituality from '../images/spirituality.png';


const images = [mentalhealth, integrative, lifestyle, supplements, biology, spirituality]

const SingleService = ({ name, index, link }: { name: string, index: number, link: string}) => {

  return (
    <Link href={`/${link}`} className={`${index === 5 ? 'no-border' : ''} hover:scale-105 cursor-pointer group bg-slate-200 bg-opacity-60 single-service p-10 w-full flex flex-col items-center justify-center justify-self-center`}>
      <div className='icon-service-wrapper flex flex-col items-center justify-center'>
        <Image alt='brain icon' src={images[index]} className="h-24 w-auto" />
        <h3 className="text-lg md:text-xl mt-3 font-extralight px-5">{name.toUpperCase()}</h3>
      </div>
      <div className='arrow hidden flex items-center justify-center transition-transform transform-gpu group-hover:translate-x-[1rem] group-hover:scale-105'>
        <svg xmlns="http://www.w3.org/2000/svg" width="63" height="16" viewBox="0 0 63 16" fill="none">
          <path d="M62.7071 8.70711C63.0976 8.31658 63.0976 7.68342 62.7071 7.29289L56.3431 0.928932C55.9526 0.538408 55.3195 0.538408 54.9289 0.928932C54.5384 1.31946 54.5384 1.95262 54.9289 2.34315L60.5858 8L54.9289 13.6569C54.5384 14.0474 54.5384 14.6805 54.9289 15.0711C55.3195 15.4616 55.9526 15.4616 56.3431 15.0711L62.7071 8.70711ZM0 9H62V7H0L0 9Z" fill="black"/>
        </svg>
      </div>
    </Link>
  )
}

export default SingleService
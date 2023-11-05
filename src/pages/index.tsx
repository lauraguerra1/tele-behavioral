import Image from 'next/image'
import { Inter } from 'next/font/google'
import Form from '@/components/Form'
import gradient from '../images/gradient.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div id='contact' className='relative'>
        <div className='z-10 flex'>
          <article className='text-white'>
            <h2>GET IN TOUCH</h2>
            <div className='flex'>
              <div className='border-r-1 border-white pr-2'>
                <p>123 Address Street</p>
                <p>Los Angeles, CA 90066</p>
                <a href='www.tele-behavioral.com' target='_blank'>tele-behavioral.com</a>
              </div>
              <div className='pl-2'>
                <p>Tel: 123-456-7890</p>
                <p>Email: roxanne@conciergeaprn.com</p>
              </div>
            </div>
          </article>
          <Form/>
        </div>
      </div>
    </main>
  )
}

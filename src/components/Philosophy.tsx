import Image from "next/image";
import roxanne from '../images/roxanne.png';

const Philosophy = () => {
  return (
    <div id='philWrapper' className='flex justify-center'>
      <div className='phil-section top-phil w-1/4 flex flex-col justify-between mr-10'>
        <h2 className='text-4xl mb-10'>INTEGRATIVE MEDICINE</h2>
        <Image src={roxanne} alt='profile photo of Roxanne Flaherty' className='rounded-full h-40 w-40 mb-20' />
      </div>
      <div className='phil-section w-1/2 ml-10'>
        <p>Bio coming soon!</p>
        <p className='italic mt-20 playfair'>&quot;When you touch one thing with deep awareness, <br />you touch everything.&quot;</p>
        <p className='playfair'>- Lao Tzu</p>
      </div>
    </div>
  )
}

export default Philosophy
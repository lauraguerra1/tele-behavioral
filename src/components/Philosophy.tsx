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
        <p>Im a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click Edit Text or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. Im a great place for you to tell a story and let your users know a little more about you. <br /> <br /> This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
        <p className='italic mt-20 playfair'>&quot;When you touch one thing with deep awareness, <br />you touch everything.&quot;</p>
        <p className='playfair'>- Lao Tzu</p>
      </div>
    </div>
  )
}

export default Philosophy
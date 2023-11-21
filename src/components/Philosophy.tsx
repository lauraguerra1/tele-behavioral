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
        <p>Roxanne Flaherty, DNP, PMHNP-BC, FNP-C. is a dually board certified and doctorally prepared Psychiatric and Family Medicine Nurse Practitioner who specializes in  psychiatric evaluations, medication management and therapeutic support of patients diagnosed with (but not limited to) Depression, Anxiety, ADHD, Insomnia, PTSD and other mood disorders. Over the course of her 20-year career in medicine, Dr. Flaherty has had the privilege of working in many practice settings including addiction, primary care, post-surgical and trauma in addition to administrative duties which included precepting, supervising  and educating other nurses and healthcare professionals. She takes a collaborative approach to care encouraging her patients to seek support from individual psychotherapists, support groups and other mental health clinicians while encouraging patients to implement important lifestyle changes such as a healthy diet, exercise, meditation, social connections and mindfulness training, &quot;the best care is when we collectively share perspectives and responsibility in meeting the needs of our patients.&quot;</p>
        <p className='italic mt-20 playfair'>&quot;When you touch one thing with deep awareness, <br />you touch everything.&quot;</p>
        <p className='playfair'>- Lao Tzu</p>
      </div>
    </div>
  )
}

export default Philosophy
import Image from 'next/image';
import roxanne from '../images/roxanne.jpg';

const Philosophy = () => {
  return (
    <div id='philWrapper' className='flex justify-center'>
      <div className='phil-section top-phil w-1/4 flex flex-col justify-between mr-10'>
        <h2 className='text-4xl mb-10'>INTEGRATIVE MEDICINE</h2>
        <Image src={roxanne} alt='profile photo of Roxanne Flaherty' className='rounded-full h-40 w-40 md:h-52 md:w-52 mb-20 object-cover' />
      </div>
      <div className='phil-section w-1/2 ml-10'>
        <p>Dr. Roxanne Flaherty, DNP, PMHNP-BC, FNP-C. is a dually board certified and doctorally prepared Psychiatric and Family Medicine Nurse Practitioner who specializes in  psychiatric evaluations, medication management and therapeutic support of patients diagnosed with (but not limited to) Depression, Anxiety, ADHD, Insomnia, PTSD and other mood disorders. Over the course of her 20-year career in medicine, Dr. Flaherty has had the privilege of working in many practice settings including addiction, primary care, post-surgical and trauma in addition to administrative duties which included precepting, supervising  and educating other nurses and healthcare professionals. She takes a collaborative approach to care encouraging her patients to seek support from individual psychotherapists, support groups and other mental health clinicians while encouraging patients to implement important lifestyle changes such as a healthy diet, exercise, meditation, social connections and mindfulness training, &quot;the best care is when we collectively share perspectives and responsibility in meeting the needs of our patients.&quot;</p>
        <p className='italic mt-5' >As a PMHNP, I am fortunate to encounter the rewarding and humbling aspects of assisting others. I view it as a tremendous honor to offer guidance and encouragement to individuals during their most difficult times. As beautifully expressed by Albert Pine, the impact of our actions on ourselves fades away with time. However, the positive influence we have on others and the world endures eternally, becoming a timeless legacy.</p>
        <p className='italic mt-10 playfair'>&quot;What we have done for ourselves dies with us.<br /> What we have done for others and the world remains and is immortal.&quot;</p>
        <p className='playfair'> -Albert Pine </p>
      </div>
    </div>
  );
};

export default Philosophy;

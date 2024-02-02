import Form from './Form';

const ContactCard = () => {
  return (
    <article className='text-white flex flex-col justify-around mb-15 mr-5'>
      <h2 className='text-6xl'>GET IN TOUCH</h2>
      <div id='contactInfo' className='flex flex-col'>
        <section className='flex'>
          <div className='h-20 pr-5 border-r-1 border-white flex flex-col justify-center my-5'>
            <p>States servicing:</p>
            <p>CA*</p>
          </div>
          <div className='h-20 pl-5 flex flex-col justify-center break-words my-5'>
            <p>Tel: 323-433-9935</p>
            <p>Email: admin@roxanneflaherty.com</p>
          </div>
        </section>
        <p>
          Address: <br /> 11400 West Olympic Blvd Suite 200 <br /> Los Angeles, CA 90064
        </p>
        <p className='mt-2 italic'>*Services coming soon in FL, NY & WA</p>
      </div>
      <div className='flex flex-col md:flex-row my-4 self-start'>
        <a id='linkedInDesktop' className='self-start bg-sandy text-gray-700 text-center w-32 py-2 my-1 md:mr-2' href='https://www.linkedin.com/in/roxanne-flaherty-881908298/' target='_blank'>
          Visit LinkedIn
        </a>
        <a className='self-start bg-sandy text-gray-700 text-center w-32 py-2 my-1 md:ml-2' href='https://secure.helloalma.com/providers/roxanne-flaherty/' target='_blank'>
          Visit Alma
        </a>
      </div>
      {/* <a id='linkedInDesktop' className='self-start bg-sandy text-gray-700 text-center w-32 py-2 my-2' href='https://www.linkedin.com/in/roxanne-flaherty-881908298/' target='_blank'>
        Visit LinkedIn
      </a>
      <a className='self-start bg-sandy text-gray-700 text-center w-32 py-2 my-2' href='https://secure.helloalma.com/providers/roxanne-flaherty/' target='_blank'>
        Visit Alma
      </a> */}
    </article>
  );
};

export default ContactCard;

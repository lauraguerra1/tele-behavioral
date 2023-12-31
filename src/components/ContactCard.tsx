import Form from "./Form"

const ContactCard = () => {
  return (
    <article className='text-white flex flex-col justify-around mb-15 mr-5'>
      <h2 className='text-6xl'>GET IN TOUCH</h2>
      <div id='contactInfo' className='flex'>
        <div className='h-20 border-r-1 border-white pr-5 flex flex-col justify-center my-5'>
          <p>States servicing:</p>
          <p>CA, NY, FL & IL</p>
        </div>
        <div className='h-20 pl-5 flex flex-col justify-center break-words my-5'>
          <p>Tel: 323-433-9935</p>
          <p>Email: admin@roxanneflaherty.com</p>
        </div>
    </div>
    <a id='linkedInDesktop' className='bg-sandy text-gray-700 px-4 my-4 py-2 self-start' href='https://www.linkedin.com/in/roxanne-flaherty-881908298/' target='_blank'>Visit LinkedIn</a>
  </article>
  )
}

export default ContactCard
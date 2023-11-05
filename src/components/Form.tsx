import { useState } from "react"
type Submission = {
  name: string, 
  email: string, 
  subject: string,
  message: string
}

const Form = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState<Submission>({
    name: '', 
    email: '', 
    subject: '',
    message: ''
  })

  const inputChange = (field:string, input: string) => {
    setFormData(prev => ({
      ...prev, 
      [field]: input
    }))
  }

  const formInputs = Object.keys(formData).map(field => {
    return (
      <div key={field} className={`${field === 'message' || field === 'subject' ? 'col-span-2 flex-col' : ''} flex border-b-1 border-white`}>
        <label className='pr-2' htmlFor={field}>{`${field.charAt(0).toUpperCase()}${field.slice(1)}${field !== 'subject' ? '*' : ''}`}</label>
        {field !== 'message'
          ? <input className='focus:outline-none bg-transparent' type='text' id={field} name={field} onChange={(e) => inputChange(e.target.name, e.target.value)} required={field !== 'subject'} />
          : <textarea  className='focus:outline-none bg-transparent h-32 resize-none' id={field} name={field} onChange={(e) => inputChange(e.target.name, e.target.value)} required/>}
      </div>
    )
  })

  return (
    <form className='grid grid-cols-2 gap-4 text-white mt-10'>
      {formInputs}
      <button className="col-span-2">Send</button>
      <p className={`text-center col-span-2 h-10 ${success? 'text-gray-700' : error ? 'text-red-700' : ''}`}>{success ? 'Success! Message sent.' : error ? 'Whoops! Something went wrong. Please try again.' : ''}</p>
    </form>
  )
}

export default Form
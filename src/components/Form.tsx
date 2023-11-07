import { FormEvent, useEffect, useState } from "react"
type Indexable = {
  [index:string]: string
}

type Submission = Indexable & {
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

  useEffect(() => {

    return resetFeedback
  },[])

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      //await api call work here 
      console.log({ ...formData, subject: `Tele Behavioral${formData.subject.length ? ': ' + formData.subject : ' Contact Request'}` })
      setSuccess(true)
      setFormData({
        name: '', 
        email: '', 
        subject: '',
        message: ''
      })
    } catch (error) {
      setError(true)
    }
  }

  const resetFeedback = () => {
    setError(false)
    setSuccess(false)
  }

  const changeInput = (field:string, input: string) => {
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
          ? <input className='focus:outline-none bg-transparent' type={field === 'email' ? 'email' : 'text'} id={field} name={field} onChange={(e) => changeInput(e.target.name, e.target.value)} onFocus={resetFeedback} value={formData[field]} required={field !== 'subject'} />
          : <textarea className='focus:outline-none bg-transparent h-32 resize-none' id={field} name={field} onChange={(e) => changeInput(e.target.name, e.target.value)} onFocus={resetFeedback} value={formData[field]} required/>}
      </div>
    )
  })

  return (
    <form onSubmit={submitForm} className='grid grid-cols-2 gap-4 text-white mt-10'>
      {formInputs}
      <button className="col-span-2">Send</button>
      <p className={`text-center col-span-2 h-10 ${success? 'text-gray-700' : error ? 'text-red-700' : ''}`}>{success ? 'Success! Message sent.' : error ? 'Whoops! Something went wrong. Please try again.' : ''}</p>
    </form>
  )
}

export default Form
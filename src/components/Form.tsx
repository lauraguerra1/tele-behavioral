import { FormEvent, useEffect, useState } from 'react';
import { Submission } from '@/types';
import { sendEmail } from '@/utils/apiCalls';

const Form = () => {
  const freshForm: Submission = {
    name: '',
    email: '',
    subject: '',
    message: '',
    botCatcher: '',
  };
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState<Submission>(freshForm);
  const [sending, setSending] = useState(false);
  const [recpatchaReady, setRecaptchaReady] = useState(false);

  useEffect(() => resetFeedback, []);
  useEffect(() => {
    grecaptcha.ready(async () => {
      setRecaptchaReady(true);
    });
  }, []);

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.botCatcher) {
      const { botCatcher, ...remainingFields } = formData;
      setSending(true);
      try {
        if (!recpatchaReady) {
          throw new Error('Recaptcha Not Yet Ready');
        }
        const token = await grecaptcha.execute('6Ldq7PMrAAAAAAO-LzhnxQ2U4vhkCcFYLO4pEkp1', { action: 'CONTACT' });
        await sendEmail({ ...remainingFields, subject: `Patient Inquiry${formData.subject.length ? ': ' + formData.subject : ''}`, reCaptchaToken: token });
        setSuccess(true);
        setFormData(freshForm);
      } catch (error) {
        setError(true);
      }
      setSending(false);
    } else {
      setError(true);
    }
  };

  const resetFeedback = () => {
    setError(false);
    setSuccess(false);
  };

  const changeInput = (field: string, input: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: input,
    }));
  };

  const formInputs = Object.keys(formData).map((field) => {
    if (field === `botCatcher`) {
      return <input key='botCatcher' type='text' name='phone' style={{ display: `none` }} value={formData.botCatcher} onChange={(e) => changeInput('botCatcher', e.target.value)} autoComplete='off' tabIndex={-1} />;
    }
    return (
      <div key={field} className={`${field === 'message' || field === 'subject' ? 'col-span-2 flex-col' : ''} flex border-b-1 border-white ${field}-container`}>
        <label className='pr-2' htmlFor={field}>{`${field.charAt(0).toUpperCase()}${field.slice(1)}${field !== 'subject' ? '*' : ''}`}</label>
        {field !== 'message' ? <input className='focus:outline-none bg-transparent flex-1' type={field === 'email' ? 'email' : 'text'} id={field} name={field} onChange={(e) => changeInput(e.target.name, e.target.value)} onFocus={resetFeedback} value={formData[field]} required={field !== 'subject'} /> : <textarea className='focus:outline-none bg-transparent h-32 resize-none' id={field} name={field} onChange={(e) => changeInput(e.target.name, e.target.value)} onFocus={resetFeedback} value={formData[field]} required />}
      </div>
    );
  });
  return (
    <form onSubmit={submitForm} className='grid grid-cols-2 gap-4 text-white mt-10'>
      {formInputs}
      {sending ? <p className='italic text-center col-span-2'>Sending, please wait...</p> : <button className='col-span-2'>Send</button>}
      <p className={`text-center col-span-2 h-10 ${success ? 'text-gray-700' : error ? 'text-red-700' : ''}`}>{success ? 'Success! Message sent.' : error ? 'Whoops! Something went wrong. Please try again.' : ''}</p>
    </form>
  );
};

export default Form;

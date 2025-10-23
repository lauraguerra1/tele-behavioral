import { Submission } from "../types";
const handleError = (response: Response) => {
  if (!response.ok) {
    throw new Error(`Error: ${response.status} -- Please try again.`)
  }
  return response.json()
}
export const sendEmail = async (form: Omit<Submission, 'botCatcher'>) => {
  try {
    const response = await fetch('/api/mail', {
      method: "POST", 
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await handleError(response)
    return data
  } catch (error) {
    throw error
  }
}
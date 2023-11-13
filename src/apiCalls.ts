import { Submission } from "./types";
const handleError = (response: Response) => {
  if (!response.ok) {
    throw new Error(`Error: ${response.status} -- Please try again.`)
  }
  return response.json()
}
export const sendEmail = async (form: Submission) => {
  const response = await fetch('/api/mail')
  const data = await handleError(response)
  return data
}
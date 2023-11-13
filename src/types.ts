type Indexable = {
  [index:string]: string
}

export type Submission = Indexable & {
  name: string, 
  email: string, 
  subject: string,
  message: string
}
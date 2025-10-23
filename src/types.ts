import { MutableRefObject } from "react"

type Indexable = {
  [index:string]: string
}

export type Submission = Indexable & {
  name: string, 
  email: string, 
  subject: string,
  message: string, 
  botCatcher: string
}

export type AppProps = {
  smallScreen: boolean,
  menuOpen: boolean,
  openOrCloseMenu: () => void,
  navOption: string,
  updateNavOption: (option: string) => void, 
}
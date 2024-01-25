import { MutableRefObject } from "react"

type Indexable = {
  [index:string]: string
}

export type Submission = Indexable & {
  name: string, 
  email: string, 
  subject: string,
  message: string
}

export type AppProps = {
  smallScreen: boolean,
  menuOpen: boolean,
  navOption: string,
  sectionRefs: {
    home: MutableRefObject<null>;
    philosophy: MutableRefObject<null>;
    services: MutableRefObject<null>;
    contact: MutableRefObject<null>;
  },
  openOrCloseMenu: () => void,
  updateNavOption: (option: string) => void,
}
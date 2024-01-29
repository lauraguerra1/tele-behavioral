import Layout from "@/components/Layout"
import { AppProps } from "@/types"

const Disclaimers = ({smallScreen, menuOpen, openOrCloseMenu, updateNavOption, navOption}: AppProps) => {
  return (
    <Layout smallScreen={smallScreen} menuOpen={menuOpen} openOrCloseMenu={openOrCloseMenu} updateNavOption={updateNavOption} navOption={navOption}>
      <div className="bg-white flex flex-col items-center pt-10 h-screen px-5">
        <h2 className='text-center underline text-xl pt-10'>MEDICAL DISCLAIMER</h2>
        <p className=' text-center pt-5'>While I am a licensed healthcare provider, I am not your healthcare provider. All content and information on this website is for informational, marketing and educational purposes only and does not constitute medical advice. Use of this website does not establish any kind of patient-client relationship. A patient-client relationship is only formed after we have expressly entered into a written agreement that you have signed including a fee structure and other terms and conditions that represent you in a specific matter. While we strive to provide accurate general information, the information. here is not a substitute for any kind of professional advice, and you should not rely solely on this information. Always consult a professional in the area for your particular needs and circumstances prior to making any professional, legal, medical and financial or tax-related decisions. </p>
        <h2 className='text-center underline text-xl pt-10'>COPYRIGHT NOTICE</h2>
        <p className='text-center pt-5'>This website, including any audio, visual or written materials is the property of Roxanne Flaherty and is protected by copyright laws. Infringement of these rights may result in legal action under laws, as well as other potential penalties.</p>
      </div>
    </Layout>
  )
}

export default Disclaimers
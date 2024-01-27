import Layout from '@/components/Layout'
import React, { useEffect } from 'react';
import { AppProps } from '@/types';
import supplementsIcon from '../images/supplements.png';
import herbaltea from '../images/herbaltea.jpg';
import garden from '../images/garden.gif';
import Link from 'next/link';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function Supplementation(pageProps: AppProps) {
  return (
    <ServicePageLayout
      {...pageProps}
      colorOverride='bg-violet-200 bg-opacity-20'
      images={{
        bg: { src: garden, alt: 'video of a woman walking through a garden of pink flowers' },
        icon: { src: supplementsIcon, alt: 'icon of a supllment bottle next to a plant' },
        article: { src: herbaltea, alt: 'herbal tea' },
      }}
      copy={{
        title: 'SUPPLEMENTATION',
        startQuote: 'What role do dietary supplements play in mental health?',
        first: "Certain dietary supplements have displayed promise in reducing the symptoms of anxiety and depression. Omega-3 fatty acids have exhibited the potential to positively impact mental well-being by regulating neurotransmitters and supporting optimal brain function. The American Psychiatric Association strongly advises that all individuals in the United States, regardless of age or gender, should regularly consume fish, specifically fatty fish like salmon and tuna, at least two times per week. This advice also applies to individuals with impulse control disorders such as ADHD, who are encouraged to incorporate a minimum of 1 gram of fish oil into their daily diets. The rationale behind this recommendation stems from the proven cognitive benefits of omega-3 fatty acids, particularly for brains affected by ADHD.",
        second: "Another noteworthy supplement is vitamin D, which has been associated with a decreased risk of depression. It plays a vital role in maintaining strong bones and supporting the proper functioning of muscles and nerves while enhancing the immune system's ability to defend against harmful bacteria and viruses. Furthermore, B vitamins, especially vitamin B12 and folic acid, play a fundamental role in brain function and can aid in alleviating symptoms of anxiety and depression. Nevertheless, it is crucial to emphasize that supplements alone should not serve as the sole means of treating mental health conditions. It is imperative to seek professional guidance from a healthcare provider to ensure appropriate usage and prevent potential interactions with other medications.",
        personal: "My office offers dietary supplements to you with a 15% increase in price compared to the cost. However, this still gives you a 10% discount compared to what retail customers pay for the same products. Please note that purchasing these products from my office is not mandatory, and you have the option to buy them from other suppliers. If you are currently a patient, please contact me for an additional discount, as I do not intend to make a profit from selling supplements to you. Whether you choose to purchase products from my office or elsewhere, it will not affect the quality of care you receive in my office.",
      }}
    >
      <p className='p-5 text-lg bg-white'>Considering that federal agencies do not oversee the purity or dosage of vitamins and other nutritional supplements, it is important to thoroughly research before purchasing or consuming them. Opt for well-established and reputable brands. If you have any doubts or inquiries about a product, reach out to the manufacturer for additional information. Consult your doctor regarding their experience with the supplement. And, most importantly, if you are taking other medications, consult your doctor before consuming.  If you experience any negative reactions, discontinue the supplement immediately and contact your doctor for further assistance.</p>
    </ServicePageLayout>
  )
}

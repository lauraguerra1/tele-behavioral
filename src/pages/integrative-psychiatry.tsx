import React from 'react';
import { AppProps } from '@/types';
import forrest from '../images/forrest.gif';
import integrative from '../images/integrative.png';
import meditating from '../images/meditating.png';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function IntegrativePsychiatry(pageProps: AppProps) {
  return (
    <ServicePageLayout
      {...pageProps}
      colorOverride='bg-amber-900 bg-opacity-20'
      images={{
        bg: { src: forrest, alt: 'video of a forrest with rays of sunshine coming through between the trees' },
        icon: { src: integrative, alt: 'icon of a brain being held by two hands' },
        article: { src: meditating, alt: 'woman meditating with a view of palm trees' },
      }}
      copy={{
        title: 'INTEGRATIVE PSYCHIATRY',
        startQuote: "Complementary, Integrative or Alternative; What do they all mean?",
        first: 'The terms "complementary," "alternative," and "integrative" are constantly changing and evolving within the medical field. When people discuss these approaches, they often use "alternative" and "complementary" interchangeably, but they actually mean different things. "Complementary" refers to the use of non-mainstream methods (acupuncture, yoga, massage and probiotics, etc.) alongside conventional medicine (medication, psychotherapy, physical rehabilitation, etc), while "alternative" means using non-mainstream methods in place of of conventional medicine.',
        second: "Integrative psychiatry is an approach to mental health that combines traditional psychiatric methods with alternative and complementary therapies. This holistic approach takes into account not only the physical symptoms of mental illnesses but also the emotional, spiritual, and social aspects of a person's well-being. By blending evidence-based treatment with practices such as acupuncture, yoga and medication, integrative psychiatry aims to provide the most comprehensive and personalized care for individuals. This approach recognizes that mental health is a complex and multifaceted issue, and therefore requires a multidimensional treatment strategy. Integrative psychiatry puts the patient at the center of their own healing process and encourages active participation in their treatment plan. The goal is to promote overall wellness and long-term mental health rather than simply suppressing symptoms. With its emphasis on collaboration and individualized care, integrative psychiatry offers a promising and forward-thinking approach to mental healthcare.",
        personal: 'As a doctorally prepared Family and Psychiatric Mental Health Nurse Practitioner with over 20+ years of healthcare experience, I possess a strong foundation for understanding and treating the complexities of mental health. My approach aligns with the evolving understanding of mental health as a complex interplay of biological, psychological, social, and environmental factors. By analyzing your lifestyle preference along with your individual and family history, I will formulate a personalized treatment plan based on your unique needs. My treatments involve conventional methods such as prescribing medications, but also personalized and complementary support methods. This frequently blends nutritional and lifestyle counseling, guided imagery such as mindfulness, bodywork, and other alternative treatments.',
      }}
    />
  );
}
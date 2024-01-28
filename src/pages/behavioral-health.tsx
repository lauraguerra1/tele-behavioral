import React from 'react';
import { AppProps } from '@/types';
import behavioralGif from '../images/gifs/behavioral.gif';
import behavioral from '../images/icons/mentalhealth.png';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function Behavioral(pageProps: AppProps) {
  return (
    <>
    <ServicePageLayout
      {...pageProps}
      colorOverride='bg-purple-900 bg-opacity-10'
      images={{
        bg: { src: behavioralGif, alt: 'video of a woman practicing yoga on a mountain top' },
        icon: { src: behavioral, alt: 'icon of a brain with a plant growing from it' },
      }}
      copy={{
        title: 'BEHAVIORAL HEALTH',
        startQuote: 'What is the field of behavioral health?',
        first: "Behavioral health is a field of medicine that focuses on the diagnosis and treatment of mental disorders and behavioral issues. It encompasses a broad range of specialties, including psychiatry, psychology, and counseling. Psychiatric Mental Health Nurse Practitioners (PMHNP) in particular, are trained medical professionals who specialize in assessing, diagnosing, and treating mental illnesses. They are skilled in conducting thorough psychiatric evaluations, prescribing medications, and providing psychotherapy to help individuals manage and overcome their mental health challenges. Promoting mental well-being and addressing psychiatric conditions is crucial in improving overall quality of life and functioning. Through a combination of medication management, therapy, and other interventions, behavioral health professionals can help individuals regain control over their lives and achieve optimal mental health.",
        personal: "I am in the best position to assist individuals who are motivated to improve, willing to persevere through challenges, and approach their healthcare with an open mindset. These clients often experience a sense of being stuck, lack of motivation, overwhelming feelings, or anxiety. I find it gratifying to work with them because their dedication to personal growth and their readiness to tackle difficulties is truly inspiring. It is a rewarding experience to accompany these individuals on their journey towards positive change and provide them with the necessary tools to overcome life's obstacles. The trust they have in me allows for a genuine partnership in their healing process. As part of my role, it is crucial for me to have a comprehensive understanding of the psychological and social aspects of illness and how it impacts behavior. Merely focusing on the biological aspects is not sufficient. By adopting a holistic approach, I can better grasp the complexities of illness and deliver optimal care. Together, we can create a secure and nurturing environment where they can explore their emotions, gain self-awareness, and ultimately find the empowerment they are seeking.",
      }}
    />
    </>
  );
}

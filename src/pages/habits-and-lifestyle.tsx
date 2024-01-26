import React from 'react';
import { AppProps } from '@/types';
import waves from '../images/waves.gif';
import biology from '../images/biology.png';
import meditating from '../images/meditating.png';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function MindBody(pageProps: AppProps) {
  return (
    <ServicePageLayout
      {...pageProps}
      images={{
        bg: { src: waves, alt: 'video of tiny waves crashing at the shore' },
        icon: { src: biology, alt: 'icon of a beaker with a plant growing from it' },
        article: { src: meditating, alt: 'woman meditating with a view of palm trees' },
      }}
      copy={{
        title: 'HABITS & LIFESTYLE',
        startQuote: 'How does lifestyle impact mental wellness?',
        first: "Lifestyle management alone is insufficient for managing certain mental health disorders, but it can significantly impact overall mental wellness. Although mental disorders are influenced by various factors, lifestyle changes and appropriate treatments can enhance mental health and even prevent certain disorders. It is important to note, mental health is not static and can evolve over time with new experiences.",
        second: "The causes of mental illness are complex and interconnected. While lifestyle and mental health are related, experts agree that mental health is shaped by a combination of biological elements, life experiences, choices regarding one's lifestyle, and the health history of one's family. Lifestyle choices already have a known impact on physical health, such as the increased risk of heart disease from smoking, stress, and a sedentary lifestyle.",
        personal: "To help you build healthy habits, I believe in showing you the importance of consistency and persistence. First and foremost, it&apos;s essential for me to encourage you to set achievable goals that align with your desires and capabilities. By supporting you throughout your journey, I can provide motivation and inspiration, reminding you of the positive impact your efforts will have on your well-being. Celebrating small victories and acknowledging the progress you make along the way will boost your confidence and self-belief. In addition, I will offer guidance on establishing a routine and incorporating healthy habits into your daily life, as it is crucial. I will encourage you to take small steps towards your goals and focus on long term sustainability, increasing the chances of your success. Finally, it's important for me to lead by example, demonstrating my own commitment to healthy habits and creating an environment that nurtures growth. Together, we can work on building a foundation of health and well-being that will last a lifetime.",
      }}
    >
      <p className='p-5 text-lg bg-white'>By practicing healthier lifestyle habits, both your mind and body will be better equipped to handle life&apos;s challenges. A positive lifestyle encompasses more than just a nutritious diet and regular exercise. It also involves stress management, maintaining physical health through good habits and appropriate healthcare, cultivating and maintaining good relationships, making meaningful contributions to the community, finding a life purpose and achieving a good work-life balance for optimal mental health.</p>
    </ServicePageLayout>
  );
}
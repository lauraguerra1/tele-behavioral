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
        title: 'MIND, BODY & Biology',
        startQuote: 'The connection between mind, body and biology  has been a topic of extensive study in the field of science.',
        first: "Spirituality refers to an individual's personal belief system and connection to something greater than themselves. It is a concept that is often associated with religion, but it can also exist outside of organized religious practices. Spirituality can encompass a variety of beliefs and practices, such as meditation, prayer, and mindfulness. For many people, spirituality provides a sense of purpose, meaning, and connection to the world around them. It can offer a way to find inner peace, reflect on one's values and beliefs, and seek guidance. Some people may find spirituality through engagement with nature, while others may find it through religious teachings or spiritual communities. Ultimately, spirituality is a deeply personal and individual journey that can have profound effects on one's well-being and sense of fulfillment.",
        second: "Numerous studies have demonstrated the influence of the mind on the body's physical health. Positive thoughts, meditating, and relaxation techniques have been found to promote well-being and enhance the body's ability to heal itself. Conversely, negative emotions and stress can have detrimental effects on the body, leading to increased susceptibility to illnesses and a weakened immune system. Furthermore, the mind's perception of pain has been proven to affect the body's response to pain signals, with psychological factors influencing pain tolerance and pain management.",
        personal: 'The integration of psychological and biological perspectives can lead to more effective treatments for mental health disorders and overall well-being. By recognizing the profound influence of the mind on the body and vice versa, in collaboration with my patients, together we can make informed choices to optimize both your mental and physical health. Understanding the interplay between biological factors such as genetics and neurochemistry, as well as psychological factors such as thoughts, emotions, and behaviors, allows for a comprehensive approach to treatment. By addressing both the physical and mental aspects of health, we can work towards achieving long-term well-being and improved quality of life.',
      }}
    >
      <p className='p-5 text-lg bg-white'>On the other hand, the field of biology provides insights into how the body's biological processes impact mental states and cognitive function. Neurotransmitters, hormones, and other biochemical substances play a crucial role in regulating mood, emotions, and behaviors. Imbalances in these biochemical processes have been linked to mental health disorders such as depression and anxiety. Additionally, genetic factors have been shown to contribute to the risk of developing certain mental illnesses, further highlighting the biological basis of the mind-body connection.</p>
    </ServicePageLayout>
  );
}

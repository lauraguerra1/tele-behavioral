import React from 'react';
import { AppProps } from '@/types';
import relaxing from '../images/gifs/relaxing.gif';
import biology from '../images/icons/biology.png';
import ocean from '../images/ocean.jpg';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function MindBody(pageProps: AppProps) {
  return (
    <ServicePageLayout
      {...pageProps}
      colorOverride='bg-cyan-800 bg-opacity-10'
      textColor='black'
      images={{
        bg: { src: relaxing, alt: 'video of person sitting by a lake' },
        icon: { src: biology, alt: 'icon of a beaker with a plant growing from it' },
        article: { src: ocean, alt: 'person sitting on a rock on a body of water looking into a pink sunset' },
      }}
      copy={{
        title: 'MIND, BODY & BIOLOGY',
        startQuote: 'The connection between mind, body and biology  has been a topic of extensive study in the field of science.',
        first: "Scientists have found that the mind and body are intricately interconnected, with each having a profound influence on the other. The mind, which encompasses thoughts, emotions, and consciousness, plays a crucial role in shaping an individual's well-being and overall health. Moreover, research has shown that biological factors, such as genetics and neurochemical processes, can significantly impact mental processes and emotions. This bidirectional relationship between the mind and body forms the basis of understanding the connection between mind, body, and biology.",
        second: "Numerous studies have demonstrated the influence of the mind on the body's physical health. Positive thoughts, meditating, and relaxation techniques have been found to promote well-being and enhance the body's ability to heal itself. Conversely, negative emotions and stress can have detrimental effects on the body, leading to increased susceptibility to illnesses and a weakened immune system. Furthermore, the mind's perception of pain has been proven to affect the body's response to pain signals, with psychological factors influencing pain tolerance and pain management.",
        personal: 'The integration of psychological and biological perspectives can lead to more effective treatments for mental health disorders and overall well-being. By recognizing the profound influence of the mind on the body and vice versa, in collaboration with my patients, together we can make informed choices to optimize both your mental and physical health. Understanding the interplay between biological factors such as genetics and neurochemistry, as well as psychological factors such as thoughts, emotions, and behaviors, allows for a comprehensive approach to treatment. By addressing both the physical and mental aspects of health, we can work towards achieving long-term well-being and improved quality of life.',
      }}
    >
      <p className='p-5 text-lg bg-white'>On the other hand, the field of biology provides insights into how the body&apos;s biological processes impact mental states and cognitive function. Neurotransmitters, hormones, and other biochemical substances play a crucial role in regulating mood, emotions, and behaviors. Imbalances in these biochemical processes have been linked to mental health disorders such as depression and anxiety. Additionally, genetic factors have been shown to contribute to the risk of developing certain mental illnesses, further highlighting the biological basis of the mind-body connection.</p>
    </ServicePageLayout>
  );
}

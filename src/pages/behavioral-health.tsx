import React, { useState } from 'react';
import { AppProps } from '@/types';
import behavioralGif from '../images/gifs/behavioral.gif';
import behavioral from '../images/icons/mentalhealth.png';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function Behavioral(pageProps: AppProps) {
  const [focusedSection, setFocusedSection] = useState('');
  const sections = [
    {
      title: 'ADHD',
      subsections: [{
        title: '',
        paragraphs:  <p>Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder characterized by persistent patterns of inattention, hyperactivity, and impulsivity. ADHD typically begins in childhood and can continue into adulthood. Individuals with ADHD often struggle with concentrating, staying organized, and completing tasks. ADHD can have a significant impact on an individual&apos;s academic performance, social relationships, and overall quality of life. It is important to note that ADHD is a complex disorder with a variety of manifestations, and the severity of symptoms can vary from person to person. Effective treatments for ADHD may include medication, behavioral therapy, and educational support. Early diagnosis and intervention are crucial in managing and mitigating the challenges associated with this disorder. With proper support and understanding, individuals with ADHD can lead fulfilling and successful lives.</p>,
        personal: "Neurodevelopmental disorders such as ADHD can be intricate, involving more than just difficulties with focus and attention. With my 7+ years of experience in the diagnosis and treatment of ADHD, I possess extensive knowledge in conducting assessments and designing personalized treatment strategies. Furthermore, I have the expertise to recognize co-occurring conditions like depression and anxiety that may accompany ADHD. It is essential to highlight that while there is no known cure for ADHD, we can effectively manage its symptoms through various approaches. Although medication is the most commonly employed treatment, we can also integrate additional complementary therapies."
      }]
    },
    {
      title: 'Anxiety Disorders',
      subsections: [{
        title: '',
        paragraphs: <p>Anxiety refers to a collection of mental health disorders that result in persistent, intrusive, and often irrational fears and concerns. While occasional nervousness or anxiety is normal, when anxiety disorders bring about distressing symptoms that disrupt regular activities and negatively impact one&apos;s overall well-being it is advisable to seek professional assistance. The most common type of anxiety disorder is generalized anxiety disorder, which causes worries about everyday issues such as family, health, work, and responsibilities. There are also other forms of anxiety like separation anxiety and social anxiety, which give rise to specific concerns.</p>,
        personal: "It is important to remember that everyone's experience with anxiety is different, and what works for one person may not work for another. I will work with you to develop a treatment plan by engaging in open communication about your mental health and addressing any concerns or questions you may have regarding your treatment. Seeking help demonstrates strength, and there is no shame in prioritizing your well-being."
      }]
    },
    {
      title: 'Depression & Mood Disorders',
      subsections: [{
        title: '',
        paragraphs: 
          <>
          <p>A mood disorder is a classification of mental illnesses that encompasses various types of depression and bipolar disorders. These disorders can affect people of all ages, including children, teenagers, and adults. Mood disorders are serious mental health conditions that have a significant impact on an individuals overall well-being and quality of life. While it&apos;s normal for anyone to feel occasional sadness or low mood, mood disorders are characterized by more intense and prolonged emotional states. Managing these disorders can be more challenging than typical emotions of sadness, happiness, or anger.People experiencing depression often feel persistent sadness, a loss of interest or pleasure in activities, changes in appetite and sleep patterns, fatigue, difficulty concentrating, and sometimes even thoughts of self-harm or suicide. This condition affects millions of people worldwide, regardless of their age, gender, or socioeconomic status. It&apos;s crucial to understand that depression is not simply a passing case of feeling down but rather a complex illness that requires proper diagnosis and treatment.</p>
          <p>Life events and stressors can worsen or bring about underlying feelings of sadness or depression, further complicating the management of these disorders. Depression can be triggered by various life difficulties such as job loss, divorce, the loss of a loved one, financial troubles, or other significant challenges. Coping with these pressures can be difficult and may intensify feelings of sadness or depression. These life events and stressors can also make managing mood disorders more difficult.</p>
          </>
        ,
        personal: "Seeking professional help is essential for those experiencing symptoms of depression, as it is a highly treatable mental health disorder. With the right combination of therapy, medication, and support, individuals can regain a sense of hope and optimize their mental and emotional well-being. By conducting a thorough psychological evaluation, including family history, symptomatology, severity of symptoms including how the symptoms affect your life, any current and past treatments, we will discuss diagnosis and most appropriate treatment options."
      }]
    },
    {
      title: 'Psychotherapy',
      subsections: [
        {
          title: 'Supportive Psycotherapy',
          paragraphs: <p><span className='font-extrabold text-lg'>Supportive psychotherapy</span> focuses on the affect or emotion experienced by individuals. Many patients with depression or anxiety disorders often fear and suppress intense negative feelings such as anger, anxiety, and sadness. However, these feelings play a crucial role in signaling how life is impacting them. The intensity of these emotions reflects the influence of life circumstances on the individual. When living with mental illness or emotional difficulties, coping with daily stressors becomes challenging, making it hard to see the bigger picture and make progress. Supportive therapy aims to provide comfort, compassion, and empathy to help individuals navigate their issues by offering support, practical knowledge, and tools, allowing individuals to better manage their everyday lives.  Supportive psychotherapy emphasizes the importance of active listening and empathy, allowing the therapist to validate the client&apos;s experiences and provide them with a sense of reassurance. Through regular sessions and ongoing support, this therapeutic approach fosters personal growth, resilience, and a greater ability to navigate life&apos;s challenges.</p>,
          personal: "By creating a safe, nonjudgmental environment where you can openly discuss your feelings, concerns, and problems we will focus on addressing your immediate and present concerns, such as relationship difficulties, family conflicts, or work-related stress. If requested I offer practical advice and guidance specifically tailored to your needs."
        },
        {
          title: "DBT", 
          paragraphs: <p><span className='font-extrabold text-lg'>Dialectical behavior therapy (DBT)</span> is a form of psychotherapy that focuses on helping individuals who struggle with intense emotions. This therapy incorporates elements of mindfulness, acceptance, and cognitive-behavioral therapy to address emotional regulation, interpersonal effectiveness, distress tolerance, and mindfulness skills. It has been proven effective in treating various mental health conditions, including self-harm, substance abuse, eating disorders, and mood disorders. DBT utilizes a structured approach, emphasizing the importance of creating a supportive and validating environment for clients. It aims to help clients develop coping skills and techniques to regulate their emotions through individual sessions and group therapy. DBT is recognized as an effective treatment option for individuals dealing with emotional struggles and aims to equip them with the necessary tools to navigate these challenges. DBT recognizes the necessity for change within a framework of accepting situations and acknowledges the continual fluctuation of emotions, often conflicting, without becoming entangled in them. Therapist-teachers assist patients in comprehending and embracing the fact that thinking is inherently complex. DBT, as a whole, encompasses a blend of scientific knowledge and practical application.</p>,
          personal: "As a proponent of dialectical behavior therapy (DBT), I will provide an introduction to the main concepts and strategies such as mindfulness, distress tolerance, emotional regulation and interpersonal effectiveness, in addition to referrals for groups and certified DBT therapists if necessary. "
        },
        {
          title: "Mindfulness Based Therapy", 
          paragraphs: <p><span className='font-extrabold text-lg'>Mindfulness based therapy</span> is an approach used in psychotherapy that emphasizes living in the present moment and developing awareness of one&apos;s thoughts, feelings, and bodily sensations. It involves paying attention to one&apos;s experiences in a non-judgmental and accepting way. This therapeutic practice draws on principles and techniques from Buddhism, particularly mindfulness meditation. Mindfulness based therapy has been found to be effective in managing a range of mental health concerns, including anxiety, depression, and stress. It can help individuals gain a greater sense of self-awareness, reduce negative thinking patterns, and improve emotional regulation. Moreover, studies have shown that mindfulness based therapy can also be beneficial for physical health, as it promotes relaxation and reduces symptoms associated with chronic pain and certain medical conditions. Overall, mindfulness based therapy offers individuals a powerful tool for personal growth and well-being by cultivating a deeper connection to the present moment.</p>,
          personal: "As an advocate of mindfulness-based therapy, I can teach you how to be fully present and break free from negative thought patterns that can lead to a mood-disordered state. By incorporating mindfulness practices such as present moment awareness, meditation, and breathing exercises, this therapy can assist you in combating a challenging state of mind before it becomes overwhelming."
        }
      ]
    },
    {
      title: 'Medication Management',
      subsections: [{
        title: '',
        paragraphs: <p>Medication management is a critical aspect of mental health treatment, as it allows for the effective use of psychotropic medications to alleviate symptoms and enhance a patient&apos;s quality of life. The efficacy of these medications can vary among individuals, which is why trained professionals take into account factors such as medical history and personalized medication plans. Medication management involves the evaluation of a patient&apos;s need for medication, the provision of a prescription, and ongoing monitoring by a qualified physician or prescriber. This includes monitoring and reconciling medications, as well as ensuring that patients achieve desired outcomes.  Patient education is key in medication management, as psychiatric providers work to explain the benefits and risks of medications, set realistic expectations, and address any concerns.A thorough review of prescribed drugs and their potential side effects is necessary to create treatment plans and monitor safety and efficacy. It is crucial for patients to understand the purpose, safety, and effectiveness of their medications, as well as any possible risks associated with mixing them with food or supplements. By understanding why they need to take certain drugs and following specific instructions, patients can actively participate in managing their medications and overall mental health. Some patients may experience health complications despite taking the correct medications and doses. In many cases, this can be attributed to incorrect dosage or neglect in adhering to the prescribed therapy. Regular follow-up appointments allow for evaluating treatment effectiveness, making necessary dosage adjustments, and identifying and addressing any emerging side effects or complications.</p>,
        personal: "By utilizing evidence-based practices to assess your progress and ensure the efficacy of your medication, together we will address any concerns, make adjustments to your treatment plan, and offer additional support."
      }]
    }
  ];
  return (
      <ServicePageLayout
        {...pageProps}
        childrenAtBottom={true}
        colorOverride='bg-purple-900 bg-opacity-10'
        images={{
          bg: { src: behavioralGif, alt: 'video of a woman practicing yoga on a mountain top' },
          icon: { src: behavioral, alt: 'icon of a brain with a plant growing from it' },
        }}
        copy={{
          title: 'BEHAVIORAL HEALTH',
          startQuote: 'What is the field of behavioral health?',
          first: 'Behavioral health is a field of medicine that focuses on the diagnosis and treatment of mental disorders and behavioral issues. It encompasses a broad range of specialties, including psychiatry, psychology, and counseling. Psychiatric Mental Health Nurse Practitioners (PMHNP) in particular, are trained medical professionals who specialize in assessing, diagnosing, and treating mental illnesses. They are skilled in conducting thorough psychiatric evaluations, prescribing medications, and providing psychotherapy to help individuals manage and overcome their mental health challenges. Promoting mental well-being and addressing psychiatric conditions is crucial in improving overall quality of life and functioning. Through a combination of medication management, therapy, and other interventions, behavioral health professionals can help individuals regain control over their lives and achieve optimal mental health.',
          personal: "I am in the best position to assist individuals who are motivated to improve, willing to persevere through challenges, and approach their healthcare with an open mindset. These clients often experience a sense of being stuck, lack of motivation, overwhelming feelings, or anxiety. I find it gratifying to work with them because their dedication to personal growth and their readiness to tackle difficulties is truly inspiring. It is a rewarding experience to accompany these individuals on their journey towards positive change and provide them with the necessary tools to overcome life's obstacles. The trust they have in me allows for a genuine partnership in their healing process. As part of my role, it is crucial for me to have a comprehensive understanding of the psychological and social aspects of illness and how it impacts behavior. Merely focusing on the biological aspects is not sufficient. By adopting a holistic approach, I can better grasp the complexities of illness and deliver optimal care. Together, we can create a secure and nurturing environment where they can explore their emotions, gain self-awareness, and ultimately find the empowerment they are seeking.",
        }}
      >
      <div className='bg-white p-5 flex flex-col'>
        <div className='border-t-2 border-slate-400 mb-2'></div>
        <h3 className='text-center text-xl md:text-2xl my-6'>DISORDERS & TREATMENT OPTIONS</h3>
        {sections.map(service => {
          return (
            <>
              <button onClick={() => setFocusedSection(prev => prev === service.title ? '' : service.title)} key={service.title} className='dropdown flex justify-between items-center px-5 mb-0.5 h-10'>
                <label className='text-white text-xl'>{service.title}</label>
                {focusedSection !== service.title ? (
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 text-white'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                  </svg>
                ) : (
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 text-white'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' />
                  </svg>
                )}
              </button>
              <article className={`drop-description ${focusedSection === service.title ? '' : 'closing'}`}>
                {service.subsections.map(subsection => {
                  return (
                    <div className='p-5' key={subsection.title}>
                      {subsection.title.length > 0 && <h4 className='text-lg font-extrabold text-center border-b-1 border-slate-400 mb-3 md:mx-[10vw]'>{subsection.title.toUpperCase()}</h4>}
                      {subsection.paragraphs}
                      <p className='italic pt-5'>&quot;{subsection.personal}&quot;</p>
                      <p className='text-lg pt-2'>- ROXANNE FLAHERTY</p>
                      <p className='pl-3'>DNP, PMHNP-BC, FNP-C</p>
                    </div>
                  )
                })}
              </article> 
            </>
          )
        })}
        </div>
      </ServicePageLayout>
  );
}

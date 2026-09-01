import type { ExamensSection } from './fr'

export type { ExamItem, ChildSection, FaqItem, ExamensSection, ServiceTag } from './fr'

export const services :  {
    tag: string;
    title: string | React.ReactNode;
    description: React.ReactNode | string;
    images: string[];
    content: ExamensSection;
  }[] = [
  {
    tag: "biological-analyses",
    title: <><b className="font-extrabold">Biological</b> Analyses</>,
    description: <>In the field of medical laboratory testing, our laboratories deliver accurate results and personalized support. Our biologists are here to guide you through every step of your healthcare journey.</>,
    images: [
      "/images/services/hero.jpg",
      "https://images.unsplash.com/photo-1562156194-215edc144205?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1161",
      "https://images.unsplash.com/photo-1524683745036-b46f52b8505a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715",
    ],
    content: {
      title: "Discover our key tests for comprehensive medical follow-up",
      description:
        "Explore our range of essential medical laboratory tests designed to assess your health in depth. From the complete blood count to liver function tests, our analyses provide valuable information for personalized, effective medical follow-up.",

      items: [
        {
          title: "Immuno-serology",
          description:
            "Immuno-serology studies how our immune system responds to infections and diseases. Immuno-serological tests detect the presence of antibodies or antigens in the blood, helping to diagnose infectious diseases, allergies and autoimmune disorders.",
          image: "https://plus.unsplash.com/premium_photo-1675032317511-a26fa3c5124e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715",
          link: "/exams/immuno_serology",
        },
        {
          title: "Hematology",
          description:
            "Hematology focuses on the study of blood and the diseases associated with it. Hematological tests assess the composition of the blood, detect coagulation disorders and identify diseases such as anemia or leukemia.",
          image: "https://images.unsplash.com/photo-1642697552227-ca21f326fe41?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1562",
          link: "/exams/hematology",
        },
        {
          title: "Bacteriology",
          description:
            "Bacteriology is the branch of microbiology that focuses on identifying the bacteria responsible for infections. Bacteriological tests help identify the germs causing an infection and determine which antibiotics are effective against them.",
          image: "https://images.unsplash.com/photo-1631824687534-f642fc820d54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=817",
          link: "/exams/microbio_parasitology",
        },
        {
          title: "Parasitology",
          description:
            "Parasitology studies parasites and their role in human disease. Parasitological tests detect the presence of parasites in the body and help diagnose diseases such as malaria and intestinal parasitic infections.",
          image: "https://plus.unsplash.com/premium_photo-1673288398662-6865a9cb3924?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687s",
          link: "/exams/microbio_parasitology",
        },
        {
          title: "Biochemistry",
          description:
            "Medical biochemistry focuses on the study of biochemical processes in the body. Biochemical tests measure the levels of various substances in the blood, which can help diagnose metabolic, renal, hepatic and endocrine disorders.",
          image: "https://images.unsplash.com/photo-1745237497721-5e6c13a171ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
          link: "/exams/blood_biochemistry",
        },
        {
          title: "Specialized tests",
          description:
            "Specialized tests bring together a series of advanced analyses used to assess specific aspects of health, such as hormone assays, tumor markers, and more.",
          image: "https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
          link: "/exams/special_exams",
        },
      ],

      children: <></>,

      faq: [
        {
          question: "How should I interpret my results?",
          answer:
            "Your test results should be interpreted by a healthcare professional who will take into account your clinical condition, your medical history and the laboratory's reference values. Avoid any personal interpretation without medical advice.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
        },
        {
          question:
            "How does an immuno-serological test work and why is it used to diagnose infectious diseases?",
          answer:
            "An immuno-serological test detects the antibodies produced by our immune system in response to an infection. These antibodies help fight the infection and often remain in the blood for some time. The test can therefore reveal whether a person has been exposed to a specific infectious agent.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
        },
        {
          question:
            "How should I interpret an HIV antibody screening test result?",
          answer:
            "The HIV antibody screening test indicates whether your body has developed antibodies against the virus. A positive result must always be confirmed by a second test to rule out any false positive. If in doubt, consult a healthcare professional.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8c-1.11 0-2.08.402-2.599 1M12 16c-1.11 0-2.08-.402-2.599-1M12 16c1.11 0 2.08-.402 2.599-1M15 21h3m-3 0v-3m0 3l-3-3m3 3l3-3M9 3H6m3 0v3m0-3l3 3m-3-3L6 6" /></svg>,
        },
        {
          question:
            "I want to take a test, but I don't know how to prepare for it.",
          answer:
            "Preparation depends on the type of test. Some tests require fasting, others do not. We recommend asking your laboratory for specific instructions before the sample is taken, to ensure reliable results.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
        },
      ],
    }
  },
  {
    tag: "medical-imaging",
    title: <>Medical <b className="font-extrabold">Imaging</b></>,
    description: <>Discover our medical laboratory and imaging center, offering state-of-the-art services for accurate diagnosis and effective management of your health. Our expert team provides fast, reliable results for a better understanding of your health status.</>,
    images: [
      "https://images.unsplash.com/photo-1666886573215-b59d8ad9970c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1743767588158-72174d1898a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fG1lZGljYWwlMjBpbWFnZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      "https://plus.unsplash.com/premium_photo-1726869613046-16a29dbbab28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
    ],
    content: {
      title: "Discover our key examinations for comprehensive medical follow-up",
      description:
        "Explore our range of essential medical imaging examinations designed to assess your health in depth. From digital radiography to Doppler ultrasound, our services provide valuable information for personalized, effective medical follow-up.",

      items: [
        {
          title: "Digital radiography",
          description:
            "Digital radiography is a medical imaging technique that uses X-rays to produce detailed images of the inside of the body. Unlike conventional radiography, digital radiography uses electronic sensors to capture the images, offering better image quality, a lower radiation dose and the ability to manipulate the images for more accurate interpretation. This examination is commonly used to diagnose bone fractures, infections, tumors and other medical conditions.",
          image: "https://images.unsplash.com/photo-1616012480717-fd9867059ca0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1025",
          link: "/exams/radiology",
        },
        {
          title: "Doppler ultrasound",
          description:
            "Doppler ultrasound is a specialized ultrasound modality used to assess blood flow within the blood vessels and the heart. Using high-frequency sound waves, Doppler ultrasound detects and measures the speed and direction of blood flow, making it possible to evaluate circulation, detect obstructions, stenoses and vascular abnormalities, and assist in planning medical procedures such as vascular surgery. This technique is invaluable for assessing cardiovascular diseases, circulatory disorders and vascular pathologies.",
          image: "https://plus.unsplash.com/premium_photo-1702598707354-e198002d59b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
          link: "/exams/echography",
        },
      ],

      children: <></>,

      faq: [
        {
          question: "What preparation is required before a medical imaging examination?",
          answer:
            "Preparation depends on the type of examination. Some examinations, such as abdominal ultrasound, require fasting, while others need no particular preparation. Your doctor or our staff will inform you of the specific instructions before the examination.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
        },
        {
          question: "What are the advantages of each type of medical imaging examination compared with the others?",
          answer:
            "Each type of imaging examination has its own advantages depending on the condition being investigated. For example, MRI is ideal for visualizing soft tissues, computed tomography (CT scan) provides detailed images of bones and internal organs, and radiography quickly detects fractures or bone infections.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
        },
        {
          question:
            "What precautions should pregnant or breastfeeding women take during medical imaging examinations?",
          answer:
            "Pregnant or breastfeeding women should always inform the medical staff before an imaging examination. Some examinations using X-rays or contrast agents may be contraindicated. In such cases, alternatives such as ultrasound may be preferred.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8c-1.11 0-2.08.402-2.599 1M12 16c-1.11 0-2.08-.402-2.599-1M12 16c1.11 0 2.08-.402 2.599-1M15 21h3m-3 0v-3m0 3l-3-3m3 3l3-3M9 3H6m3 0v3m0-3l3 3m-3-3L6 6" /></svg>,
        },
        {
          question: "How can I obtain a copy of the images from my medical imaging examination?",
          answer:
            "You can obtain a copy of your images in digital format or on CD directly from the laboratory once the radiologist has validated them. The results can also be sent to your attending physician for optimal follow-up.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
        },
      ],
    }
  },
  {
    tag: "functional-exploration",
    title: <>Functional <b className="font-extrabold">Exploration</b></>,
    description: <>Our medical laboratory and functional exploration facilities offer advanced services to <b className="font-black text-white">assess and diagnose a wide range of health conditions</b>. With cutting-edge technology and a specialized team, we deliver accurate results for <b className="font-black text-white">optimal monitoring of your well-being</b>.</>,
    images: [
      "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1576671081741-c538eafccfff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1016",
      "https://images.unsplash.com/photo-1666887360726-f55472d96c34?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
    ],
    content: {
      title: "Expertise in Medical Assessment",
      description:
        "Discover our full range of functional exploration services, designed to accurately and thoroughly assess physiological and organ function.",

      items: [
        {
          title: "Electrocardiogram (ECG)",
          description:
            "The electrocardiogram, commonly known as an ECG, is a non-invasive examination that records the electrical activity of the heart. This examination assesses heart rhythm, detects possible cardiac abnormalities and helps diagnose problems such as arrhythmias, coronary artery disease and cardiac conduction disorders. The ECG is a quick, painless procedure that is essential for assessing heart health.",
          image: "https://plus.unsplash.com/premium_photo-1671874971772-ec1943fac43d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
          link: "#",
        },
        {
          title: "Cardiac ultrasound",
          description:
            "Cardiac ultrasound, also known as echocardiography, is a medical imaging technique used to visualize the structures and function of the heart. This examination uses sound waves to produce real-time images of the heart, making it possible to assess the size of the cardiac chambers, the function of the heart valves, the contractile strength of the heart muscle and blood circulation. Cardiac ultrasound is a valuable tool for diagnosing heart disease and evaluating cardiac function.",
          image: "https://plus.unsplash.com/premium_photo-1702598687286-6e013884c30b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
          link: "#",
        },
        {
          title: "Functional exploration",
          description:
            "Functional exploration brings together a set of specialized examinations and tests designed to assess the function of vital organs and systems such as the heart, lungs, liver and kidneys. These examinations may include the electrocardiogram, spirometry, liver function tests, kidney function tests and other specific assessments. Functional exploration makes it possible to detect abnormalities, monitor organ health and contribute to the diagnosis and follow-up of cardiovascular, respiratory, hepatic and renal diseases.",
          image: "https://images.unsplash.com/photo-1618245596888-2fa0c17d4cec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1889",
          link: "#",
        },
      ],

      children: <></>,

      faq: [
        {
          question:
            "What is functional exploration and why is it important for assessing my health?",
          answer:
            "Functional exploration is a series of tests designed to assess the function of vital organs such as the heart, lungs, liver and kidneys. These examinations allow abnormalities to be diagnosed early, the progression of a disease to be monitored, or a treatment to be adjusted for better medical follow-up.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
        },
        {
          question:
            "What are liver function tests and what can they indicate?",
          answer:
            "Liver function tests measure the levels of various enzymes, proteins and substances in the blood in order to assess liver health. They can detect conditions such as hepatitis, fatty liver disease, cirrhosis, as well as drug-induced side effects on the liver.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
        },
      ],
    }
  }
]

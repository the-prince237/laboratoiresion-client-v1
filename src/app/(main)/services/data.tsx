export interface ExamItem {
  title: string
  description: string
  image: string
  link: string
}

export interface ChildSection {
  title: string
  description: string
  link: string
  linkLabel: string
}

export interface FaqItem {
  question: string
  answer: string
  Icon: () => React.ReactNode
}

export interface ExamensSection {
  title: string
  description: string
  items: ExamItem[]
  children?: React.ReactNode
  faq: FaqItem[]
}
export type ServiceTag = "biological-analyses" | "medical-imaging" | "functional-exploration";

export const services :  {
    tag: string;
    title: string | React.ReactNode;
    description: React.ReactNode | string;
    images: string[];
    content: ExamensSection;
  }[] = [
  {
    tag: "biological-analyses",
    title: <>Analyses <b className="font-extrabold">Biologiques</b></>,
    description: <>Dans le domaine de l’analyse médicale, nos laboratoires assurent des tests précis et un accompagnement personnalisé. Nos biologistes sont là pour vous guider à chaque étape de votre parcours de santé.</>,
    images: [
      "/images/services/hero.jpg",
      "https://images.unsplash.com/photo-1562156194-215edc144205?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1161",
      "https://images.unsplash.com/photo-1524683745036-b46f52b8505a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715",
    ],
    content: {
      title: "Découvrez nos principaux examens pour un suivi médical complet",
      description:
        "Explorez notre gamme d’examens d’analyses médicales essentiels pour évaluer votre santé de manière approfondie. De la numération formule sanguine aux tests de fonction hépatique, nos analyses fournissent des informations précieuses pour un suivi médical personnalisé et efficace.",

      items: [
        {
          title: "Immuno-sérologie",
          description:
            "L‘immuno-sérologie étudie la manière dont notre système immunitaire réagit face aux infections et aux maladies. Les tests immuno-sérologiques permettent de détecter la présence d’anticorps ou d’antigènes dans le sang, ce qui aide à diagnostiquer les maladies infectieuses, les allergies et les troubles auto-immuns.",
          image: "https://plus.unsplash.com/premium_photo-1675032317511-a26fa3c5124e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715",
          link: "/exams/immuno_serology",
        },
        {
          title: "Hématologie",
          description:
            "L’hématologie se concentre sur l’étude du sang et des maladies qui lui sont associées. Les analyses hématologiques permettent d’évaluer la composition du sang, de détecter des troubles de la coagulation et des maladies comme l’anémie ou la leucémie.",
          image: "https://images.unsplash.com/photo-1642697552227-ca21f326fe41?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1562",
          link: "/exams/hematology",
        },
        {
          title: "Bactériologie",
          description:
            "La bactériologie est la branche de la microbiologie qui se focalise sur l’identification des bactéries responsables d’infections. Les analyses bactériologiques aident à identifier les germes responsables d’infections et à déterminer quels antibiotiques sont efficaces pour les combattre.",
          image: "https://images.unsplash.com/photo-1631824687534-f642fc820d54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=817",
          link: "/exams/microbio_parasitology",
        },
        {
          title: "Parasitologie",
          description:
            "La parasitologie étudie les parasites et leur rôle dans les maladies humaines. Les analyses parasitologiques permettent de détecter la présence de parasites dans le corps et de diagnostiquer des maladies telles que le paludisme et les infections parasitaires intestinales.",
          image: "https://plus.unsplash.com/premium_photo-1673288398662-6865a9cb3924?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687s",
          link: "/exams/microbio_parasitology",
        },
        {
          title: "Biochimie",
          description:
            "La biochimie médicale se penche sur l’étude des processus biochimiques dans le corps. Les analyses biochimiques évaluent les niveaux de différentes substances dans le sang, ce qui peut aider à diagnostiquer des problèmes métaboliques, rénaux, hépatiques et endocriniens.",
          image: "https://images.unsplash.com/photo-1745237497721-5e6c13a171ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
          link: "/exams/blood_biochemistry",
        },
        {
          title: "Examens spécialisés",
          description:
            "Les examens spécialisés regroupent une série d’analyses avancées qui permettent d’évaluer des aspects spécifiques de la santé, comme les dosages hormonaux, les marqueurs tumoraux, etc.",
          image: "https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
          link: "/exams/special_exams",
        },
      ],

      children: <></>,

      faq: [
        {
          question: "Comment interpréter mes résultats ?",
          answer:
            "Les résultats de vos analyses doivent être interprétés par un professionnel de santé qui prendra en compte votre état clinique, vos antécédents médicaux et les valeurs de référence du laboratoire. Évitez toute interprétation personnelle sans avis médical.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
        },
        {
          question:
            "Comment fonctionne un test immuno-sérologique et pourquoi est-il utilisé pour le diagnostic des maladies infectieuses ?",
          answer:
            "Un test immuno-sérologique détecte les anticorps produits par notre système immunitaire en réponse à une infection. Ces anticorps aident à combattre l’infection et restent souvent dans le sang pendant un certain temps. Le test permet donc de révéler si une personne a été exposée à un agent infectieux spécifique.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
        },
        {
          question:
            "Comment interpréter un résultat de test de dépistage des anticorps du VIH ?",
          answer:
            "Le test de dépistage des anticorps du VIH indique si votre organisme a développé des anticorps contre le virus. Un résultat positif doit toujours être confirmé par un second test pour exclure tout faux positif. En cas de doute, consultez un professionnel de santé.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8c-1.11 0-2.08.402-2.599 1M12 16c-1.11 0-2.08-.402-2.599-1M12 16c1.11 0 2.08-.402 2.599-1M15 21h3m-3 0v-3m0 3l-3-3m3 3l3-3M9 3H6m3 0v3m0-3l3 3m-3-3L6 6" /></svg>,
        },
        {
          question:
            "Je veux faire un test, mais je ne sais pas comment me préparer.",
          answer:
            "La préparation dépend du type d’examen. Certains tests nécessitent un jeûne, d’autres non. Il est recommandé de demander des instructions spécifiques à votre laboratoire avant le prélèvement afin d’obtenir des résultats fiables.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
        },
      ],
    }
  },
  {
    tag: "medical-imaging",
    title: <><b className="font-extrabold">Imagerie</b> Médicale</>,
    description: <>Découvrez notre laboratoire d’analyse médicale et d’imagerie offrant des services de pointe pour un diagnostic précis et une prise en charge efficace de votre santé. Notre équipe experte vous assure des résultats fiables et rapides pour une meilleure compréhension de votre état de santé.</>,
    images: [
      "https://images.unsplash.com/photo-1666886573215-b59d8ad9970c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1743767588158-72174d1898a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fG1lZGljYWwlMjBpbWFnZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      "https://plus.unsplash.com/premium_photo-1726869613046-16a29dbbab28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
    ],
    content: {
      title: "Découvrez nos principaux examens pour un suivi médical complet",
      description:
        "Explorez notre gamme d’examens d’imagerie médicale essentiels pour évaluer votre santé de manière approfondie. De la radiographie numérique à l’échographie Doppler, nos services fournissent des informations précieuses pour un suivi médical personnalisé et efficace.",

      items: [
        {
          title: "Radiographie numérique",
          description:
            "La radiographie numérique est une technique d’imagerie médicale qui utilise des rayons X pour produire des images détaillées de l’intérieur du corps. Contrairement à la radiographie conventionnelle, la radiographie numérique utilise des capteurs électroniques pour enregistrer les images, offrant ainsi une meilleure qualité d’image, une réduction de la dose de rayonnement et la possibilité de manipuler les images pour une interprétation plus précise. Cet examen est couramment utilisé pour diagnostiquer les fractures osseuses, les infections, les tumeurs et d’autres affections médicales.",
          image: "https://images.unsplash.com/photo-1616012480717-fd9867059ca0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1025",
          link: "/exams/radiology",
        },
        {
          title: "Échographie Doppler",
          description:
            "L’échographie Doppler est une modalité d’échographie spécialisée qui permet d’évaluer le flux sanguin à l’intérieur des vaisseaux sanguins et du cœur. En utilisant des ondes sonores à haute fréquence, l’échographie Doppler détecte et mesure la vitesse et la direction du flux sanguin, ce qui permet d’évaluer la circulation sanguine, de détecter les obstructions, les sténoses et les anomalies vasculaires, et d’assister à la planification de procédures médicales telles que la chirurgie vasculaire. Cette technique est précieuse pour l’évaluation des maladies cardiovasculaires, des troubles circulatoires et des pathologies vasculaires.",
          image: "https://plus.unsplash.com/premium_photo-1702598707354-e198002d59b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
          link: "/exams/echography",
        },
      ],

      children: <></>,

      faq: [
        {
          question: "Quelle est la préparation nécessaire avant un examen d’imagerie médicale ?",
          answer:
            "La préparation dépend du type d’examen. Certains examens, comme l’échographie abdominale, nécessitent d’être à jeun, tandis que d’autres ne demandent aucune préparation particulière. Votre médecin ou notre personnel vous informera des consignes spécifiques avant l’examen.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
        },
        {
          question: "Quels sont les avantages de chaque type d’examen d’imagerie médicale par rapport aux autres ?",
          answer:
            "Chaque type d’examen d’imagerie a ses avantages selon la pathologie recherchée. Par exemple, l’IRM est idéale pour visualiser les tissus mous, la tomodensitométrie (scanner) pour obtenir des images détaillées des os et organes internes, et la radiographie pour détecter rapidement des fractures ou infections osseuses.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
        },
        {
          question:
            "Quelles sont les précautions à prendre pour les femmes enceintes ou allaitantes lors d’examens d’imagerie médicale ?",
          answer:
            "Les femmes enceintes ou allaitantes doivent toujours informer le personnel médical avant un examen d’imagerie. Certains examens utilisant des rayons X ou des produits de contraste peuvent être contre-indiqués. Dans ces cas, des alternatives comme l’échographie peuvent être privilégiées.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8c-1.11 0-2.08.402-2.599 1M12 16c-1.11 0-2.08-.402-2.599-1M12 16c1.11 0 2.08-.402 2.599-1M15 21h3m-3 0v-3m0 3l-3-3m3 3l3-3M9 3H6m3 0v3m0-3l3 3m-3-3L6 6" /></svg>,
        },
        {
          question: "Comment puis-je obtenir une copie des images de mon examen d’imagerie médicale ?",
          answer:
            "Vous pouvez obtenir une copie de vos images sous format numérique ou sur CD directement au laboratoire après la validation du radiologue. Les résultats peuvent également être transmis à votre médecin traitant pour un suivi optimal.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
        },
      ],
    }
  },
  {
    tag: "functional-exploration",
    title: <>Exploration <b className="font-extrabold">Fonctionnelle</b></>,
    description: <>Nos laboratoires d’analyse médicale et d’exploration fonctionnelle offrent des services avancés pour <b className="font-black text-white">évaluer et diagnostiquer diverses conditions de santé</b>. Grâce à des technologies de pointe et une équipe spécialisée, nous fournissons des résultats précis pour <b className="font-black text-white">un suivi optimal de votre bien-être</b>.</>,
    images: [
      "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1576671081741-c538eafccfff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1016",
      "https://images.unsplash.com/photo-1666887360726-f55472d96c34?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
    ],
    content: {
      title: "Expertise en Évaluation Médicale",
      description:
        "Découvrez notre gamme complète de services d’exploration fonctionnelle, conçus pour évaluer de manière précise et approfondie les fonctions physiologiques et organiques.",

      items: [
        {
          title: "Électrocardiogramme (ECG)",
          description:
            "L’électrocardiogramme, communément appelé ECG, est un examen non invasif qui enregistre l’activité électrique du cœur. Cet examen permet d’évaluer le rythme cardiaque, de détecter d’éventuelles anomalies cardiaques et de diagnostiquer des problèmes tels que les arythmies, les maladies coronariennes et les troubles de la conduction cardiaque. L’ECG est une procédure rapide, indolore et essentielle pour évaluer la santé du cœur.",
          image: "https://plus.unsplash.com/premium_photo-1671874971772-ec1943fac43d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
          link: "#",
        },
        {
          title: "Échographie cardiaque",
          description:
            "L’échographie cardiaque, également connue sous le nom d’échocardiographie, est une technique d’imagerie médicale utilisée pour visualiser les structures et le fonctionnement du cœur. Cet examen utilise des ondes sonores pour produire des images en temps réel du cœur, permettant ainsi d’évaluer la taille des cavités cardiaques, la fonction des valves cardiaques, la force de contraction du muscle cardiaque et la circulation sanguine. L’échographie cardiaque est un outil précieux pour diagnostiquer les maladies cardiaques et évaluer la fonction cardiaque.",
          image: "https://plus.unsplash.com/premium_photo-1702598687286-6e013884c30b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
          link: "#",
        },
        {
          title: "Exploration fonctionnelle",
          description:
            "L’exploration fonctionnelle regroupe un ensemble d’examens et de tests spécialisés visant à évaluer la fonctionnalité des organes et des systèmes vitaux tels que le cœur, les poumons, le foie et les reins. Ces examens peuvent inclure l’électrocardiogramme, la spirométrie, les tests de la fonction hépatique, les tests de la fonction rénale, et d’autres évaluations spécifiques. L’exploration fonctionnelle permet de détecter les anomalies, de surveiller la santé des organes et de contribuer au diagnostic et au suivi des maladies cardiovasculaires, respiratoires, hépatiques et rénales.",
          image: "https://images.unsplash.com/photo-1618245596888-2fa0c17d4cec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1889",
          link: "#",
        },
      ],

      children: <></>,

      faq: [
        {
          question:
            "Qu’est-ce que l’exploration fonctionnelle et pourquoi est-elle importante pour évaluer ma santé ?",
          answer:
            "L’exploration fonctionnelle est une série de tests destinés à évaluer le fonctionnement des organes vitaux comme le cœur, les poumons, le foie ou les reins. Ces examens permettent de diagnostiquer précocement des anomalies, de suivre l’évolution d’une maladie ou d’ajuster un traitement pour un meilleur suivi médical.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
        },
        {
          question:
            "Quels sont les tests de fonction hépatique et que peuvent-ils indiquer ?",
          answer:
            "Les tests de fonction hépatique mesurent les niveaux de différentes enzymes, protéines et substances dans le sang afin d’évaluer la santé du foie. Ils permettent de détecter des affections telles que l’hépatite, la stéatose hépatique, la cirrhose ou encore des effets secondaires médicamenteux sur le foie.",
          Icon: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
        },
      ],
    }
  }
]
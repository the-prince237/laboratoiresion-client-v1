import { BlogSectionProps } from "@/components/types"
import { BiQuestionMark } from "react-icons/bi"
import { GiGuards, GiLetterBomb } from "react-icons/gi"

const allArticles = {
  quoiDeNeufSion: [
      {
        type: "pdf",
        title: "Seminal Fluid Biochemistry",
        tag: "biochimie-du-sperme",
        pdfPath: "/documents/en/seminal-fluid-biochemistry.pdf",
        image: "https://images.unsplash.com/photo-1631824680987-8bae525fc696?q=80&w=1008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        number: 1,
        date: "2022-04-01",
        pages: 3,
        timeToRead: "5 min",
        resume: "Biochemical analysis of seminal plasma is an extremely valuable tool in the investigation of male infertility. It provides information on the functional status of the epididymis, the prostate and the seminal vesicles."
      },
      {
        type: "pdf",
        title: "Corrected Calcium",
        tag: "calcemie-corrigee",
        pdfPath: "/documents/en/corrected-calcium.pdf",
        image: "https://plus.unsplash.com/premium_photo-1750785494644-8eff3405dca4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        number: 2,
        date: "2018-06-01",
        pages: 3,
        timeToRead: "6 min",
        resume: "Ionized calcium measurement is the gold-standard method, but when it is unavailable, corrected calcium is the best estimate of the patient's true serum calcium."
      },
      {
        type: "pdf",
        title: "GastroPanel",
        tag: "gastropanel",
        pdfPath: "/documents/en/gastropanel.pdf",
        image: "https://images.unsplash.com/photo-1715111965648-4832e0890916?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        number: 4,
        date: "2018-05-01",
        pages: 3,
        timeToRead: "7 min",
        resume: "The first non-invasive test for the diagnosis and classification of gastritis. GastroPanel includes biomarkers such as pepsinogen I, pepsinogen II, gastrin-17 and anti-Helicobacter pylori antibodies."
      },
      {
        type: "pdf",
        title: "High-Sensitivity CRP",
        tag: "crp-ultrasensible",
        pdfPath: "/documents/en/high-sensitivity-crp.pdf",
        image: "https://plus.unsplash.com/premium_photo-1674904827807-6577b4bb80f9?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        number: 5,
        date: "2018-01-01",
        pages: 2,
        timeToRead: "5 min",
        resume: "High-sensitivity CRP is an effective biomarker for predicting cardiovascular risk. It reveals the low-grade inflammation responsible for the development and progression of cardiovascular disease."
      },
      {
        type: "pdf",
        title: "Cortisol Testing",
        tag: "le-cortisol",
        pdfPath: "/documents/en/cortisol-testing.pdf",
        image: "https://plus.unsplash.com/premium_photo-1722622864970-be2ea1c24f6f?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        number: 6,
        date: "2018-01-01",
        pages: 3,
        timeToRead: "6 min",
        resume: "Cortisol testing is an important tool for the diagnosis of adrenal disorders. It is indicated in the assessment of adrenal gland dysfunction, particularly when hypercortisolism or hypocortisolism is suspected."
      },
      {
        type: "pdf",
        title: "Effusion Fluid Analysis",
        tag: "liquide-d-epanchement",
        pdfPath: "/documents/en/effusion-fluids.pdf",
        image: "https://images.unsplash.com/photo-1742414313563-c1586482b5ee?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        number: 7,
        date: "2024-09-01",
        pages: 5,
        timeToRead: "10 min",
        resume: "Biochemical, microbiological and cytological analysis of effusion fluids is essential to advance the diagnostic work-up of a wide range of conditions."
      },
      {
        type: "pdf",
        title: "Complete Blood Count (CBC)",
        tag: "numeration-formule-sanguine-nfs",
        pdfPath: "/documents/en/complete-blood-count.pdf",
        image: "https://plus.unsplash.com/premium_photo-1723044801071-1fef0817e1c2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        number: 8,
        date: "2019-01-01",
        pages: 6,
        timeToRead: "10 min",
        resume: "Correct interpretation of the complete blood count helps point towards diagnostic hypotheses and supports the rational prescription of further testing."
      },
      {
        type: "pdf",
        title: "NT-proBNP",
        tag: "nt-probmp",
        pdfPath: "/documents/en/nt-probnp.pdf",
        image: "https://images.unsplash.com/photo-1567974775951-4a1759f26045?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        number: 9,
        date: "2018-01-01",
        pages: 3,
        timeToRead: "7 min",
        resume: "NT-proBNP is currently the most powerful biological marker for the diagnosis and monitoring of heart failure. It can rule out heart failure as the cause of dyspnea."
      },
      {
        type: "pdf",
        title: "Procalcitonin",
        tag: "procalcitonine",
        pdfPath: "/documents/en/procalcitonin.pdf",
        image: "https://plus.unsplash.com/premium_photo-1669301638284-ed33553ef8fa?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        number: 10,
        date: "2018-01-01",
        pages: 3,
        timeToRead: "5 min",
        resume: "Procalcitonin is the most effective marker for establishing the bacterial origin of an inflammatory syndrome. Its production is specific to infections of bacterial, parasitic or fungal origin."
      },
      {
        type: "pdf",
        title: "PSA — Prostate-Specific Antigen",
        tag: "psa-antigene-prostatique-specifique",
        pdfPath: "/documents/en/psa-prostate-cancer-screening.pdf",
        image: "https://images.unsplash.com/photo-1715111183886-5048b76cc917?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        number: 11,
        date: "2018-09-01",
        pages: 3,
        timeToRead: "6 min",
        resume: "While total PSA measurement is decisive, assessing the free PSA/total PSA ratio provides better diagnostic guidance in prostate cancer screening."
      },
      {
        type: "pdf",
        title: "Apolipoprotein B",
        tag: "apolipoproteine-b",
        pdfPath: "/documents/en/apolipoprotein-b.pdf",
        image: '/images/blog/APOC3.png',
        number: 12,
        date: "2026-03-10",
        pages: 2,
        timeToRead: "4 min",
        resume: "Cardiovascular disease (CVD) is a major public health issue, characterized above all by its silent progression"
      },
      {
        type: "pdf",
        title: "FIB-4",
        tag: "fib-4",
        pdfPath: "/documents/en/fib-4.pdf",
        image: '/images/blog/fib-4.jpg',
        number: 13,
        date: "2026-02-10",
        pages: 3,
        timeToRead: "5 min",
        resume: "a simple and effective new tool for the screening of chronic liver disease."
      },
      {
        type: "pdf",
        title: "Sputum Cytobacteriological Examination (SCBE)",
        tag: "cytobacteriologie-des-crachats",
        pdfPath: "/documents/en/sputum-cytobacteriological-examination.pdf",
        image: '/images/blog/cytobacteriologie-des-crachats.webp',
        number: 14,
        date: "2018-11-06",
        pages: 3,
        timeToRead: "5 min",
        resume: "The SCBE is a key, non-invasive test in the management of bacterial pneumonia"
      },
      {
        type: "pdf",
        title: "Ischemia-Modified Albumin (IMA)",
        tag: "albumine-modifiee-par-l-ischemie-ima",
        pdfPath: "/documents/en/ischemia-modified-albumin.pdf",
        image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        number: 15,
        date: "2026-05-11",
        pages: 3,
        timeToRead: "8 min",
        resume: "IMA is an early biomarker of ischemia, detectable as soon as 6 to 10 minutes after the onset of the ischemic episode, whereas troponin only rises after 3 to 6 hours. A fast, low-cost tool for triaging chest pain in the emergency department."
      }
  ],
}

export const blogSections: BlogSectionProps[] = [
  {
    label: "What's New at SION?",
    tag: 'quoi-de-neuf-sion',
    articles : allArticles.quoiDeNeufSion,
    Icon: BiQuestionMark
  },
  {
    label: "Tips of the Week",
    tag: 'weekly-advice',
    Icon: GiGuards
  },
  {
    label: "Medical News",
    tag: 'news',
    articles: [...allArticles.quoiDeNeufSion].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 6),
    Icon: GiLetterBomb
  }
]

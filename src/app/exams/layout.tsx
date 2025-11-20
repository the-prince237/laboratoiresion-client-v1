import React from 'react'
import { Contacts, ExamsContent, ExamsSidebar, Footer, Header, MobileSidebarDrawer } from '@/components'
import { Metadata } from "next";
import { examsByCategories } from "./data";
import { metaImages } from "@/components/exams/exams-hero";


// Optionnel : créer un tableau d'examens pour microdata/schema.org si vous voulez un SEO riche
const examList = examsByCategories.flatMap((category) =>
  category.exams.map((exam) => ({
    name: exam.exam,
    category: category.label,
    price: exam.cession_price || exam.unit_price || "",
  }))
);


export const metadata : Metadata = {
  title: "Catalogue complet des examens médicaux | Laboratoire Sion",
  description: "Explorez notre catalogue complet d'analyses et examens médicaux au Laboratoire Sion : biologie, biochimie, immunologie, hématologie, bactériologie, endocrinologie, radiologie, échographie, biologie moléculaire, et examens spécialisés. Retrouvez les prix, délais, indications et toutes les informations pour patients et professionnels de santé.",
  keywords: [
    "examens médicaux",
    "laboratoire Sion",
    "biologie médicale",
    "analyses médicales",
    "prix examen",
    "délais examen",
    "biochimie",
    "immunologie",
    "hématologie",
    "bactériologie",
    "radiologie",
    "échographie",
    "biologie moléculaire",
    "examens spécialisés",
    ...examList.map((exam) => `${exam.name}`),
  ],
  openGraph: {
    title: "Catalogue complet des examens médicaux | Laboratoire Sion",
    description: "Explorez notre catalogue complet d'analyses et examens médicaux au Laboratoire Sion : biologie, biochimie, immunologie, hématologie, bactériologie, endocrinologie, radiologie, échographie, biologie moléculaire, et examens spécialisés. Retrouvez les prix, délais, indications et toutes les informations pour patients et professionnels de santé.",
    type: "website",
    url: "https://www.laboratoiresion.com/exams",
    siteName: "Laboratoire Sion",
    images: metaImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalogue complet des examens médicaux | Laboratoire Sion",
    description: "Explorez notre catalogue complet d'analyses et examens médicaux au Laboratoire Sion : biologie, biochimie, immunologie, hématologie, bactériologie, endocrinologie, radiologie, échographie, biologie moléculaire, et examens spécialisés. Retrouvez les prix, délais, indications et toutes les informations pour patients et professionnels de santé.",
  },
};

const Layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <MobileSidebarDrawer />
      <ExamsSidebar />
      <Header />
      <main className="flex-1">
        {children}
        <ExamsContent />
        <Contacts />
        <Footer />
      </main>
    </div>
  )
}

export default Layout
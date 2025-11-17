import React from 'react'
import { Contacts, ExamsContent, ExamsSidebar, Footer, Header, MobileSidebarDrawer } from '@/components'
import { Metadata } from 'next';
import { examsByCategories } from './data';

export const generatePageMetaData = async (): Promise<Metadata> => {
  // Construire un title global
  const title = "Catalogue complet des examens médicaux | Laboratoire Sion";

  // Description globale
  const description = `Explorez notre catalogue complet d'analyses et examens médicaux au Laboratoire Sion : biologie, biochimie, immunologie, hématologie, bactériologie, endocrinologie, radiologie, échographie, biologie moléculaire, et examens spécialisés. Retrouvez les prix, délais, indications et toutes les informations pour patients et professionnels de santé.`;

  // Mots-clés globaux
  const keywords = [
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
  ];

  // OpenGraph pour partage social
  const openGraph = {
    title,
    description,
    type: "website",
    url: "https://www.laboratoiresion.com/exams",
    siteName: "Laboratoire Sion",
  };

  const twitter = {
    card: "summary_large_image",
    title,
    description,
  };

  // Optionnel : créer un tableau d'examens pour microdata/schema.org si vous voulez un SEO riche
  const examList = examsByCategories.flatMap((category) =>
    category.exams.map((exam) => ({
      name: exam.exam,
      category: category.label,
      price: exam.cession_price || exam.unit_price || "",
    }))
  );

  return {
    title,
    description,
    keywords,
    openGraph,
    twitter,
  };
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
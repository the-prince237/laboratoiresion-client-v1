import React from 'react'
import { ContentLayout } from '@/components'
import { Metadata } from "next";
import { examList, examsByCategories, examsSlideImages, metaImages } from "./data";

export const generateMetaData = async () => {

  return ({
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
    ...examList,
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
})
};

const Layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <ContentLayout 
      sidebarProps={{ title: "Catégorie", sections: examsByCategories.map(({ label, tag }) => ({
        label, link: `/exams/${tag}#${tag}`
      }))}}
      contentHeroProps={{ 
        images: examsSlideImages, 
        title: 'Nos Examens', 
        description: "Découvrez notre gamme complète d'examens médicaux, soigneusement organisés par catégories pour faciliter votre recherche. Que vous soyez à la recherche d'analyses de routine ou de tests spécialisés, notre plateforme vous offre un accès rapide et simple à toutes les informations nécessaires pour prendre des décisions éclairées concernant votre santé.",
      }}
    >
      {children}
    </ContentLayout>
  )
}

export default Layout
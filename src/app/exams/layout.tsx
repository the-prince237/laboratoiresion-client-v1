import React from 'react'
import { Contacts, ExamsContent, ExamsSidebar, Footer, Header, MobileSidebarDrawer } from '@/components'
import { examsByCategories } from './data';

export const generateStaticParams = async () => {
  // Crée un tableau plat de tous les exams avec leur catégorie
  const examsFlat = examsByCategories.flatMap((category) =>
    category.exams.map((exam) => ({
      examSlug: (exam?.name as string)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, ""),
      categoryTag: category.tag,
      seo: {
        title: `${exam.name} - ${category.label} | Laboratoire Sion`,
        description: `Découvrez le détail complet de l'examen "${exam.name}" dans la catégorie ${category.label}. Prix, délais, et informations cliniques disponibles pour les patients et professionnels de santé.`,
        keywords: [
          exam.name,
          category.label,
          "laboratoire Sion",
          "examens médicaux",
          "prix examen",
          "délais examen",
          "biologie médicale",
          "analyses de laboratoire",
        ],
      },
    }))
  );

  // Retourne un tableau d'objets pour Next.js static params
  return examsFlat.map((exam) => ({
    params: {
      examSlug: exam.examSlug,
      categoryTag: exam.categoryTag,
    },
    seo: exam.seo,
  }));
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
import React from 'react'
import type { PageProps } from '@/types';
import { examsByCategories } from '../data';

type ExamCategoryPageProps = PageProps<{ examCategoryTag: string }>;

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

const page = async ({params}: ExamCategoryPageProps) => {
  const examCategoryTag = (await params).examCategoryTag;

  return <a href={`#${examCategoryTag}`} className="hidden">scroll</a>;

}

export default page
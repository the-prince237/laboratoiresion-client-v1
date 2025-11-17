import React from 'react'
import type { PageProps } from '@/types';
import { Metadata } from 'next';
import { examsByCategories } from '../data';

type ExamCategoryPageProps = PageProps<{ examCategoryTag: string }>;

export const generateMetaData = async ({ params }: ExamCategoryPageProps): Promise<Metadata> => {
  const examCategoryTag = (await params).examCategoryTag
  const exam = examsByCategories.find((exam) => exam.tag === examCategoryTag);
  if (!exam) {
    return {
      title: 'Examen non trouvé | Laboratoire Sion',
      description: 'L\'examen que vous recherchez n\'a pas été trouvé. Veuillez vérifier l\'URL ou revenir à la page des examens.',
    };
  }

  const title = `${exam.label} - ${exam.tag} | Laboratoire Sion`;
  const description = `Découvrez le détail complet de l'examen "${exam.label}" dans la catégorie ${exam.tag}. Informations sur les prix, délais, et indications cliniques disponibles pour les patients et les professionnels de santé.`;
  const keywords = [
    exam.label,
    exam.tag,
    "laboratoire Sion",
    "examens médicaux",
    "prix examen",
    "délais examen",
    "biologie médicale",
    "analyses de laboratoire",
  ];

  const openGraph = {
    title,
    description,
    type: "website",
    url: `https://www.laboratoiresion.com/exams/${exam.tag.toLowerCase()}/${exam.label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")}`,
    siteName: "Laboratoire Sion",
  };

  const twitter = {
    card: "summary_large_image",
    title,
    description,
  };

  return {
    title,
    description,
    keywords,
    openGraph,
    twitter,
  };
};


const page = async ({params}: ExamCategoryPageProps) => {
  const examCategoryTag = (await params).examCategoryTag;

  return <a href={`#${examCategoryTag}`} className="hidden">scroll</a>;

}

export default page
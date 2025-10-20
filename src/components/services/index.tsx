"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./expansion-hero";
import { useParams } from "next/navigation";

type ServiceTag = "biological-analyses" | "medical-imaging" | "functional-exploration";

export function ServiceHero() {
  const serviceTag = useParams().serviceTag as ServiceTag

  const services :  {
      tag: string;
      title: string | React.ReactNode;
      description: React.ReactNode | string;
      images: string[];
    }[] = [
    {
      tag: "biological-analyses",
      title: <>Analyses <b className="font-extrabold">Biologiques</b></>,
      description: <>Dans le domaine de l’analyse médicale, nos laboratoires assurent des tests précis et un accompagnement personnalisé. Nos biologistes sont là pour vous guider à chaque étape de votre parcours de santé.</>,
      images: [
        "/images/services/hero.jpg",
        "https://images.unsplash.com/photo-1562156194-215edc144205?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1161",
        "https://images.unsplash.com/photo-1524683745036-b46f52b8505a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715",
      ]
    },
    {
      tag: "medical-imaging",
      title: <><b className="font-extrabold">Imagerie</b> Médicale</>,
      description: <>Découvrez notre laboratoire d’analyse médicale et d’imagerie offrant des services de pointe pour un diagnostic précis et une prise en charge efficace de votre santé. Notre équipe experte vous assure des résultats fiables et rapides pour une meilleure compréhension de votre état de santé.</>,
      images: [
        "https://images.unsplash.com/photo-1666886573215-b59d8ad9970c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        "https://images.unsplash.com/photo-1743767588158-72174d1898a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fG1lZGljYWwlMjBpbWFnZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        "https://plus.unsplash.com/premium_photo-1726869613046-16a29dbbab28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
      ]
    },
    {
      tag: "functional-exploration",
      title: <>Exploration <b className="font-extrabold">Fonctionnelle</b></>,
      description: <>Nos laboratoires d’analyse médicale et d’exploration fonctionnelle offrent des services avancés pour <b className="font-black text-white">évaluer et diagnostiquer diverses conditions de santé</b>. Grâce à des technologies de pointe et une équipe spécialisée, nous fournissons des résultats précis pour <b className="font-black text-white">un suivi optimal de votre bien-être</b>.</>,
      images: [
        "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
        "https://images.unsplash.com/photo-1576671081741-c538eafccfff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1016",
        "https://images.unsplash.com/photo-1666887360726-f55472d96c34?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
      ]
    }
  ]

  const { title, description, images } = services.find(s => s.tag === serviceTag)!;

  return (
    <ImagesSlider className="h-[40rem] bg-black" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col gap-20 justify-center items-center"
      >
        <div className="flex flex-col w-full items-center gap-9">
          <h2 className="text-4xl md:text-6xl text-white tracking-tighter text-center font-extralight">
            {title}.
          </h2>
          <p className="text-gray-400 text-center text-sm padded-x max-w-2xl lg:text-lg">{description}
          </p>
        </div>
        <button className="px-4 py-2 backdrop-blur-sm border bg-secondary/10 border-secondary/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
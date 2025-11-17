'use client';
import React from 'react'
import { ImagesSlider } from '../services';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { services } from '../services/data';

const ExamsHero = () => {
  const examsSlideImages = [
    ...services.map(({ images }) => images).flat(),
    ...services.map(({ content }) => content.items.map((item) => item.image)).flat(),
  ]

  return (
    <ImagesSlider
      className="h-[40rem] bg-black" 
      images={examsSlideImages}>
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
        <div className="flex flex-col text-white w-full items-center gap-9">
          <h3 className="text-3xl font-black">Nos Examens</h3>
          <p className="text-white font-extralight text-center max-w-xl">
            {`Découvrez notre gamme complète d'examens médicaux, soigneusement organisés par catégories pour faciliter votre recherche. Que vous soyez à la recherche d'analyses de routine ou de tests spécialisés, notre plateforme vous offre un accès rapide et simple à toutes les informations nécessaires pour prendre des décisions éclairées concernant votre santé.`}
          </p>
        </div>
        <button className="px-4 py-2 backdrop-blur-sm border bg-secondary/10 border-secondary/20 text-white mx-auto text-center rounded-full relative mt-4 flex gap-3">
          Télécharger Les Examens <Download />
        </button>
      </motion.div>
    </ImagesSlider>
  )
}

export default ExamsHero
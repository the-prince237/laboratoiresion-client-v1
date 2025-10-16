"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./expansion-hero";

export function ServiceHero() {
  const images = [
    "/images/services/hero.jpg",
    "https://images.unsplash.com/photo-1562156194-215edc144205?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1161",
    "https://images.unsplash.com/photo-1524683745036-b46f52b8505a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715",
  ];
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
          <h2 className="text-4xl md:text-6xl text-white tracking-tighter text-left font-extralight">
            Analyses <b className="font-extrabold">Biologiques</b>.
          </h2>
          <p className="text-gray-400 text-center text-sm padded-x max-w-2xl lg:text-lg">Dans le domaine de l’analyse médicale, nos laboratoires assurent des tests précis et un accompagnement personnalisé. Nos biologistes sont là pour vous guider à chaque étape de votre parcours de santé.
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
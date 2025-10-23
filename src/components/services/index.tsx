"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./expansion-hero";
import { useParams } from "next/navigation";
import { services, ServiceTag } from "./data";
import ServiceCard from "./service-card";
import FAQ from "./faq";

export function ServiceHero() {
  const serviceTag = useParams().serviceTag as ServiceTag;
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
          <span>Nos Examens En {title} →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}

export function ServiceContent() {
  const serviceTag = useParams().serviceTag as ServiceTag;
  const { title, description, items, children, faq } = services.find(s => s.tag === serviceTag)?.content!;

  return (
    <section className="py-12 lg:py-28 xl:py-44 padded-x w-full flex flex-col items-center gap-12">
      <div className="flex flex-col text-center items-center max-w-2xl gap-5">
        <h3 className="text-3xl font-black">{title}</h3>
        <p className="text-gray-600 font-extralight">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {items.map((item, index) => (
          <ServiceCard key={index} {...item} index={index} />
      ))}
      </div>

      {children}

      <FAQ faqs={faq} />
    </section>
  );
}
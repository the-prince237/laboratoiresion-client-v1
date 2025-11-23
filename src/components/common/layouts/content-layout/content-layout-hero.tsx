'use client';
import { ImagesSlider } from "@/components/services"
import { ContentLayoutProps, CustomLayoutProps } from "@/types";
import { motion } from "motion/react"

export const ContentLayoutHero = ({ images, title, description, children }: ContentLayoutProps) => {

  return (
    <ImagesSlider
      className="h-[40rem] bg-black" 
      images={images}>
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
          <h3 className="text-3xl font-black">{title}</h3>
          <p className="text-white font-extralight text-center max-w-xl">
            {description}
          </p>
        </div>
        {children}
      </motion.div>
    </ImagesSlider>
  )
}

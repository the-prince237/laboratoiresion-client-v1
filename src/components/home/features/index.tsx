'use client';
import * as React from "react"
import { motion, HTMLMotionProps, Variants } from "framer-motion"
import { Microscope, Zap, Shield, Users } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Title1 } from "@/components/common";

interface GradientTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof HTMLMotionProps<"span">> {
  className?: string
  children: React.ReactNode
  as?: React.ElementType
}

function GradientText({
  className,
  children,
  as: Component = "span",
  ...props
}: GradientTextProps) {
  const MotionComponent = motion.create(Component)

  return (
    <MotionComponent
      className={cn(
        "relative inline-flex overflow-hidden bg-white dark:bg-black",
        className,
      )}
      {...props}
    >
      {children}
      <span className="pointer-events-none absolute inset-0 mix-blend-lighten dark:mix-blend-darken">
        <span className="pointer-events-none absolute -top-1/2 h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite,gradient-1_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-1))] mix-blend-overlay blur-[1rem]"></span>
        <span className="pointer-events-none absolute right-0 top-0 h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite,gradient-2_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-2))] mix-blend-overlay blur-[1rem]"></span>
        <span className="pointer-events-none absolute bottom-0 left-0 h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite,gradient-3_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-3))] mix-blend-overlay blur-[1rem]"></span>
        <span className="pointer-events-none absolute -bottom-1/2 right-0 h-[30vw] w-[30vw] animate-[gradient-border_6s_ease-in-out_infinite,gradient-4_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-4))] mix-blend-overlay blur-[1rem]"></span>
      </span>
    </MotionComponent>
  )
}

const filterVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
  },
}

const ContainerStagger = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ transition, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      transition={{
        staggerChildren: transition?.staggerChildren ?? 0.15,
        delayChildren: transition?.delayChildren ?? 0.1,
        ...transition,
      }}
      {...props}
    />
  )
})
ContainerStagger.displayName = "ContainerStagger"

const ContainerAnimated = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ transition, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      variants={filterVariants}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 0.5,
        duration: 0.6,
        ...transition,
      }}
      {...props}
    />
  )
})
ContainerAnimated.displayName = "ContainerAnimated"

interface Feature {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

const FEATURES: Feature[] = [
  {
    id: "tech-1",
    title: "Technologies de Pointe",
    description: "Utilisation des dernières technologies pour des examens précis et fiables.",
    icon: <Microscope className="size-8" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "tech-2",
    title: "Innovation Continue",
    description: "Veille technologique constante pour des examens à la pointe de la technologie.",
    icon: <Zap className="size-8" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "tech-3",
    title: "Fiabilité des Résultats",
    description: "Des analyses précises et des rapports détaillés pour une confiance totale.",
    icon: <Shield className="size-8" />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "tech-4",
    title: "Personnel Spécialisé",
    description: "Une équipe qualifiée et dédiée à vous offrir un service personnalisé.",
    icon: <Users className="size-8" />,
    color: "from-orange-500 to-red-500",
  },
]

function LaboratoireSionFeatures() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950 py-16 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="relative mx-auto max-w-7xl px-6">
        <ContainerStagger className="text-center mb-16">
          <ContainerAnimated>
            <motion.h2 
              className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Pourquoi Nous ?
            </motion.h2>
          </ContainerAnimated>
          <ContainerAnimated>
            <Title1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Découvrez ce qui distingue{" "}
              <GradientText className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Laboratoire Sion
              </GradientText>
            </Title1>
          </ContainerAnimated>
          <ContainerAnimated>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Votre partenaire privilégié pour des examens médicaux de qualité
            </p>
          </ContainerAnimated>
        </ContainerStagger>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/20">
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10`}
                    initial={false}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  <CardHeader className="pb-4">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: [0, -10, 10, -5, 5, 0] }}
                      transition={{ 
                        scale: { type: "spring", stiffness: 300, damping: 15 },
                        rotate: { duration: 0.5, ease: "easeInOut" }
                      }}
                      className={`inline-flex w-fit p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg mb-4`}
                    >
                      {feature.icon}
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.title}
                    </motion.h3>
                  </CardHeader>
                  
                  <CardContent>
                    <motion.p 
                      className="text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.description}
                    </motion.p>
                  </CardContent>

                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1.2, 
                      delay: index * 0.15 + 0.4,
                      ease: "easeOut" 
                    }}
                  />
                  
                  <motion.div
                    className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${feature.color} opacity-0 blur-2xl group-hover:opacity-20`}
                    initial={false}
                    whileHover={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.2, 0.2],
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <ContainerStagger className="mt-16 text-center">
          <ContainerAnimated>
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-block"
            >
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700 relative overflow-hidden"
                whileHover={{ boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
              >
                <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%", opacity: 0.2 }}
                  whileHover={{ x: "100%", transition: { duration: 0.6 } }}
                />
                <span className="relative z-10">Prendre Rendez-vous</span>
              </motion.button>
            </motion.div>
          </ContainerAnimated>
        </ContainerStagger>
      </div>

      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  )
}

export function Features() {
  return <LaboratoireSionFeatures />
}
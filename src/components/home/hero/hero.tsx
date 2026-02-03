import { PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge, GridBackground, GridPattern, Spotlight, Title1, Video } from "../../";
import { HeroToggler } from "./components";
import Link from "next/link";

export function HomeHero() {
  return (
    <div className="w-full overflow-hidden py-20 lg:py-40">

      <GridBackground />
      <div className="opacity-25">

      <Spotlight />
      </div>
      <div className="container relative mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-8 relative justify-evenly h-full flex-col">
            <GridPattern
              squares={[
                [4, 4],
                [5, 1],
                [8, 2],
                [5, 3],
                [5, 5],
                [10, 10],
                [12, 15],
                [15, 10],
                [10, 15],
                [15, 10],
                [10, 15],
                [15, 10],
              ]}
              className={cn(
                "mask-[radial-gradient(400px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
              )}/>
            <div className="flex gap-8 padded-x flex-col">
              <Title1 className="text-5xl md:text-7xl tracking-tighter text-left font-regular">
                Analyses <b className="font-black">Biologiques</b>  et Imagerie <b className="font-black text-orange">Médicale</b>.
              </Title1>
              <div className="w-full flex flex-col gap-4">
                <Badge className="w-fit bg-white/50 backdrop-blur-xl" variant="outline">Je suis ...</Badge>
                <div className="flex flex-col gap-4">
                  <HeroToggler />
                </div>

                <Link href="#contacts" className="px-6 py-2 bg-secondary text-white font-black flex justify-center items-center gap-5 rounded-md" >
                  Contactez Nous <PhoneCall className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid padded-x grid-cols-2 gap-4 xl:gap-8">
            <div className="bg-muted rounded-md aspect-square">
              <Video className="relative rounded-md border-solid border-2" sources={[{ src: '/videos/hero-vid-1.mp4' }]} />
            </div>
            <div className="bg-muted rounded-md row-span-2">
              <Video className="relative rounded-md border-solid border-2" sources={[{ src: '/videos/hero-vid-2.mp4' }]} />
            </div>
            <div className="bg-muted rounded-md aspect-square">              
              <Video className="relative rounded-md border-solid border-2" sources={[{ src: '/videos/hero-vid-3.mp4' }]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

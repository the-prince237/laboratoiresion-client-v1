import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroToggler } from "../home/hero";
import { GridBackground, Spotlight } from "../blocks/spotlight-new";
import { GridPattern } from "./grid-pattern";
import { cn } from "@/lib/utils";
import { Video } from "../common";

function Hero() {
  return (
    <div className="w-full relative overflow-x-hidden py-20 lg:py-40">

      <GridBackground />
      <div className="opacity-25">

      <Spotlight />
      </div>
      <div className="container relative mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 relative justify-evenly h-full flex-col">
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
                "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
              )}/>
            <div className="flex gap-8 flex-col">
              <h1 className="text-5xl md:text-7xl tracking-tighter text-left font-regular">
                Analyse Biologique et Imagerie Médicale
              </h1>
              <div className="w-full flex flex-col gap-4">
                <Badge className="w-fit" variant="outline">Je suis ...</Badge>
                <div className="flex flex-col gap-8">

                <HeroToggler />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Sign up here <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-muted rounded-md aspect-square">
              <Video className="relative rounded-md border-solid border-2 brightness-50 grayscale-50 hover:grayscale-0" sources={[{ src: '/videos/hero-vid-1.mp4' }]} />
            </div>
            <div className="bg-muted rounded-md row-span-2">
              <Video className="relative rounded-md border-solid border-2 brightness-50 grayscale-50 hover:grayscale-0" sources={[{ src: '/videos/hero-vid-2.mp4' }]} />
            </div>
            <div className="bg-muted rounded-md aspect-square">              
              <Video className="relative rounded-md border-solid border-2 brightness-50 grayscale-50 hover:grayscale-0" sources={[{ src: '/videos/hero-vid-3.mp4' }]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };

import { Features, HomeHero, HomeStats } from "@/components";

export default function Home() {
  return (
    <main className="relative">
      <HomeHero />
      <HomeStats />
      <Features />
    </main>
  );
}

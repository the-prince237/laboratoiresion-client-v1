import { Contacts, Features, HomeHero, HomeStats, Testimonials } from "@/components";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <HomeHero />
      <HomeStats />
      <Features />
      {/* TO DO : PARTNERS */}
      <Contacts />
      <Testimonials />
    </main>
  );
}

import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Systems from "@/components/sections/Systems";
import Pricing from "@/components/sections/Pricing";
import Results from "@/components/sections/Results";
import Faq from "@/components/sections/Faq";
import Security from "@/components/sections/Security";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Problem />
        <Systems />
        <Pricing />
        <Results />
        <Faq />
        <Security />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

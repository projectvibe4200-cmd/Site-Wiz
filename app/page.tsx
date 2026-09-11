import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Included from "@/components/Included";
import Showcase from "@/components/Showcase";
import OurStory from "@/components/OurStory";
import WhoItsFor from "@/components/WhoItsFor";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main id="top">
      <Header />

      <Hero />

      <Reveal>
        <Problem />
      </Reveal>

      <Reveal delay={50}>
        <Included />
      </Reveal>

      <Reveal delay={50}>
        <Showcase />
      </Reveal>

      <Reveal delay={50}>
        <OurStory />
      </Reveal>

      <Reveal delay={50}>
        <WhoItsFor />
      </Reveal>

      <Reveal delay={50}>
        <Pricing />
      </Reveal>

      <Reveal delay={50}>
        <FAQ />
      </Reveal>

      <Reveal delay={50}>
        <GetStarted />
      </Reveal>

      <Footer />
    </main>
  );
}
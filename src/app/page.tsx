import ClarityReveal from "@/components/ClarityReveal";
import CtaBand from "@/components/CtaBand";
import Doctors from "@/components/Doctors";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Procedures from "@/components/Procedures";
import Technology from "@/components/Technology";
import Testimonials from "@/components/Testimonials";
import WhyRand from "@/components/WhyRand";

export default function Home() {
  return (
    <>
      <Hero />
      <Procedures />
      <ClarityReveal />
      <WhyRand />
      <Doctors />
      <Technology />
      <Testimonials />
      <FAQ />
      <CtaBand />
    </>
  );
}

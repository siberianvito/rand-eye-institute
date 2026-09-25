import ClarityReveal from "@/components/ClarityReveal";
import CrossLinking from "@/components/CrossLinking";
import CtaBand from "@/components/CtaBand";
import Doctors from "@/components/Doctors";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import HeroVideo from "@/components/HeroVideo";
import Intro from "@/components/Intro";
import Procedures from "@/components/Procedures";
import Referrals from "@/components/Referrals";
import Research from "@/components/Research";
import Technology from "@/components/Technology";
import Testimonials from "@/components/Testimonials";
import WhyRand from "@/components/WhyRand";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <Intro />
      <Procedures />
      <CrossLinking />
      <ClarityReveal />
      <WhyRand />
      <Doctors />
      <Gallery />
      <Technology />
      <Research />
      <Referrals />
      <Testimonials />
      <FAQ />
      <CtaBand />
    </>
  );
}

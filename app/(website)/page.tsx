import HeroSection from "@/app/(website)/(components)/hero-section";
import MyGoal from "@/app/(website)/(components)/my-goal";
import Portfolio from "@/app/(website)/(components)/portfolio";
import WhoAmI from "@/app/(website)/(components)/who-am-i";
import AlgorithmChess from "./(components)/algorithm-chess";
import TechnologySection from "@/app/(website)/(components)/technology-section";
import { ProcessSection } from "@/app/(website)/(components)/process-section";
import CertificationsSection from "./(components)/certifications-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MyGoal />
      <TechnologySection />
      <Portfolio />

      <ProcessSection />
      <AlgorithmChess />
      <CertificationsSection />
      <WhoAmI />
    </>
  );
}

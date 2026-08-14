import Hero from "@/components/Hero";
import Features from "@/components/Features";
import IncludedFeatures from "@/components/IncludedFeatures";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import GetStarted from "@/components/GetStarted";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <IncludedFeatures />
      <SocialProof />
      <FAQ />
      <GetStarted />
    </main>
  );
}

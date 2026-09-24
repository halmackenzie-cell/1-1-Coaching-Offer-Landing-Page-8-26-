import Hero from "@/components/Hero";
import Features from "@/components/Features";
import IncludedFeatures from "@/components/IncludedFeatures";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import GetStarted from "@/components/GetStarted";
import LiveLongLiveStrong from "@/components/LiveLongLiveStrong";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <IncludedFeatures />
      <SocialProof />
      <FAQ />
      <GetStarted />
      <LiveLongLiveStrong />
    </main>
  );
}

import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import {
  BeforeAfterProof,
  CaseStudies,
  FeaturedTransformations,
  FinalCta,
  Footer,
  MetricsStrip,
  ProcessSection,
  ServicesOverview,
  Testimonials,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MetricsStrip />
      <FeaturedTransformations />
      <ServicesOverview />
      <BeforeAfterProof />
      <CaseStudies />
      <ProcessSection />
      <Testimonials />
      <FinalCta />
      <Footer />
    </main>
  );
}

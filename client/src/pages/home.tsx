import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import OCXProductSpotlight from "@/components/ocx-product-spotlight";
import WhyIndustrialSection from "@/components/why-industrial-section";
import TechnologySection from "@/components/technology-section";
import CodeExamplesSection from "@/components/code-examples-section";
import EngineeringExcellenceSection from "@/components/engineering-excellence-section";
import Footer from "@/components/footer";
import { SEOHead } from "@/components/SEOHead";
import { ocxKeywords } from "@/lib/ocx";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Adobe Technologies Limited Uganda | Professional IT Repair, maintenance, consultancy Solutions and Online Presence"
        description="We provide top-notch IT services across Uganda and build safe, functional, beautiful, responsive software applications. Let's bring your ideas to life! Explore OCX, Adobe Technologies' omnichannel CCaaS contact center software for modern support teams."
        keywords={`Adobe Technologies Limited Uganda, IT repair Uganda, IT maintenance Uganda, IT consultancy Uganda, software applications Uganda, ${ocxKeywords}`}
        url="https://adobeitechug.com"
      />
      <div className="min-h-screen bg-background text-foreground">
      <Navigation />                
      <HeroSection />
      <OCXProductSpotlight />
      <WhyIndustrialSection />
      <TechnologySection />
      <CodeExamplesSection />
      <EngineeringExcellenceSection />
      <Footer />
    </div>
    </>
  
  );
}

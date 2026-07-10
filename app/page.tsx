import type { Metadata } from "next";
import Careers from "@/components/home/Careers";
import CollabCulture from "@/components/home/CollabCulture";
import ContactSection from "@/components/home/ContactSection";
import Flagship from "@/components/home/Flagship";
import Hero from "@/components/home/Hero";
import ProcessSection from "@/components/home/ProcessSection";
import ProductTabs from "@/components/home/ProductTabs";
import ServicesGrid from "@/components/home/ServicesGrid";
import { organizationJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <Hero />
      <ProductTabs />
      <ServicesGrid />
      <ProcessSection />
      <Flagship />
      <CollabCulture />
      <Careers />
      <ContactSection />
    </>
  );
}

import Careers from "@/components/home/Careers";
import CollabCulture from "@/components/home/CollabCulture";
import ContactSection from "@/components/home/ContactSection";
import Flagship from "@/components/home/Flagship";
import Hero from "@/components/home/Hero";
import ProcessSection from "@/components/home/ProcessSection";
import ProductTabs from "@/components/home/ProductTabs";
import ServicesGrid from "@/components/home/ServicesGrid";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { organizationJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  path: "/",
  // Absolute: the layout's title template doesn't apply to a page in its own
  // segment, and the brand belongs after what we do, not before it.
  title: { absolute: `Custom Software, AI Agents & ERP in Malaysia | ${site.name}` },
  description: site.description,
});

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

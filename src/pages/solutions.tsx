import SEO from "@components/common/seo";
import Layout from "@components/layout";
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import React, { useEffect } from "react";

import AddonsGrid from "../components/corpsite/AddonsGrid";
import TierDetailCards from "../components/corpsite/TierDetailCards";
import TierTable from "../components/corpsite/TierTable";

type Props = {
  location?: {
    pathname: string;
  };
};

const SolutionsPage: React.FC<Props> = ({ location }: Props) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout location={location?.pathname ?? "/solutions"}>
      <SEO
        title="Corpsite — Solutions & Pricing | Corplabs"
        description="Corpsite is the Corplabs pillar for websites — design, build, and ongoing care. Six tiers from RM 2,000 starter sites to enterprise platforms. Every plan includes a transparent monthly retainer."
        keywords={[
          "Corpsite",
          "Corplabs",
          "website design Malaysia",
          "Next.js websites",
          "Payload CMS",
          "Cloudflare Pages",
          "NGO website Malaysia",
          "WhatsApp AI agent",
        ]}
      />
      <Header />
      <main className="min-h-screen bg-black-950">
        {/* Hero — coming in PR5 */}
        <TierTable />
        <TierDetailCards />
        <AddonsGrid />
        {/* Corpsite for Good — coming in PR4 */}
        {/* Plan Selector — coming in PR6 */}
        {/* FAQ — coming in PR7 */}
        {/* Footer CTA — coming in PR5 */}
      </main>
      <Footer />
    </Layout>
  );
};

export default SolutionsPage;

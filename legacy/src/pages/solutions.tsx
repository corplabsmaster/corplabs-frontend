import SEO from "@components/common/seo";
import Layout from "@components/layout";
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import React, { useEffect } from "react";

import SolutionsCta from "../components/solutions/SolutionsCta";
import SolutionsHero from "../components/solutions/SolutionsHero";
import SolutionsPillars from "../components/solutions/SolutionsPillars";

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
        title="Solutions — The Corplabs Lineup | Corplabs"
        description="Corplabs delivers four pillars: Corpi (AI WhatsApp agents), Corpcode (custom software builds), Corprise (subscription-priced ERP), and Corpsite (websites). One team, one playbook."
        keywords={[
          "Corplabs",
          "solutions Malaysia",
          "AI WhatsApp agent",
          "custom software Malaysia",
          "ERP Malaysia",
          "website design Malaysia",
        ]}
      />
      <Header />
      <main className="min-h-screen bg-black-950">
        <SolutionsHero />
        <SolutionsPillars />
        <SolutionsCta />
      </main>
      <Footer />
    </Layout>
  );
};

export default SolutionsPage;

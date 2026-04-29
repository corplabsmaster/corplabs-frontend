import SEO from "@components/common/seo";
import Layout from "@components/layout";
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import React, { useEffect } from "react";

import CorpcodeHero from "../components/corpcode/CorpcodeHero";
import FaqSection from "../components/corpcode/FaqSection";
import FinalCta from "../components/corpcode/FinalCta";
import ProcessSteps from "../components/corpcode/ProcessSteps";
import TechStack from "../components/corpcode/TechStack";
import ThreePillars from "../components/corpcode/ThreePillars";
import TierFinder from "../components/corpcode/TierFinder";
import TierTable from "../components/corpcode/TierTable";
import ValueProps from "../components/corpcode/ValueProps";

type Props = {
  location?: {
    pathname: string;
  };
};

const CorpcodePage: React.FC<Props> = ({ location }: Props) => {
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
    <Layout location={location?.pathname ?? "/corpcode"}>
      <SEO
        title="Corpcode — Custom Software Builds for Southeast Asia | Corplabs"
        description="Corpcode by Corplabs designs, builds, and maintains custom software — internal tools, web apps, real-time AI systems, and ERP-class platforms. Lite from RM30k, Standard RM60k, Advanced RM150k, Enterprise RM300k+. Discovery from RM5k."
        keywords={[
          "Corpcode",
          "Corplabs",
          "custom software Malaysia",
          "ERP development Malaysia",
          "internal tools",
          "web application development",
          "AI software development",
          "Southeast Asia software team",
        ]}
      />
      <Header />
      <main className="min-h-screen bg-black-950">
        <CorpcodeHero />
        <ValueProps />
        <TierTable />
        <TierFinder />
        <ProcessSteps />
        <TechStack />
        <ThreePillars variant="page" currentId="corpcode" />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </Layout>
  );
};

export default CorpcodePage;

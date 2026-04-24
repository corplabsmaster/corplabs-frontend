import SEO from "@components/common/seo";
import Layout from "@components/layout";
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import React from "react";

import AIIntegrationSection from "../components/corprise/AIIntegrationSection";
import CompetitorComparison from "../components/corprise/CompetitorComparison";
import CorpriseHero from "../components/corprise/CorpriseHero";
import FAQSection from "../components/corprise/FAQSection";
import FeatureMatrix from "../components/corprise/FeatureMatrix";
import FinalCTA from "../components/corprise/FinalCTA";
import FoundingFiveCard from "../components/corprise/FoundingFiveCard";
import MyInvoisSection from "../components/corprise/MyInvoisSection";
import PricingTiers from "../components/corprise/PricingTiers";
import ProblemSection from "../components/corprise/ProblemSection";
import ProcessTimeline from "../components/corprise/ProcessTimeline";
import ScorecardWidget from "../components/corprise/ScorecardWidget";
import SolutionSection from "../components/corprise/SolutionSection";
import TrustBar from "../components/corprise/TrustBar";

type Props = {
  location?: {
    pathname: string;
  };
};

const CorprisePage: React.FC<Props> = ({ location }: Props) => {
  return (
    <Layout location={location?.pathname ?? "/corprise"}>
      <SEO
        title="Corprise — Subscription-Priced ERP for Malaysian SMEs"
        description="Corprise replaces RM 80k+ Odoo implementations with a monthly subscription from RM 1,000. MyInvois-ready, AI included, month-to-month after 3 months. Built by Corplabs Sdn Bhd."
        keywords={[
          "Corprise",
          "Corplabs",
          "Odoo Malaysia",
          "ERP subscription Malaysia",
          "MyInvois",
          "LHDN e-Invoice",
          "Malaysian SME ERP",
        ]}
      />
      <Header />
      <main className="min-h-screen bg-black-950">
        <CorpriseHero />
        <TrustBar />
        <ProblemSection />
        <SolutionSection />
        <ProcessTimeline />
        <PricingTiers />
        <ScorecardWidget />
        <FeatureMatrix />
        <CompetitorComparison />
        <MyInvoisSection />
        <AIIntegrationSection />
        <FoundingFiveCard />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </Layout>
  );
};

export default CorprisePage;

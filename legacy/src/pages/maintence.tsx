import SEO from "@components/common/seo";
import Layout from "@components/layout";
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import React from "react";
import { Link } from "gatsby";

type Props = {
  location?: {
    pathname: string;
  };
};

const Maintenance: React.FC<Props> = ({ location }: Props) => {
  return (
    <Layout location={location.pathname}>
      <SEO
        title="Under Maintenance"
        description="This page is currently under maintenance. Please check back later."
      />
      <Header />
      <div className="min-h-screen bg-black-950 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto py-16">
          {/* Maintenance Icon */}
          <div className="mb-8">
            <svg
              className="w-24 h-24 mx-auto text-[#00FF94]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-interbold text-white-100 mb-4">
            Under Maintenance
          </h1>

          <p className="text-gray-200 font-worksanslight mb-8 leading-relaxed">
            We&apos;re currently updating this section to bring you an even
            better experience. Please check back later. Thank you for your
            patience!
          </p>

          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 text-base font-intermedium text-[#000B42] bg-[#00FF94] rounded-lg hover:bg-[#00FF94]/90 transition-colors duration-300"
          >
            Back to Home
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Maintenance;

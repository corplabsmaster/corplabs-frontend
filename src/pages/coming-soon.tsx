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

const ComingSoon: React.FC<Props> = ({ location }: Props) => {
  return (
    <Layout location={location.pathname}>
      <SEO
        title="Coming Soon"
        description="This feature is coming soon. Stay tuned for updates!"
      />
      <Header />
      <div className="min-h-screen bg-black-950 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto py-16">
          {/* Coming Soon Icon */}
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-interbold text-white-100 mb-4">
            Coming Soon
          </h1>

          <p className="text-gray-200 font-worksanslight mb-8 leading-relaxed">
            We&apos;re working hard to bring you something amazing. Stay tuned
            for exciting updates and new features!
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

export default ComingSoon;

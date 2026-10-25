import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /*
   * Addresses from earlier versions of the site that Google still crawls and
   * that have a clear equivalent today. Permanent (308) so their ranking
   * history carries over. Old pages with no equivalent (/coming-soon,
   * /maintence) are left to 404 on purpose — sending unrelated pages to the
   * homepage just gets them reported as soft 404s instead.
   */
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/blogs", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;

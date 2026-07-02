import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";

type Props = {
  description?: string;
  lang?: string;
  meta?: Array<any>;
  keywords?: Array<any>;
  title?: string;
  schemaMarkup?: string;
};

const SEO: React.FC<Props> = ({
  description,
  lang,
  meta,
  keywords,
  title,
  schemaMarkup,
}: Props) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`${data.site.siteMetadata.title} | %s`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
                 {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:url`,
                content: `https://corplabs.co`,
              },
              {
                property: `og:site_name`,
                content: `Corplabs | ${data.site.siteMetadata.description}`,
              },
              {
                property: `og:local`,
                content: `en-BD`,
              },
              {
                property: `og:image`,
                content: `https://www.corplabs.co/static/tech-lead-e2960110eda7be2a4c94576816b47b79.png`,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                name: `twitter:card`,
                content: metaDescription,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          >
            {schemaMarkup && (
              <script type="application/ld+json">
                {JSON.stringify(schemaMarkup)}
              </script>
            )}
          </Helmet>
        );
      }}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

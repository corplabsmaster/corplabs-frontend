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
                name: `Corplabs`,
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
                content: `https://www.google.com`,
              },
              {
                name: `keywords`,
                content: keywords.join(","),
              },
              {
                property: `og:site_name`,
                content: `Jeetbuzz Casino - Live Cricket Betting | ${title}`,
              },
              {
                property: `og:description`,
                content: `lorem ipsum`,
              },
              {
                name: `Corplabs`,
                content: `summary`,
              },
              {
                name: `Corplabs`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `Corplabs`,
                content: title,
              },
              {
                name: `Corplabs`,
                content: metaDescription,
              },
              {
                name: "Corplabs",
                content: "Idea To Reality",
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

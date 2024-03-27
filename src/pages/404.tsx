import React from "react";

import SEO from "@components/common/seo";
import ErrorResults from "@components/common/errorResults";

type Props = {
  default?: any;
};
const NotFoundPage: React.FC<Props> = () => (
  <>
    <SEO title="404: Not found" />
    <ErrorResults errCode={"notfound"} />
  </>
);

export default NotFoundPage;

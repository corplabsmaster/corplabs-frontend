import React from "react";
import { Location } from "@reach/router";
import queryString from "query-string";

type Props = {
  location?: any;
  navigate?: any;
  history?: any;
  ComponentToWrap: React.ComponentType;
};

const withLocation: React.FC<Props> =
  (ComponentToWrap: React.ComponentType) => (props: any) =>
    (
      <Location>
        {({ location, navigate, history }: any) => (
          <ComponentToWrap
            {...props}
            location={location}
            navigate={navigate}
            history={history}
            search={location.search ? queryString.parse(location.search) : {}}
          />
        )}
      </Location>
    );

export default withLocation;

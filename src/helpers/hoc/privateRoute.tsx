import React from "react";
import { navigate } from "gatsby";

// import "../../../__mock__/matchMedia.mock";
import { isLoggedIn } from "@services/auth";
import { URLS, paths } from "@helpers/const";

type Props = {
  location?: {
    pathname?: string;
  };
  component?: any;
  path?: any;
};

const PrivateRoute: React.FC<Props> = ({
  component: Component,
  location,
  ...rest
}: Props) => {
  if (!isLoggedIn() && location.pathname !== paths.access) {
    if (typeof window !== "undefined") {
      navigate(URLS.login);
    }
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;

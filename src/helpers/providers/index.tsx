import React from "react";
import { ApolloProvider } from "@apollo/client";

// import { Provider as ReduxProvider } from "react-redux"

import { apollo } from "./clients";
// import { createReduxStore } from "./redux/store"

export const wrapRootElement: React.FC = ({ element }) => (
  <ApolloProvider client={apollo}>{element}</ApolloProvider>
);

// export default ({ element }) => (
//   <ReduxProvider store={createReduxStore()}>{element}</ReduxProvider>
// )
